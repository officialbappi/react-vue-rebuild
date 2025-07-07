
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`fixed w-full top-0 left-0 px-0 py-3 transition-all duration-300 z-50 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-1 cursor-pointer" onClick={() => handleNavigation('/')}>
          <img 
            src="/img/website-logo.png" 
            alt="Cloudnine Northeast" 
            className="w-[120px] h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex justify-around items-center flex-[0_0_50%] max-w-[50%] ${
          isScrolled ? 'text-[#0085DD]' : 'text-[#0085DD]'
        }`}>
          <p 
            className="font-['Jost'] text-sm font-semibold uppercase cursor-pointer hover:text-[#ff6b00] transition-colors duration-300"
            onClick={() => handleNavigation('#packages')}
          >
            Packages
          </p>
          <p 
            className="font-['Jost'] text-sm font-semibold uppercase cursor-pointer hover:text-[#ff6b00] transition-colors duration-300"
            onClick={() => handleNavigation('/travel-accessories')}
          >
            Travel Assistance
          </p>
          <p 
            className="font-['Jost'] text-sm font-semibold uppercase cursor-pointer hover:text-[#ff6b00] transition-colors duration-300"
            onClick={() => handleNavigation('/cars')}
          >
            Cars & Bikes
          </p>
          <p 
            className="font-['Jost'] text-sm font-semibold uppercase cursor-pointer hover:text-[#ff6b00] transition-colors duration-300"
            onClick={() => handleNavigation('/hotel')}
          >
            Hotels
          </p>
          <p 
            className="font-['Jost'] text-sm font-semibold uppercase cursor-pointer hover:text-[#ff6b00] transition-colors duration-300"
            onClick={() => handleNavigation('/events')}
          >
            Events
          </p>
          <p 
            className="font-['Jost'] text-sm font-semibold uppercase cursor-pointer hover:text-[#ff6b00] transition-colors duration-300"
            onClick={() => handleNavigation('/about')}
          >
            About Us
          </p>
        </div>

        {/* Mobile Menu Button */}
        <div 
          className="md:hidden flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-[25px] h-[3px] bg-[#0085DD] transition-all duration-300 ${
            isMenuOpen ? 'transform rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`w-[25px] h-[3px] bg-[#0085DD] transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-[25px] h-[3px] bg-[#0085DD] transition-all duration-300 ${
            isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
          }`}></span>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 w-[60%] h-screen bg-black text-white flex flex-col items-center justify-center transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <p className="text-white text-base p-4 cursor-pointer hover:text-[#0085DD]" onClick={() => handleNavigation('#packages')}>Packages</p>
          <p className="text-white text-base p-4 cursor-pointer hover:text-[#0085DD]" onClick={() => handleNavigation('/travel-accessories')}>Travel Assistance</p>
          <p className="text-white text-base p-4 cursor-pointer hover:text-[#0085DD]" onClick={() => handleNavigation('/cars')}>Cars & Bikes</p>
          <p className="text-white text-base p-4 cursor-pointer hover:text-[#0085DD]" onClick={() => handleNavigation('/hotel')}>Hotels</p>
          <p className="text-white text-base p-4 cursor-pointer hover:text-[#0085DD]" onClick={() => handleNavigation('/events')}>Events</p>
          <p className="text-white text-base p-4 cursor-pointer hover:text-[#0085DD]" onClick={() => handleNavigation('/about')}>About Us</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
