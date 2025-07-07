
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

interface Video {
  src: string;
  title: string;
  description: string;
  views: string;
  likes: string;
  isPlaying: boolean;
}

const VideoReels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [visibleCards, setVisibleCards] = useState(4);
  const [cardWidth, setCardWidth] = useState(280);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});

  const videos: Video[] = [
    {
      src: "/img/video1.mp4",
      title: "Cloudnine Serenity",
      description: "Surrounded by untouched wilderness, it became more than a waterfall but a memory etched in wonder.",
      views: "2.1M views",
      likes: "45K",
      isPlaying: false,
    },
    {
      src: "/img/video2.mp4",
      title: "High on altitude, higher on energy",
      description: "We create moments that turn into lifelong memories, because it's not just about the destination, it's about how you experience the journey.",
      views: "1.8M views",
      likes: "32K",
      isPlaying: false,
    },
    {
      src: "/img/video3.mp4",
      title: "Waterfall Wonders",
      description: "This waterfall in the heart of Jaintia Hills—a cascade of serenity, where every drop sings a lullaby to the weary spirit.",
      views: "3.2M views",
      likes: "67K",
      isPlaying: false,
    },
    {
      src: "/img/video4.mp4",
      title: "Wild Adventures",
      description: "You know where to find us, adventures in Meghalaya awaits.",
      views: "2.7M views",
      likes: "54K",
      isPlaying: false,
    },
    {
      src: "/img/video2.mp4",
      title: "High on altitude, higher on energy",
      description: "We create moments that turn into lifelong memories, because it's not just about the destination, it's about how you experience the journey.",
      views: "1.8M views",
      likes: "32K",
      isPlaying: false,
    },
  ];

  const gap = 24;

  const updateVisibleCards = () => {
    const width = window.innerWidth;
    if (width < 480) {
      setVisibleCards(1);
      setCardWidth(280);
    } else if (width < 768) {
      setVisibleCards(2);
      setCardWidth(250);
    } else if (width < 1024) {
      setVisibleCards(3);
      setCardWidth(260);
    } else {
      setVisibleCards(4);
      setCardWidth(280);
    }
  };

  const startAutoScroll = () => {
    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex(prev => 
        prev >= videos.length - visibleCards ? 0 : prev + 1
      );
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  const toggleAutoScroll = () => {
    setIsAutoScrolling(prev => {
      const newValue = !prev;
      if (newValue) {
        startAutoScroll();
      } else {
        stopAutoScroll();
      }
      return newValue;
    });
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < videos.length - visibleCards) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * visibleCards);
  };

  const playVideo = (index: number) => {
    const videoEl = videoRefs.current[index];
    if (!videoEl) return;

    // Pause all other videos
    Object.entries(videoRefs.current).forEach(([key, vid]) => {
      if (parseInt(key) !== index) {
        vid.pause();
      }
    });

    // Toggle the clicked video
    if (videoEl.paused) {
      videoEl.play();
    } else {
      videoEl.pause();
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    
    if (isAutoScrolling) {
      startAutoScroll();
    }

    return () => {
      window.removeEventListener('resize', updateVisibleCards);
      stopAutoScroll();
    };
  }, [isAutoScrolling, visibleCards]);

  return (
    <div className="bg-white min-h-screen font-['Jost'] py-8 px-4">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm p-8 shadow-2xl">
        {/* Controls */}
        <div className="text-center mb-8">
          <button
            onClick={toggleAutoScroll}
            className={`px-8 py-3 border-2 rounded-full font-medium transition-all duration-300 hover:transform hover:-translate-y-0.5 ${
              isAutoScrolling 
                ? 'bg-gray-800 border-gray-800 text-white' 
                : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-white'
            }`}
          >
            {isAutoScrolling ? "Pause Auto-Scroll" : "Start Auto-Scroll"}
          </button>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          disabled={currentIndex === 0}
          className={`absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-none bg-white/90 text-gray-800 cursor-pointer flex items-center justify-center z-10 transition-all duration-300 shadow-lg ${
            currentIndex === 0 
              ? 'opacity-30 cursor-not-allowed' 
              : 'hover:bg-white hover:scale-110 hover:shadow-xl'
          }`}
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={scrollRight}
          disabled={currentIndex >= videos.length - visibleCards}
          className={`absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-none bg-white/90 text-gray-800 cursor-pointer flex items-center justify-center z-10 transition-all duration-300 shadow-lg ${
            currentIndex >= videos.length - visibleCards 
              ? 'opacity-30 cursor-not-allowed' 
              : 'hover:bg-white hover:scale-110 hover:shadow-xl'
          }`}
        >
          <ArrowRight size={20} />
        </button>

        {/* Video Grid */}
        <div className="overflow-hidden mx-14">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-out py-2"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`
            }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative min-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer transition-all duration-400 ease-out bg-gradient-to-br from-gray-800 to-blue-900 shadow-xl hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
                onClick={() => playVideo(index)}
              >
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 text-white">
                  <div className="mb-3">
                    <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold mb-2 leading-tight">
                      {video.title}
                    </h3>
                    <p className="font-['Jost'] text-sm opacity-90 leading-relaxed line-clamp-3">
                      {video.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium opacity-80 bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm">
                      {video.views}
                    </span>
                    <span className="text-xs font-medium opacity-80 bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm">
                      {video.likes}
                    </span>
                  </div>
                </div>

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/30">
                    <Play size={32} fill="white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(videos.length / visibleCards) }).map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                Math.floor(currentIndex / visibleCards) === index 
                  ? 'bg-gray-800 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              onClick={() => goToPage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoReels;
