
import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/img/beautiful-rainbow-nature.jpg",
    "/img/cascade-boat-clean-china-natural-rural.jpg",
    "/img/fresh-travel-vietnam-natural-china-stone.jpg",
    "/img/thi-lo-su-tee-lor-su-tak-province-thi-lo-su-waterfall-largest-waterfall-thailand.jpg",
    "/img/tourists-taking-photos-beautiful-scenery-skiing-around-deogyusan.jpg",
    "/img/vacation-stone-vietnam-fresh-green-china.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

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
        {images.map((image, index) => (
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
        
        {/* Text Overlay */}
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
};

export default HeroCarousel;
