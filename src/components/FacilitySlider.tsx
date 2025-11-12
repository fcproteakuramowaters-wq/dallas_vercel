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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const imageSection = (
    <div className="w-full md:w-2/5 relative mb-6 md:mb-0">
      <div className="relative overflow-hidden rounded-3xl shadow-lg">
        <Image
          src={images[currentImageIndex]}
          alt={title}
          width={500}
          height={400}
          className="w-full h-auto transition-all duration-500 object-cover"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full px-2 py-1 text-xl font-bold transition-all"
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full px-2 py-1 text-xl font-bold transition-all"
            aria-label="Next image"
          >
            &#8594;
          </button>
        </>
      )}
    </div>
  );

  const textSection = (
    <div className={isImageLeft ? 'md:w-1/2 md:ml-8' : 'md:w-1/2 md:mr-8'}>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );

  return (
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
  );
}
