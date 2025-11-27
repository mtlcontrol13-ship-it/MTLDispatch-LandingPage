import React, { useState } from "react";
import { ICONS } from "../../assets/icons";
import { plans } from "../../helpers/data";

const PricingCards = ({ limit = plans.length, billing = "monthly" }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const visiblePlans = plans.slice(0, limit);
  const containerClasses = "grid gap-6 md:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={containerClasses}>
      {visiblePlans.map((plan, index) => {
        const isHovered = hoveredCard === index;

        const price =
          billing === "yearly"
            ? plan.priceYearly ?? plan.price
            : plan.priceMonthly ?? plan.price;

        const period =
          billing === "yearly"
            ? plan.periodYearly ?? plan.period
            : plan.periodMonthly ?? plan.period;

        // Calculate savings for yearly billing
        const monthlyCost = plan.priceMonthly;
        const yearlyCost = plan.priceYearly;
        const savings =
          typeof monthlyCost === "number" && typeof yearlyCost === "number"
            ? Math.round(
                ((monthlyCost * 12 - yearlyCost) / (monthlyCost * 12)) * 100
              )
            : 0;

        const features = plan.features || plan.detailFeatures || [];

        return (
          <article
            key={plan.name}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
              transition-all duration-300 ease-out
              ${
                isHovered
                  ? "-translate-y-0.5 shadow"
                  : "hover:-translate-y-0.5 hover:shadow"
              }
              w-full max-w-[360px]
            `}
            style={{
              transform: isHovered ? "translateY(-4px)" : undefined,
            }}
          >
            {/* TOP BADGE */}
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-[#C73547] px-3 py-1 text-xs font-semibold text-white shadow-md">
                <ICONS.Sparkles className="h-3 w-3" />
                {plan.badge}
              </div>
            )}

            {/* Header */}
            <header className="relative flex items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>
            </header>

            {/* Content */}
            <div className="relative mt-3 flex flex-1 flex-col gap-6">
              <div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {plan.shortDescription || plan.description}
                </p>

                <div className="mt-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900 transition-all duration-300">
                      {typeof price === "string" &&
                      price.toLowerCase().includes("talk")
                        ? price
                        : `$${price}`}
                    </span>

                    {period && (
                      <span className="text-sm text-gray-500">{period}</span>
                    )}
                  </div>

                  {billing === "yearly" && savings > 0 && (
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                      <ICONS.Check className="h-3 w-3" />
                      Save {savings}% yearly
                    </div>
                  )}
                </div>
              </div>

              <ul className="flex flex-1 flex-col gap-2 text-sm text-gray-700">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 transition-transform duration-200"
                  >
                    <ICONS.CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#07315E] transition-colors duration-200" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <a
              href={plan.href}
              className={`group relative mt-8 inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-[#C73547] px-4 py-2 text-sm font-semibold text-white shadow transition-all duration-300 hover:bg-[#C73547]/90 focus:outline-none focus:ring-2 focus:ring-[#C73547] focus:ring-offset-2
              md:w-auto md:self-start`}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                {plan.cta}
              </span>

              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </a>
          </article>
        );
      })}
    </div>
  );
};

export default PricingCards;
