"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import Image from 'next/image';
import { getRoomById, rooms as allRooms } from '@/lib/rooms';

function daysBetween(a?: string, b?: string) {
  if (!a || !b) return 0;
  const da = new Date(a);
  const db = new Date(b);
  const diff = Math.ceil((db.getTime() - da.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

export default function BookingClient() {
  const params = useSearchParams();
  const router = useRouter();
  const roomId = params?.get('room') || undefined;
  const initialRoom = useMemo(() => getRoomById(roomId), [roomId]);
  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoom.id);
  const room = useMemo(() => getRoomById(selectedRoomId), [selectedRoomId]);

  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [checkin, setCheckin] = useState<string>('');
  const [checkout, setCheckout] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const nights = daysBetween(checkin, checkout);
  const rate = room.rate;
  const total = nights * rate;
  const validDates = Boolean(checkin && checkout && new Date(checkout) > new Date(checkin));
  const validGuestInfo = Boolean(fullName.trim() && email.trim() && phone.trim());

  const handleConfirmBooking = async () => {
    if (!validGuestInfo || !validDates) {
      setMessage('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          roomType: room.title,
          roomRate: rate,
          checkin,
          checkout,
          nights,
          total,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to confirm booking');
      }

      setMessage('✓ Booking confirmed! Check your email for details.');
      // Redirect to home page after 2 seconds
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Book {room.title}</h1>

      {/* Room Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Choose a room</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {allRooms.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRoomId(r.id)}
              className={`text-left border rounded-lg overflow-hidden hover:shadow-lg transition-all p-0 ${r.id === selectedRoomId ? 'ring-2 ring-primary/60' : ''}`}
              aria-pressed={r.id === selectedRoomId}
            >
              <div className="w-full h-40 relative">
                <Image src={r.image} alt={r.title} fill className="object-cover" />
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{r.title}</div>
                  <div className="text-sm text-gray-600">₦{r.rate.toLocaleString()}</div>
                </div>
                <div className="text-sm text-gray-500 mt-2">{r.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        {/* Guest Info Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+234..." className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
            <input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
            <input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)} className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        {/* Room image */}
        <div className="mb-6">
          <div className="w-full h-64 relative rounded overflow-hidden">
            <Image src={room.image} alt={room.title} fill className="object-cover" />
          </div>
        </div>

        {/* Progress / Availability */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-2">
            <div className={`flex-1 h-2 bg-gray-200 rounded overflow-hidden`}> 
              <div style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }} className="h-full bg-blue-500" />
            </div>
            <div className="text-sm text-gray-600 w-32 text-right">Step {step} of 3</div>
          </div>
          <div className="flex gap-3">
            <div className={`text-xs px-2 py-1 rounded ${step >=1 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>Availability</div>
            <div className={`text-xs px-2 py-1 rounded ${step >=2 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>Summary</div>
            <div className={`text-xs px-2 py-1 rounded ${step >=3 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>Confirm</div>
          </div>
        </div>

        {/* Step content */}
        {step === 1 && (
          <div>
            <p className="text-sm text-gray-700 mb-4">Please fill in your information and select your dates, then proceed to the summary.</p>
            {!validGuestInfo && (fullName || email || phone) && (
              <p className="text-sm text-red-600 mb-3">Please fill in all guest information fields.</p>
            )}
            {!validDates && (checkin || checkout) && (
              <p className="text-sm text-red-600 mb-3">Please ensure check-out is after check-in.</p>
            )}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => validGuestInfo && validDates && setStep(2)}
                disabled={!validGuestInfo || !validDates}
                className={`px-4 py-2 rounded text-white ${validGuestInfo && validDates ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}`}>
                Next: Summary
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-lg font-semibold mb-3">Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-500">Room nights</div>
                <div className="text-lg font-medium">{nights}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Room rate (per night)</div>
                <div className="text-lg font-medium">₦{rate.toLocaleString()}</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-lg font-semibold mb-4">
              <div>Total</div>
              <div>₦{total.toLocaleString()}</div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="px-4 py-2 border rounded">Back</button>
              <button onClick={() => setStep(3)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Proceed to Confirm</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-lg font-semibold mb-3">Confirm Booking</h3>
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-gray-700">
              <div><strong>Guest:</strong> {fullName}</div>
              <div><strong>Email:</strong> {email}</div>
              <div><strong>Phone:</strong> {phone}</div>
              <div className="mt-2"><strong>Room:</strong> {room.title} for <strong>{nights}</strong> night(s)</div>
              <div><strong>Total:</strong> ₦{total.toLocaleString()}</div>
            </div>
            {message && (
              <div className={`mb-4 p-3 rounded text-sm ${message.startsWith('✓') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {message}
              </div>
            )}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={loading}
                className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50">
                Back
              </button>
              <button
                type="button"
                onClick={handleConfirmBooking}
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded disabled:opacity-50">
                {loading ? 'Processing...' : 'Confirm Booking'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
