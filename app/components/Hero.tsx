'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Ihr regionaler Fachspezialist',
      subtitle: 'für die Gewerbliche Reinigung',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=800&fit=crop',
      objectPosition: 'center 30%',
    },
    {
      title: 'Professionelle Reinigungsdienste',
      subtitle: 'für Ihr Unternehmen',
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920&h=800&fit=crop',
      objectPosition: 'center 30%',
    },
    {
      title: 'Qualität und Zuverlässigkeit',
      subtitle: 'auf die Sie sich verlassen können',
      image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1920&h=800&fit=crop',
      objectPosition: 'center 30%',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative h-[600px] lg:h-[700px] overflow-hidden mt-[88px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={`${slide.title} - ${slide.subtitle}`}
              fill
              className="object-cover"
              style={{ objectPosition: slide.objectPosition }}
              priority={index === 0}
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 animate-fade-in-delay">
                {slide.subtitle}
              </p>
              <a
                href="#contact"
                className="inline-block mt-8 px-8 py-4 bg-[#6c0c1c] text-white font-semibold rounded-full hover:bg-[#8a1024] transition-all shadow-lg animate-fade-in-delay-2"
              >
                Jetzt Anfragen
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
