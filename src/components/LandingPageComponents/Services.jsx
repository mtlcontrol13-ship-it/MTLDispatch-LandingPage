import React from "react";
import { ICONS } from "../../assets/icons.js";

const services = [
  {
    title: "Implementation & Onboarding",
    description:
      "White-glove setup, data import, and workflow tailoring so you go live fast.",
    Icon: ICONS.Wrench,
    href: "/services/implementation-onboarding",
  },
  {
    title: "Integrations",
    description:
      "We connect payments, accounting, GPS, SMS, and partner systems via secure APIs.",
    Icon: ICONS.PlugZap,
    href: "/services/integrations",
  },
  {
    title: "Training & Support",
    description:
      "Hands-on team training plus multi-channel support when you need it most.",
    Icon: ICONS.Headset,
    href: "/services/training-support",
  },
  {
    title: "Performance Optimization",
    description:
      "Regular reviews of acceptance, ETAs, and utilization with actionable guidance.",
    Icon: ICONS.Rocket,
    href: "/services/performance-optimization",
  },
  {
    title: "Cloud Hosting",
    description:
      "Secure, scalable hosting with monitoring, backups, and proactive maintenance.",
    Icon: ICONS.CloudCog,
    href: "/services/cloud-hosting",
  },
  {
    title: "Compliance & Security",
    description:
      "Role-based access, audit trails, and best practices to protect fleet and data.",
    Icon: ICONS.ShieldCheck,
    href: "/services/compliance-security",
  },
];

const Services = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <section
      id="services"
      className="pt-10 pb-20 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0 mx-auto max-w-7xl scroll-mt-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Expert Services</h2>
        <p className="mt-2 text-gray-600">
          Partner with our implementation, integrations, and success teams to
          launch smoothly and keep operations running at peak performance.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {featuredServices.map(({ title, description, Icon }) => (
          <div
            key={title}
            className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#07315E]/20 bg-[#07315E]/5 text-[#07315E] shadow-sm">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-[#07315E]/30 bg-white px-7 py-3 text-sm font-semibold text-[#07315E] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#07315E] hover:bg-[#07315E]/5 focus:outline-none focus:ring-2 focus:ring-[#07315E]/30"
        >
          View all services
          <ICONS.ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Services;
