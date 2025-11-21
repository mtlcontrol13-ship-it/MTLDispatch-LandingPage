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
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-10 shadow-md">
        <h2 className="text-3xl font-bold text-gray-900">
          Our Dispatch Performance
        </h2>
        <p className="text-gray-600 mt-2">
          We provide professional dispatch services to streamline your
          operations and maximize delivery efficiency.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-extrabold text-blue-600">
                {stat.value}
              </p>
              <p className="mt-2 text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
