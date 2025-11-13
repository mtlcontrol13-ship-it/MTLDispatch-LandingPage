import React from "react";
import { Layers, PlugZap, Share2, ShieldCheck } from "../../helpers/icons";

const features = [
  {
    title: "Complete Solutions",
    description:
      "All-in-one suite covering dispatch, apps, billing, and reporting to scale your fleet.",
    icon: "Layers",
  },
  {
    title: "QuickBooks Integration",
    description:
      "Sync invoices, payments, and accounts automatically with QuickBooks.",
    icon: "PlugZap",
  },
  {
    title: "Share Platform",
    description:
      "Connect partner fleets to share jobs and expand coverage instantly.",
    icon: "Share2",
  },
  {
    title: "Enterprise-grade Reliability",
    description:
      "Secure, reliable cloud hosting with high uptime and data protection.",
    icon: "ShieldCheck",
  },
];

const iconMap = {
  Layers: Layers,
  PlugZap: PlugZap,
  Share2: Share2,
  ShieldCheck: ShieldCheck,
};

// Tiny outcome chips per feature
const metricsByTitle = {
  "Complete Solutions": "-30% admin time",
  "QuickBooks Integration": "-60% invoicing time",
  "Share Platform": "+20% job coverage",
  "Enterprise-grade Reliability": "99.9% uptime",
};

const Features = () => {
  return (
    <section
      id="features"
      className="pt-10 pb-20 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0 mx-auto max-w-7xl scroll-mt-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Key Features</h2>
        <p className="mt-2 text-gray-600">Purpose-built capabilities that streamline operations, reduce costs, and delight customers.</p>
      </div>

      <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {features.map((f, i) => {
          const Icon = iconMap[f.icon] || Layers;
          const stat = metricsByTitle[f.title];
          return (
            <li key={i} className="group flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#07315E]/20 bg-[#07315E]/5 text-[#07315E] shadow-sm transition-all duration-200 ease-out group-hover:scale-105 group-hover:shadow-md group-hover:border-[#07315E]/30 group-hover:bg-[#07315E]/10">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[#07315E] group-hover:underline underline-offset-4 decoration-[#07315E]/60">
                    {f.title}
                  </h3>
                  {stat && (
                    <span className="inline-flex items-center rounded-full bg-[#07315E]/10 px-2 py-0.5 text-xs font-medium text-[#07315E]">
                      {stat}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-600">{f.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Features;


