import React from "react";
import { ICONS } from "../../assets/icons.js";

const services = [
  {
    title: "Implementation & Onboarding",
    description: "White-glove setup, data import, and workflow tailoring so you go live fast.",
    Icon: ICONS.Wrench,
    href: "/services/implementation-onboarding",
  },
  {
    title: "Integrations",
    description: "We connect payments, accounting, GPS, SMS, and partner systems via secure APIs.",
    Icon: ICONS.PlugZap,
    href: "/services/integrations",
  },
  {
    title: "Training & Support",
    description: "Hands-on team training plus multi-channel support when you need it most.",
    Icon: ICONS.Headset,
    href: "/services/training-support",
  },
  {
    title: "Performance Optimization",
    description: "Regular reviews of acceptance, ETAs, and utilization with actionable guidance.",
    Icon: ICONS.Rocket,
    href: "/services/performance-optimization",
  },
  {
    title: "Cloud Hosting",
    description: "Secure, scalable hosting with monitoring, backups, and proactive maintenance.",
    Icon: ICONS.CloudCog,
    href: "/services/cloud-hosting",
  },
  {
    title: "Compliance & Security",
    description: "Role-based access, audit trails, and best practices to protect fleet and data.",
    Icon: ICONS.ShieldCheck,
    href: "/services/compliance-security",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="pt-10 pb-20 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0 mx-auto max-w-7xl scroll-mt-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Expert Services</h2>
        <p className="mt-2 text-gray-600">
          Partner with our implementation, integrations, and success teams to launch smoothly and keep
          operations running at peak performance.
        </p>
      </div>

      <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
        {services.map(({ title, description, Icon, href }) => (
          <li
            key={title}
            className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <a href={href} className="flex items-start gap-4" aria-label={`Learn more about ${title}`}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#07315E]/20 bg-[#07315E]/5 text-[#07315E] shadow-sm group-hover:border-[#07315E]/40 group-hover:bg-[#07315E]/10">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#07315E]">{title}</h3>
                  <span className="text-xs text-[#07315E] opacity-0 transition group-hover:opacity-100">→</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#07315E] opacity-0 transition group-hover:opacity-100">
                  Learn more
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-[#07315E] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#052447] focus:outline-none focus:ring-2 focus:ring-[#07315E]/40"
        >
          Talk to Services Team
        </a>
        <span className="text-sm text-gray-500">Response within one business day</span>
      </div>
    </section>
  );
};

export default Services;
