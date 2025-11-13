const DispatchSoftware = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-10">
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Dispatch Software</h1>
      <p className="mt-4 text-gray-600">
        Reduce response times and keep every booking on track with our dispatcher console. Automations
        balance supply and demand across zones, while live tracking and two-way messaging give your team
        full control of every job.
      </p>
      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        <li>• Smart auto-assign rules with priorities, coverage limits, and surge controls.</li>
        <li>• Real-time vehicle map with filters for status, driver, and trip type.</li>
        <li>• Integrated communications: SMS, push, and in-app chat from one screen.</li>
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

export default DispatchSoftware;
