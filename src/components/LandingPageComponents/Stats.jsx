import React from "react";

const stats = [
  { value: "260+", label: "Dispatch Experts" },
  { value: "975+", label: "Active Clients" },
  { value: "724+", label: "Deliveries Coordinated" },
  { value: "89+", label: "Pending Dispatch Orders" },
];

const Stats = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl px-8 py-12 shadow-md">
        <div className="grid gap-10 lg:gap-8 lg:grid-cols-5 items-center">
          <div className="space-y-3 lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Stats
            </h2>
            <p className="text-gray-600">
              We help you to unleash the power within your business
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="text-4xl font-extrabold text-indigo-600">
                  {stat.value}
                </p>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
