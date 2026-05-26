'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  async function createBooking(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch(
      'http://localhost:4000/bookings',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          date,
        }),
      }
    );

    const data = await response.json();

    setMessage(JSON.stringify(data));
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border p-6 shadow">
        <h1 className="mb-6 text-2xl font-bold">
          Create Booking
        </h1>

        <form
          onSubmit={createBooking}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Booking Title"
            className="w-full rounded border p-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="date"
            className="w-full rounded border p-3"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded bg-black p-3 text-white"
          >
            Create Booking
          </button>
        </form>

        {message && (
          <pre className="mt-4 rounded bg-gray-100 p-3 text-sm">
            {message}
          </pre>
        )}
      </div>
    </main>
  );
}