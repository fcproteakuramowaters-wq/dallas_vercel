'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/iupdate/bed12.jpg',
    '/iupdate/bed2.jpg',
    '/iupdate/bed4.jpg',
    '/iupdate/bed9.jpg',
    '/iupdate/bed10.jpg',
    '/iupdate/bed3.jpg',
    '/iupdate/bed5.jpg',
    '/iupdate/bed1.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero pt-20 relative h-screen overflow-hidden" aria-label="hero banner with navbar and slideshow">
      <div id="slides-root" className="w-full h-full relative">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url("${slide}")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}

        {/* Overlay Gradient */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.45))',
          }}
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight drop-shadow-lg">
              Discover the perfect blend of luxury, comfort, and convenience at Dallas Grand Beach Hotel and Resort Suite Oghara, Delta State.
            </h1>

            <div className="mt-8">
              <a
                href="https://www.expedia.com/Dallas-Grand-Beach-Hotel-Resort.h66261659.Hotel-Information"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg uppercase"
              >
                make a reservation
              </a>
            </div>
          </div>
        </div>

        {/* Fallback for no-JS */}
        <noscript>
          <div
            style={{
              backgroundImage: `url('/rooms/9.jpg')`,
            }}
            className="absolute inset-0 bg-cover bg-center"
          />
        </noscript>
      </div>
    </div>
  );
}
