const PassengerApp = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-10">
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Passenger App</h1>
      <p className="mt-4 text-gray-600">
        Deliver a branded mobile experience with frictionless booking, live driver tracking, and secure
        payments. Riders stay informed from confirmation to drop-off.
      </p>
      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        <li>• Real-time driver tracking, ETA updates, and push notifications.</li>
        <li>• Saved places, favorite drivers, and multi-stop bookings.</li>
        <li>• In-app payments, receipts, and trip history synced to the dashboard.</li>
      </ul>
      <a
        href="/"
        className="mt-8 inline-flex items-center text-sm font-semibold text-[#07315E] hover:underline"
      >
        ← Back to Home
      </a>
    </section>
  );
};

export default PassengerApp;
