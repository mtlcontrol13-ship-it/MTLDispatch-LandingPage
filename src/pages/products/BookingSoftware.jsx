const BookingSoftware = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-10">
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Booking Software</h1>
      <p className="mt-4 text-gray-600">
        Accept jobs from web, phone, corporate accounts, and partner networks in one streamlined
        workflow. Customers get self-serve tools, while your team sees accurate ETAs, pricing, and job
        statuses without jumping between systems.
      </p>
      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        <li>• Branded web booking with saved places, quotes, and card-on-file.</li>
        <li>• Unified queue for phone orders, corporate accounts, and partner feeds.</li>
        <li>• Rules for deposits, vouchers, and customer-specific pricing.</li>
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

export default BookingSoftware;
