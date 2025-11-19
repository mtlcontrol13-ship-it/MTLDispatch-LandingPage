import React from "react";
import { ICONS } from "../../assets/icons";
import { plans } from "../../helpers/data";

const PricingCards = ({ limit = plans.length, layout = "vertical" }) => {
  const visiblePlans = plans.slice(0, limit);
  const isHorizontal = layout === "horizontal";

  const containerClasses = isHorizontal
    ? "flex flex-col gap-6" // /pricing page
    : "flex flex-col gap-6 md:flex-row md:flex-wrap md:items-stretch"; // homepage

  return (
    <div className={containerClasses} role="list" aria-label="Pricing plans">
      {visiblePlans.map((plan) => {
        const isHighlighted = !!plan.highlighted;

        return (
          <article
            key={plan.name}
            role="listitem"
            className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-sm transition
              hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg
              ${
                isHighlighted
                  ? "border-[#07315E] bg-[#07315E]/5"
                  : "border-gray-200 bg-white"
              }
              ${
                isHorizontal
                  ? "gap-6" // /pricing: single column card
                  : "md:flex-1 md:min-w-[280px]"
              }`}
          >
            {/* Recommended badge in corner for highlighted plan */}
            {isHighlighted && (
              <div className="pointer-events-none absolute -top-3 right-4 rounded-full bg-[#07315E] px-3 py-1 text-xs font-semibold text-white shadow">
                Most popular
              </div>
            )}

            {/* Header */}
            <header className="flex items-center justify-between gap-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>
              {plan.badge && !isHighlighted && (
                <span className="rounded-full bg-[#C73547]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#C73547]">
                  {plan.badge}
                </span>
              )}
            </header>

            {/* Description + price + features */}
            <div
              className={`mt-3 flex flex-1 flex-col gap-6 ${
                isHorizontal ? "" : ""
              }`}
            >
              {/* Description + price */}
              <div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {isHorizontal
                    ? plan.description
                    : plan.shortDescription || plan.description}
                </p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-1 flex-col gap-2 text-sm text-gray-700">
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
              className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow focus:outline-none focus:ring-2 focus:ring-offset-2
                ${
                  isHighlighted
                    ? "bg-[#07315E] text-white focus:ring-[#07315E]"
                    : "bg-[#C73547] text-white focus:ring-[#C73547]"
                }
                md:w-auto md:self-start
              `}
            >
              {plan.cta}
            </a>
          </article>
        );
      })}
    </div>
  );
};

export default PricingCards;
