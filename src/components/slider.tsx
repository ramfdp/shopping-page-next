"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaPlay, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "/slide3.jpg",
    title: "Family Bundle",
    category: "Family • Best Deal",
    desc: "Kebahagiaan dalam satu paket besar.",
    button: "Pesan",
    bg: "bg-black",
    isDark: true
  },
  {
    image: "/slide1.png",
    title: "Sweet Dessert",
    category: "Dessert • Popular",
    desc: "Manisnya lumer di setiap gigitan.",
    button: "Lihat Menu",
    bg: "bg-[#fefce8]", // Light yellow
    isDark: false
  },
  {
    image: "/offerProduct.png",
    title: "Fresh Drinks",
    category: "Beverage • New",
    desc: "Kesegaran alami pelepas dahaga.",
    button: "Coba",
    bg: "bg-[#e0f2fe]", // Light blue
    isDark: false
  },
  {
    image: "/slide2.png",
    title: "Healthy Choice",
    category: "Healthy • Recommended",
    desc: "Sehat, enak, dan bergizi tinggi.",
    button: "Order",
    bg: "bg-[#f3f4f6]", // Light gray
    isDark: false
  },
];

// Triplicate slides for seamless looping: [Clones, Originals, Clones]
const extendedSlides = [...slides, ...slides, ...slides];

const Slider = () => {
  // Start in the middle set
  const [current, setCurrent] = useState(slides.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll configuration with visibility check
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      } else {
        resetTimeout();
        startTimer();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    // Initial start
    startTimer();

    return () => {
      resetTimeout();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [current]);

  const startTimer = () => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 4000);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const nextSlide = () => {
    // Safety check: if we are somehow out of bounds (e.g. background tab), force reset
    if (current >= extendedSlides.length - 1) {
       setIsTransitioning(false);
       setCurrent(slides.length);
       return;
    }

    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    // Calculate the target index in the middle set (slides.length + index)
    setCurrent(slides.length + index);
  };

  // Handle snapping back to the center set for infinite illusion
  const handleTransitionEnd = () => {
    if (current >= slides.length * 2) {
      // Reached the end clones, snap back to start of middle set
      setIsTransitioning(false);
      setCurrent(current - slides.length);
    } else if (current < slides.length) {
      // Reached the start clones, snap forward to end of middle set
      setIsTransitioning(false);
      setCurrent(current + slides.length);
    }
  };

  // Get the 'visual' index (0-3) for dots and active styling
  const visualIndex = current % slides.length;

  return (
    <div className="w-full relative overflow-hidden py-10 md:py-16 bg-[#f5f5f7]">
      
      {/* Carousel Track */}
      <div 
        className={`flex gap-4 md:gap-8 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${isTransitioning ? 'transition-transform duration-700' : ''}`}
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(calc(50vw - var(--slide-half) - (var(--current) * (var(--slide-width) + var(--gap)))))`,
          // @ts-ignore
          "--slide-width": "85vw",
          "--slide-half": "42.5vw",
          "--gap": "1rem",
          "--current": current,
        } as React.CSSProperties}
      >
        <style jsx>{`
          @media (min-width: 768px) {
            div[style] {
              --slide-width: 60vw !important;
              --slide-half: 30vw !important;
              --gap: 2rem !important;
            }
          }
        `}</style>
        
        {extendedSlides.map((slide, index) => {
          // Determine if this specific slide instance is the active one
          const isActive = index === current;
          
          return (
            <div
              key={index}
              className={`
                relative shrink-0 w-[85vw] md:w-[60vw] aspect-video md:aspect-21/9 rounded-4xl overflow-hidden shadow-2xl 
                transition-all duration-700
                ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-95 cursor-pointer hover:opacity-60"}
                ${slide.bg}
              `}
              onClick={() => {
                 if (!isActive) {
                   setIsTransitioning(true);
                   setCurrent(index);
                 }
              }}
            >
              <div className="absolute inset-0 w-full h-full">
                 {slide.image.endsWith('.png') ? (
                     <div className="w-full h-full flex items-center justify-center p-8 md:p-12 relative">
                           <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-linear-to-bl from-gray-400/50 to-transparent"></div>
                          <div className="relative w-2/3 h-full">
                              <Image
                                  src={slide.image}
                                  alt={slide.title}
                                  fill
                                  className="object-contain drop-shadow-2xl"
                              />
                          </div>
                     </div>
                 ) : (
                     <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                     />
                 )}
              </div>

              <div className={`absolute inset-0 bg-linear-to-t ${slide.isDark ? 'from-black/90 via-black/40 to-transparent' : 'from-black/10 via-transparent to-transparent'}`} />

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col items-start justify-end z-20">
                <div className={`flex flex-col items-start text-left mb-4 ${slide.isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
                   <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 leading-tight drop-shadow-sm">
                      {slide.title}
                   </h3>
                   <div className="flex items-center gap-2 text-sm md:text-lg font-medium opacity-90 mb-4">
                      <span className="font-bold">{slide.category.split('•')[0]}</span>
                      <span>•</span>
                      <span>{slide.desc}</span>
                   </div>
                </div>

                <button 
                  className={`
                      flex items-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-semibold transition-transform active:scale-95
                      ${slide.isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#1d1d1f] text-white hover:bg-[#1d1d1f]/90'}
                  `}
                >
                    <span>{slide.button}</span>
                    {visualIndex === 0 ? <FaChevronRight size={12} /> : <FaPlay size={12} />}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              visualIndex === idx ? "bg-[#1d1d1f] scale-125" : "bg-[#1d1d1f]/30 hover:bg-[#1d1d1f]/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
