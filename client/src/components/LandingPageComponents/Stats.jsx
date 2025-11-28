import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 260, label: "Dispatch Experts" },
  { value: 975, label: "Active Clients" },
  { value: 724, label: "Deliveries Coordinated" },
  { value: 89, label: "Pending Dispatch Orders" },
];

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="w-full bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-12 ">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Stats
          </h2>
          <p className="text-gray-600">
            We help you to unleash the power within your business
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-4xl font-extrabold text-indigo-600">
                {inView ? (
                  <CountUp end={stat.value} duration={1.6} suffix="+" />
                ) : (
                  "0+"
                )}
              </p>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
