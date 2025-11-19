import React from "react";
import { ICONS } from "../../assets/icons";
import { plans } from "../../helpers/data";

const PricingCards = ({
  limit = plans.length,
  layout = "vertical",
  billing = "monthly", // NEW
}) => {
  const visiblePlans = plans.slice(0, limit);
  const isHorizontal = layout === "horizontal";
  const containerClasses = isHorizontal
    ? "flex flex-col gap-6"
    : "flex flex-col gap-6 md:flex-row md:flex-wrap";

  return (
    <div className={containerClasses}>
      {visiblePlans.map((plan) => {
        const isHighlighted = !!plan.highlighted;

        // pick price & period based on billing, with safe fallback
        const price =
          billing === "yearly"
            ? plan.priceYearly ?? plan.price
            : plan.priceMonthly ?? plan.price;

        const period =
          billing === "yearly"
            ? plan.periodYearly ?? plan.period
            : plan.periodMonthly ?? plan.period;

        return (
          <article
            key={plan.name}
            className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg
              ${
                isHighlighted
                  ? "border-[#07315E] bg-[#07315E]/5"
                  : "border-gray-200 bg-white"
              }
              ${isHorizontal ? "gap-6" : "md:flex-1 md:min-w-[280px]"}`}
          >
            {plan.highlighted && plan.badge && (
              <div className="absolute -top-3 right-4 rounded-full bg-[#C73547] px-3 py-1 text-xs font-semibold text-white shadow-md">
                {plan.badge}
              </div>
            )}

            {/* Header */}
            <header className="flex items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>
              {!plan.highlighted && plan.badge && (
                <span className="rounded-full bg-[#C73547]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#C73547]">
                  {plan.badge}
                </span>
              )}
            </header>

            {/* Content */}
            <div className="mt-3 flex flex-1 flex-col gap-6">
              <div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {isHorizontal
                    ? plan.description
                    : plan.shortDescription || plan.description}
                </p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900">
                    {typeof price === "string" &&
                    price.toLowerCase().includes("talk")
                      ? price
                      : `$${price}`}
                  </span>
                  {period && (
                    <span className="text-sm text-gray-500">{period}</span>
                  )}
                </div>
              </div>

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

            <a
              href={plan.href}
              className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow focus:outline-none focus:ring-2 focus:ring-offset-2
                ${
                  isHighlighted
                    ? "bg-[#07315E] text-white focus:ring-[#07315E]"
                    : "bg-[#C73547] text-white focus:ring-[#C73547]"
                }
                md:w-auto md:self-start`}
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
