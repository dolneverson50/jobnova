export default function HomePage() {
  return (
    <main className="min-h-screen bg-white p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          JobNova
        </h1>

        <p className="text-xl text-gray-600 mb-10">
          Production deployment successful 🚀
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-3">
              Clients
            </h2>

            <p>
              Create service requests and manage bookings.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-3">
              Providers
            </h2>

            <p>
              Accept jobs and grow your business.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-3">
              Admin
            </h2>

            <p>
              Manage users and platform operations.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}