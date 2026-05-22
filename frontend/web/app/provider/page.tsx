export default function ProviderPage() {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-4xl font-bold">
        Provider Verification
      </h1>

      <div className="border rounded-2xl p-6">
        <p className="mb-4">
          Upload your KYC document for verification.
        </p>

        <input type="file" />

        <button className="mt-4 px-4 py-2 bg-black text-white rounded-xl">
          Submit Verification
        </button>
      </div>
    </div>
  );
}