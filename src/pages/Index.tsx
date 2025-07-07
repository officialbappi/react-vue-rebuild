
import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import BookWithUs from '../components/BookWithUs';
import Blogs from '../components/Blogs';
import WhatWeOffer from '../components/WhatWeOffer';
import Choose from '../components/Choose';
import TrendingTour from '../components/TrendingTour';
import Event from '../components/Event';
import VideoReels from '../components/VideoReels';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <BookWithUs />
      <Blogs />
      <WhatWeOffer />
      <Choose />
      <TrendingTour />
      <Event />
      <VideoReels />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Index;
