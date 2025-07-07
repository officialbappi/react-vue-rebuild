
import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const images = [
    "/img/beautiful-rainbow-nature.jpg",
    "/img/cascade-boat-clean-china-natural-rural.jpg",
    "/img/fresh-travel-vietnam-natural-china-stone.jpg",
    "/img/thi-lo-su-tee-lor-su-tak-province-thi-lo-su-waterfall-largest-waterfall-thailand.jpg",
    "/img/tourists-taking-photos-beautiful-scenery-skiing-around-deogyusan.jpg",
    "/img/vacation-stone-vietnam-fresh-green-china.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Image Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt="Slide"
            className="w-full h-full object-cover animate-[zoomIn_5s_ease-in-out_infinite]"
          />
        </div>
      ))}

      {/* Text Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center items-center text-center px-8">
        <div className="w-4/5 max-w-4xl">
          <p className="text-white font-['Jost'] font-medium uppercase text-lg md:text-xl mb-4">
            Discover Northeast India
          </p>
          <h1 className="text-white font-['Cormorant_Garamond'] font-semibold text-4xl md:text-6xl lg:text-7xl leading-tight">
            Journey Through Paradise
          </h1>
        </div>
      </div>

      {/* Custom zoom animation */}
      <style jsx>{`
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;
