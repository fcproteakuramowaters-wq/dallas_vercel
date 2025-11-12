"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface RoomCardProps {
  id: string;
  title: string;
  price: string;
  image: string;
  color?: string;
  description?: string;
  onViewDetails: (id: string) => void;
}

export default function RoomCard({ id, title, price, image, color = "blue", description = "", onViewDetails, }: RoomCardProps) {
  const colorMap: Record<string, string> = {
    blue: "text-blue-600",
    amber: "text-amber-600",
    purple: "text-purple-600",
    red: "text-red-600",
  };
  const router = useRouter();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover room-img" />
        <div className={`absolute top-0 left-0 px-4 py-2 text-sm font-semibold text-white ${color === 'amber' ? 'bg-amber-600' : color === 'purple' ? 'bg-purple-600' : color === 'red' ? 'bg-red-600' : 'bg-blue-600'}`}>
          {title}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="mb-4 flex items-baseline gap-1">
          <span className={`text-3xl font-bold ${colorMap[color] || 'text-blue-600'}`}>{price}</span>
          <span className="text-gray-500 text-sm">per night</span>
        </div>

        <div className="flex gap-4 mb-4 justify-center">
          <div className="flex flex-col items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${colorMap[color] || 'text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.251a.75.75 0 01.75-.75h6.278a.75.75 0 01.75.75v5.25H8.111v-5.25z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8M5 10V7a2 2 0 012-2h10a2 2 0 012 2v3" />
            </svg>
            <span className="text-xs text-gray-600">WiFi</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${colorMap[color] || 'text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-gray-600">Room Service</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${colorMap[color] || 'text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-xs text-gray-600">Housekeeping</span>
          </div>
        </div>

        <div className="mt-auto flex gap-3 justify-center">
          <button type="button" onClick={() => onViewDetails(id)} className={`flex-1 ${color === 'amber' ? 'bg-amber-500 hover:bg-amber-600' : color === 'purple' ? 'bg-purple-500 hover:bg-purple-600' : color === 'red' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white font-semibold py-2 px-4 rounded-lg transition-colors`}>
            View Details
          </button>
          <button onClick={() => router.push(`/book?room=${encodeURIComponent(id)}`)} className={`flex-1 ${color === 'amber' ? 'bg-amber-600 hover:bg-amber-700' : color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' : color === 'red' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold py-2 px-4 rounded-lg transition-colors`}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
