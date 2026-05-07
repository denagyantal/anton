export default function QuoteNotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Quote Not Found
        </h1>
        <p className="text-gray-600">
          This quote link is invalid or has expired. Please contact your
          contractor.
        </p>
      </div>
    </main>
  );
}
