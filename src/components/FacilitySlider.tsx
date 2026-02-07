'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface FacilitySliderProps {
  images: string[];
  title: string;
  description: string;
  isImageLeft: boolean;
}

export default function FacilitySlider({
  images,
  title,
  description,
  isImageLeft,
}: FacilitySliderProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animTrigger, setAnimTrigger] = useState(false);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Determine interval and animation by facility title
  const getIntervalSeconds = (title: string) => {
    const map: Record<string, number> = {
      casino: 5,
      'event-center': 7,
      gym: 4,
      'night-club': 6,
      'pool-bar': 6,
      'sports-bar': 5,
      'wine-bar': 8,
    };
    const key = title.toLowerCase().replace(/\s+/g, '-');
    const v = map[key] ?? 5;
    return Math.min(8, Math.max(4, v));
  };

  const getAnimClass = (title: string) => {
    const map: Record<string, string> = {
      casino: 'anim-left',
      'event-center': 'anim-right',
      gym: 'anim-down',
      'night-club': 'anim-up',
      'pool-bar': 'anim-fade',
      'sports-bar': 'anim-left',
      'wine-bar': 'anim-right',
    };
    const key = title.toLowerCase().replace(/\s+/g, '-');
    return map[key] ?? 'anim-fade';
  };

  // Auto-advance main image using facility-specific interval. Pause while lightbox open.
  useEffect(() => {
    if (images.length <= 1) return;
    if (isLightboxOpen) return; // pause when lightbox open

    const seconds = getIntervalSeconds(title);
    const ms = seconds * 1000;

    const id = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const next = (prev + 1) % images.length;
        setAnimTrigger(true);
        // reset trigger after animation duration (~700ms)
        setTimeout(() => setAnimTrigger(false), 800);
        return next;
      });
    }, ms);

    return () => clearInterval(id);
  }, [images.length, isLightboxOpen, title]);

  const animClass = getAnimClass(title);

  const [isImageLoading, setIsImageLoading] = useState(true);

  const imageSection = (
    <div className="w-full md:w-2/5 relative mb-8 md:mb-0" role="img" aria-label={`${title} image gallery`}>
      <div
        className={`relative overflow-hidden rounded-3xl shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300 ${animTrigger ? animClass : ''} ${
          isImageLoading ? 'bg-gray-200 animate-pulse' : ''
        }`}
        onClick={() => openLightbox(currentImageIndex)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') openLightbox(currentImageIndex);
        }}
        role="button"
        tabIndex={0}
        aria-label="Open image gallery"
      >
        <Image
          src={images[currentImageIndex]}
          alt={title}
          width={500}
          height={400}
          className="w-full h-auto object-cover"
          onLoadingComplete={() => setIsImageLoading(false)}
        />
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );

  const textSection = (
    <div className={isImageLeft ? 'md:w-1/2 md:ml-10' : 'md:w-1/2 md:mr-10'}>
      <h3 className="text-3xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
      <button
        onClick={() => (window.location.href = '/book')}
        className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        aria-label={`Book ${title} now`}
      >
        Book Now →
      </button>
    </div>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {isImageLeft ? (
          <>
            {imageSection}
            {textSection}
          </>
        ) : (
          <>
            {textSection}
            {imageSection}
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4" 
          onClick={closeLightbox}
          role="dialog"
          aria-label="Image gallery lightbox"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
              aria-label="Close image gallery"
            >
              ✕
            </button>

            {/* Main image */}
            <div className="relative w-full bg-black rounded-lg overflow-hidden">
              <Image
                src={images[lightboxIndex]}
                alt={`${title} ${lightboxIndex + 1}`}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold transition-all shadow-lg"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold transition-all shadow-lg"
                  aria-label="Next image"
                >
                  →
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="text-white text-center mt-4 text-sm font-semibold">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2" role="tablist" aria-label="Image thumbnails">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`w-14 h-14 rounded cursor-pointer overflow-hidden transition-opacity flex-shrink-0 ${
                      idx === lightboxIndex ? 'border-4 border-yellow-400' : 'border-2 border-gray-600 opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => setLightboxIndex(idx)}
                    role="tab"
                    aria-selected={idx === lightboxIndex}
                    aria-label={`Image ${idx + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
