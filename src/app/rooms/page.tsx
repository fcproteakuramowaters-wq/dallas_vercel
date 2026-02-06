"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import RoomDetails from "@/components/RoomDetails";
import { rooms } from "@/lib/rooms";

const roomsData = [
  { id: 'deluxe', title: 'Deluxe Room', price: '₦23,000', image: '/rooms/9.jpg', color: 'blue', description: 'Experience comfort in our spacious deluxe room with premium amenities.', slideImages: ['/rooms/9.jpg', '/iupdate/bed8.jpg', '/iupdate/bed7.jpg', '/iupdate/bed22.jpg', '/iupdate/bed23.jpg'], html: null },
  { id: 'executive', title: 'Executive Deluxe', price: '₦28,000', image: '/rooms/8.jpg', color: 'amber', description: 'Elevated luxury with premium features and exclusive benefits.', slideImages: ['/rooms/8.jpg', '/iupdate/bed6.jpg', '/iupdate/bed13.jpg', '/iupdate/bed14.jpg', '/iupdate/bed24.jpg', '/iupdate/bed27.jpg'], html: null },
  { id: 'super', title: 'Super Executive Deluxe', price: '₦34,000', image: '/rooms/6.jpg', color: 'purple', description: 'The pinnacle of luxury with exclusive amenities and services.', slideImages: ['/rooms/6.jpg', '/iupdate/bed16.jpg', '/iupdate/bed17.jpg', '/iupdate/bed21.jpg', '/iupdate/bed26.jpg'], html: null },
  { id: 'suite', title: 'Executive Suite', price: '₦47,000', image: '/rooms/5.jpg', color: 'red', description: 'The ultimate luxury experience with premium suites and services.', slideImages: ['/rooms/5.jpg', '/iupdate/bed18.jpg', '/iupdate/bed19.jpg', '/iupdate/bed20.jpg', '/iupdate/bed25.jpg'], html: null },
];

const defaultHtml = `
  <h3 class="text-lg font-semibold">Room Overview</h3>
  <p>Adults only</p>

  <h3 class="text-lg font-semibold mt-4">Special Benefits</h3>
  <ul class="list-disc list-inside">
    <li>High-speed Wi-Fi</li>
    <li>Expanded a la carte menu, for purchase</li>
    <li>Evening bar service</li>
  </ul>

  <h3 class="text-lg font-semibold mt-4">Beds and Bedding</h3>
  <ul class="list-disc list-inside">
    <li>Maximum occupancy: 2</li>
    <li>Rollaway beds not permitted</li>
  </ul>

  <h3 class="text-lg font-semibold mt-4">Room Features</h3>
  <ul class="list-disc list-inside">
    <li>18sqm / 194sqft</li>
    <li>Non-smoking</li>
    <li>Soundproof windows</li>
  </ul>
`;

export default function RoomsPage() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<any | null>(null);

  function handleViewDetails(id: string) {
    const found = roomsData.find((r) => r.id === id) || roomsData[0];
    setCurrent({ id: found.id, title: `${found.title} - ${found.price}/night`, image: found.image, slideImages: found.slideImages, html: found.html || defaultHtml });
    setOpen(true);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Our Luxury Rooms</h1>
            <p className="text-blue-100 text-lg">Experience comfort and elegance at Dallas Grand Beach Hotel</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roomsData.map((room, index) => (
              <RoomCard key={room.id} index={index} id={room.id} title={room.title} price={room.price} image={room.image} slideImages={room.slideImages} color={room.color} description={room.description} onViewDetails={handleViewDetails} />
            ))}
          </div>
        </div>

        <RoomDetails open={open} data={current} onClose={() => setOpen(false)} />
      </main>
      <Footer />
    </div>
  );
}
