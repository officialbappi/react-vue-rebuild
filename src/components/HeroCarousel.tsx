
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getHeroBanners } from '../services/heroBannerService';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const { data: heroData = [], isLoading, error } = useQuery({
    queryKey: ['heroBanners'],
    queryFn: getHeroBanners,
  });

  // Filter active banners
  const activeBanners = heroData.filter((banner: any) => banner.isActive);

  useEffect(() => {
    if (activeBanners.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % activeBanners.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [activeBanners.length]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || activeBanners.length === 0) {
    // Fallback to default images if no data
    const defaultImages = [
      "/img/beautiful-rainbow-nature.jpg",
      "/img/cascade-boat-clean-china-natural-rural.jpg",
      "/img/fresh-travel-vietnam-natural-china-stone.jpg",
    ];

    return (
      <>
        <style>
          {`
            @keyframes zoomIn {
              0% { transform: scale(1); }
              100% { transform: scale(1.2); }
            }
          `}
        </style>
        <div className="relative w-full h-screen overflow-hidden">
          {defaultImages.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                style={{
                  animation: index === currentSlide ? 'zoomIn 5s ease-in-out infinite' : 'none'
                }}
              />
            </div>
          ))}
          
          <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center items-center text-center p-8">
            <div className="max-w-4xl w-4/5">
              <p className="text-white font-['Jost'] text-xl font-medium uppercase mb-4">
                Explore Northeast India
              </p>
              <h1 className="text-white font-['Cormorant_Garamond'] text-6xl font-semibold leading-tight">
                Discover Hidden Gems
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>
        {`
          @keyframes zoomIn {
            0% { transform: scale(1); }
            100% { transform: scale(1.2); }
          }
        `}
      </style>
      <div className="relative w-full h-screen overflow-hidden">
        {activeBanners.map((banner: any, index: number) => (
          <div
            key={banner.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'
            }`}
          >
            <img
              src={banner.imageUrl || "/img/beautiful-rainbow-nature.jpg"}
              alt={banner.title || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
              style={{
                animation: index === currentSlide ? 'zoomIn 5s ease-in-out infinite' : 'none'
              }}
            />
          </div>
        ))}
        
        <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center items-center text-center p-8">
          <div className="max-w-4xl w-4/5">
            <p className="text-white font-['Jost'] text-xl font-medium uppercase mb-4">
              {activeBanners[currentSlide]?.subtitle || "Explore Northeast India"}
            </p>
            <h1 className="text-white font-['Cormorant_Garamond'] text-6xl font-semibold leading-tight">
              {activeBanners[currentSlide]?.title || "Discover Hidden Gems"}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
