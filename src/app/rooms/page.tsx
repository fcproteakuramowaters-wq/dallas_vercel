"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import RoomDetails from "@/components/RoomDetails";

const roomsData = [
  { id: 'deluxe', title: 'Deluxe Room', price: '₦20,000', image: '/rooms/9.jpg', color: 'blue', description: 'Experience comfort in our spacious deluxe room with premium amenities.', html: null },
  { id: 'executive', title: 'Executive Deluxe', price: '₦25,000', image: '/rooms/8.jpg', color: 'amber', description: 'Elevated luxury with premium features and exclusive benefits.', html: null },
  { id: 'super', title: 'Super Executive Deluxe', price: '₦30,000', image: '/rooms/6.jpg', color: 'purple', description: 'The pinnacle of luxury with exclusive amenities and services.', html: null },
  { id: 'suite', title: 'Executive Suite', price: '₦42,000', image: '/rooms/5.jpg', color: 'red', description: 'The ultimate luxury experience with premium suites and services.', html: null },
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
    setCurrent({ id: found.id, title: `${found.title} - ${found.price}/night`, image: found.image, html: found.html || defaultHtml });
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
            {roomsData.map((room) => (
              <RoomCard key={room.id} id={room.id} title={room.title} price={room.price} image={room.image} color={room.color} description={room.description} onViewDetails={handleViewDetails} />
            ))}
          </div>
        </div>

        <RoomDetails open={open} data={current} onClose={() => setOpen(false)} />
      </main>
      <Footer />
    </div>
  );
}
