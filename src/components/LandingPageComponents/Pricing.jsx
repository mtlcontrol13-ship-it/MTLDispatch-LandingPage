import React from "react";
import { ICONS } from "../../assets/icons";

const plans = [
  {
    name: "Starter",
    description: "Launch quickly with core dispatch, booking, and mobile apps.",
    price: "£99",
    period: "/mo",
    features: [
      "Web + phone bookings",
      "Driver & passenger apps",
      "Basic invoicing",
      "Email support",
    ],
    cta: "Start Free Trial",
    href: "/pricing/starter",
  },
  {
    name: "Growth",
    description:
      "Scale operations with automations, integrations, and analytics.",
    badge: "Most popular",
    price: "£249",
    period: "/mo",
    features: [
      "Everything in Starter",
      "Auto-assign rules",
      "QuickBooks sync",
      "Priority support",
    ],
    highlighted: true,
    cta: "Request Free Demo",
    href: "/pricing/growth",
  },
  {
    name: "Enterprise",
    description:
      "Tailored platform, SLAs, and dedicated success for large fleets.",
    price: "Let's talk",
    period: "",
    features: [
      "Custom workflows",
      "Unlimited zones & fleets",
      "Dedicated success manager",
      "24/7 support",
    ],
    cta: "Contact Sales",
    href: "/pricing/enterprise",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="pt-25 pb-20 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0 mx-auto max-w-7xl scroll-mt-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Flexible Pricing</h2>
        <p className="mt-2 text-gray-600">
          Choose the plan that matches your fleet today and upgrade as you grow.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`group relative flex flex-col rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 
            ${
              plan.highlighted
                ? "border-[#07315E] bg-[#07315E]/10 shadow-xl scale-[1.02]"
                : "border-gray-200 bg-white shadow-sm hover:shadow-lg hover:scale-[1.01]"
            }
          `}
          >
            {/* Popular Badge */}
            {plan.badge && (
              <span className="absolute -top-3 right-3 rounded-full bg-[#C73547] px-3 py-1 text-xs font-semibold text-white shadow-md">
                {plan.badge}
              </span>
            )}

            {/* Heading */}
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
              {plan.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {plan.description}
            </p>

            {/* Pricing */}
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-bold text-gray-900">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-sm text-gray-500 mb-1">
                  {plan.period}
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="my-6 h-px w-full bg-gray-200" />

            {/* Features */}
            <ul className="flex flex-col gap-3 text-sm text-gray-700">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-lg p-2 transition group-hover:bg-gray-100/40"
                >
                  <ICONS.CheckCircle2 className="mt-0.5 h-5 w-5 text-[#07315E]" />
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href={plan.href}
              className={`mt-8 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 shadow-md 
        ${
          plan.highlighted
            ? "bg-[#07315E] text-white hover:bg-[#052544]"
            : "bg-[#C73547] text-white hover:bg-[#a32c3c]"
        }
      `}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
