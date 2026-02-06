"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface DetailsData {
  id: string;
  title: string;
  image: string;
  slideImages?: string[];
  html?: string;
}

interface RoomDetailsProps {
  open: boolean;
  data?: DetailsData | null;
  onClose: () => void;
}

export default function RoomDetails({ open, data, onClose }: RoomDetailsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = data?.slideImages && data.slideImages.length > 0 ? data.slideImages : [data?.image || ''];

  useEffect(() => {
    // Reset slide to 0 when modal opens
    setCurrentSlide(0);
  }, [open, data?.id]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [open, images.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  if (!open || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[80vh] overflow-hidden transform">
        <div className="flex h-full">
          <div className="w-1/3 bg-gray-100 relative group overflow-hidden">
            <Image 
              key={`${data.id}-${currentSlide}`}
              src={images[currentSlide]} 
              alt={`${data.title} - Image ${currentSlide + 1}`} 
              fill 
              className="object-cover w-full h-full"
              priority
            />
            
            {/* Previous Button */}
            {images.length > 1 && (
              <button
                onClick={handlePrevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ❮
              </button>
            )}
            
            {/* Next Button */}
            {images.length > 1 && (
              <button
                onClick={handleNextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ❯
              </button>
            )}
            
            {/* Slide Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-6' : 'bg-white/50 w-2'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="w-2/3 p-6 overflow-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
              <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-2xl font-bold">✕</button>
            </div>
            <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: data.html || "" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
