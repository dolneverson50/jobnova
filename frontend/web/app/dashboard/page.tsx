'use client';

import { useState } from 'react';
import { api } from '@/lib/api';

export default function DashboardPage() {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const submitBooking = async () => {
    try {
      await api.post('/bookings', {
        category,
        description,
      });

      alert('Booking created');
    } catch (error) {
      console.error(error);
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
          onChange={(e) => setCategory(e.target.value)}
        />

        <textarea
          className="mb-4 w-full border p-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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