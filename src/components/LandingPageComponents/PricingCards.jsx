import React from "react";
import { ICONS } from "../../assets/icons";
import { plans } from "../../helpers/data";

const PricingCards = ({ limit = plans.length, layout = "vertical" }) => {
  const visiblePlans = plans.slice(0, limit);
  const isHorizontal = layout === "horizontal";

  // Container: still flex-based for both layouts
  const containerClasses = isHorizontal
    ? "flex flex-col gap-6" // /pricing
    : "flex flex-col gap-6 md:flex-row md:flex-wrap"; // homepage

  return (
    <div className={containerClasses}>
      {visiblePlans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg
            ${
              plan.highlighted
                ? "border-[#07315E] bg-[#07315E]/5"
                : "border-gray-200 bg-white"
            }
            ${
              isHorizontal
                ? "flex h-full flex-col gap-6" // ⬅️ column layout for /pricing
                : "flex h-full flex-col md:flex-1 md:min-w-[280px]"
            }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
            {plan.badge && (
              <span className="rounded-full bg-[#C73547]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#C73547]">
                {plan.badge}
              </span>
            )}
          </div>

          {/* Main content (description + features) */}
          <div
            className={`${isHorizontal ? "flex flex-1 flex-col gap-6" : ""}`}
          >
            {/* Description + price */}
            <div>
              <p className="mt-2 text-sm text-gray-600">
                {isHorizontal
                  ? plan.description
                  : plan.shortDescription || plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-gray-500">{plan.period}</span>
                )}
              </div>
            </div>

            {/* Features – full width, column */}
            <ul className="mt-6 flex flex-1 flex-col gap-2 text-sm text-gray-700">
              {(isHorizontal
                ? plan.detailFeatures || plan.features
                : plan.features
              ).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ICONS.CheckCircle2 className="mt-0.5 h-4 w-4 text-[#07315E]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <a
            href={plan.href}
            className={`mt-8 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow focus:outline-none focus:ring-2 focus:ring-offset-2
              ${
                plan.highlighted
                  ? "bg-[#07315E] text-white focus:ring-[#07315E]"
                  : "bg-[#C73547] text-white focus:ring-[#C73547]"
              }
              ${isHorizontal ? "self-start" : ""}`}
          >
            {plan.cta}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
