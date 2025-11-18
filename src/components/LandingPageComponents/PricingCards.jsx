import React from "react";
import { ICONS } from "../../assets/icons";

export const plans = [
  {
    name: "Core",
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
    name: "Plus",
    description: "Scale operations with automations, integrations, and analytics.",
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
    name: "Black",
    description: "Tailored platform, SLAs, and dedicated success for large fleets.",
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

const PricingCards = () => (
  <div className="grid gap-6 md:grid-cols-3">
    {plans.map((plan) => (
      <div
        key={plan.name}
        className={`flex h-full flex-col rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
          plan.highlighted
            ? "border-[#07315E] bg-[#07315E]/5"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
          {plan.badge && (
            <span className="rounded-full bg-[#C73547]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#C73547]">
              {plan.badge}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-gray-600">{plan.description}</p>

        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
          {plan.period && <span className="text-sm text-gray-500">{plan.period}</span>}
        </div>

        <ul className="mt-6 flex flex-1 flex-col gap-2 text-sm text-gray-700">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <ICONS.CheckCircle2 className="mt-0.5 h-4 w-4 text-[#07315E]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={plan.href}
          className={`mt-8 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            plan.highlighted
              ? "bg-[#07315E] text-white focus:ring-[#07315E]"
              : "bg-[#C73547] text-white focus:ring-[#C73547]"
          }`}
        >
          {plan.cta}
        </a>
      </div>
    ))}
  </div>
);

export default PricingCards;

