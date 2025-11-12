import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingClient from '@/components/BookingClient';

export const dynamic = 'force-dynamic';

export default function BookPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-20 bg-gray-50">
        <Suspense fallback={<div className="pt-20 text-center">Loading booking UI…</div>}>
          <BookingClient />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
