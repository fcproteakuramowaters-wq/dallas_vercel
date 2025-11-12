'use client';

import Image from 'next/image';
import { useState } from 'react';

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

  const imageSection = (
    <div className="w-full md:w-2/5 relative mb-6 md:mb-0">
      <div className="relative overflow-hidden rounded-3xl shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => openLightbox(0)}>
        <Image
          src={images[0]}
          alt={title}
          width={500}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );

  const textSection = (
    <div className={isImageLeft ? 'md:w-1/2 md:ml-8' : 'md:w-1/2 md:mr-8'}>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row items-center mb-16">
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
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-8 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
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
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold transition-all"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold transition-all"
                  aria-label="Next image"
                >
                  →
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="text-white text-center mt-3 text-sm font-semibold">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`w-14 h-14 rounded cursor-pointer overflow-hidden transition-opacity flex-shrink-0 ${
                      idx === lightboxIndex ? 'border-2 border-yellow-400' : 'border-2 border-gray-600 opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
