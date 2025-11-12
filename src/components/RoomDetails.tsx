"use client";

import Image from "next/image";
import React, { useEffect } from "react";

interface DetailsData {
  id: string;
  title: string;
  image: string;
  html?: string;
}

interface RoomDetailsProps {
  open: boolean;
  data?: DetailsData | null;
  onClose: () => void;
}

export default function RoomDetails({ open, data, onClose }: RoomDetailsProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[80vh] overflow-hidden transform">
        <div className="flex h-full">
          <div className="w-1/3 bg-gray-100 relative">
            <Image src={data.image} alt={data.title} fill className="object-cover" />
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
