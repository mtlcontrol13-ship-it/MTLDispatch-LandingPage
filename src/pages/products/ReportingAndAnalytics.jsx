const ReportingAndAnalytics = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-10">
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Reporting &amp; Analytics</h1>
      <p className="mt-4 text-gray-600">
        Track performance across rides, drivers, accounts, and markets with dashboards and exports. Spot
        trends quickly, then share interactive reports with stakeholders.
      </p>
      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        <li>• KPI dashboards for on-time rate, acceptance, utilization, and revenue.</li>
        <li>• Drill-down filters by zone, vehicle class, account, and driver.</li>
        <li>• Scheduled exports to BI tools or automated email distribution.</li>
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

export default ReportingAndAnalytics;
