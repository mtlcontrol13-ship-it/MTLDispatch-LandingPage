const DriverApp = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-10">
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Driver App</h1>
      <p className="mt-4 text-gray-600">
        Keep drivers productive with an intuitive workflow: job offers, navigation, chat, and earnings
        in one place. Reduce no-shows and improve acceptance with clear information every step of the
        ride.
      </p>
      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        <li>• Job queue with timers, job details, and tap-to-accept controls.</li>
        <li>• Integrated maps, waypoint navigation, and rider contact.</li>
        <li>• Daily earnings, ratings, and compliance reminders.</li>
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

export default DriverApp;
