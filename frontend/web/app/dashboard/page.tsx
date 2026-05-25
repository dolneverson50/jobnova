'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const submitBooking = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/bookings`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category,
            description,
          }),
        }
      );

      if (!res.ok) {
        throw new Error('Failed to create booking');
      }

      alert('Booking created');

      setCategory('');
      setDescription('');
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="max-w-md">
        <input
          className="mb-4 w-full border p-2"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />

        <textarea
          className="mb-4 w-full border p-2"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <button
          className="bg-black p-2 text-white"
          onClick={submitBooking}
        >
          Submit Booking
        </button>
      </div>
    </div>
  );
}