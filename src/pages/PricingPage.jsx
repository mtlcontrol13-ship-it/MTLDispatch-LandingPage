import React, { useState } from "react";
import PageHero from "../components/common/PageHero";
import PricingCards from "../components/LandingPageComponents/PricingCards";

const PricingPage = () => {
  const [billing, setBilling] = useState("monthly"); // visual toggle only

  return (
    <div className="bg-[#F4F7FB] text-slate-900">
      <PageHero title="Pricing" highlights={["Core", "Plus", "Black"]} />

      <main className="relative z-10">
        {/* Main pricing section that overlaps the hero */}
        <section className="mx-auto -mt-16 max-w-6xl rounded-3xl bg-white px-6 py-10 shadow-sm md:px-12 lg:px-16 xl:px-20 2xl:px-0">
          {/* Heading + description + billing toggle */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Flexible plans for every fleet size
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              Start with the essentials and upgrade as you add vehicles,
              markets, and automation. Every plan includes premium support.
            </p>

            {/* Billing toggle */}
            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs md:text-sm">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-3 py-1 font-medium transition ${
                  billing === "monthly"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500"
                }`}
              >
                Monthly billing
              </button>
              <button
                type="button"
                onClick={() => setBilling("yearly")}
                className={`rounded-full px-3 py-1 font-medium transition ${
                  billing === "yearly"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500"
                }`}
              >
                Yearly billing
                <span className="ml-2 rounded-full bg-[#C73547]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#C73547]">
                  Save 15%
                </span>
              </button>
            </div>

            <p className="mt-2 text-[11px] text-slate-500">
              No setup fees. Cancel anytime. All prices in USD.
            </p>
          </div>

          {/* Your existing cards, horizontal + column content */}
          <PricingCards layout="horizontal" />
        </section>

        {/* Comparison strip */}
        <section className="mx-auto mt-8 max-w-6xl px-6 pb-8 md:px-12 lg:px-16 xl:px-20 2xl:px-0">
          <h2 className="text-lg font-semibold text-slate-900">
            Compare plans at a glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            All plans include dispatcher console, booking forms, and mobile
            apps.
          </p>

          <div className="mt-4 grid gap-3 text-xs text-slate-700 md:grid-cols-3 md:text-sm">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="font-semibold text-slate-900">Core</p>
              <p className="mt-1 text-slate-600">
                Best for boutique fleets launching digital dispatch for the
                first time.
              </p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="font-semibold text-slate-900">Plus</p>
              <p className="mt-1 text-slate-600">
                Automation and analytics for growing fleets across markets.
              </p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="font-semibold text-slate-900">Black</p>
              <p className="mt-1 text-slate-600">
                Custom workflows, SLAs, and integrations for enterprise
                operations.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-6 pb-10 md:px-12 lg:px-16 xl:px-20 2xl:px-0">
          <h2 className="text-lg md:text-xl font-semibold text-slate-900">
            Frequently asked questions
          </h2>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <details className="rounded-xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-medium text-slate-900">
                Is onboarding included in the price?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Yes, all plans include guided onboarding, data import
                assistance, and training for dispatchers.
              </p>
            </details>
            <details className="rounded-xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-medium text-slate-900">
                Can I change plans later?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                You can upgrade or downgrade at any time. Changes are prorated
                automatically.
              </p>
            </details>
            <details className="rounded-xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-medium text-slate-900">
                Do you offer discounts for larger fleets?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Yes, our team can prepare custom pricing for multi-market or
                enterprise fleets on the Black plan.
              </p>
            </details>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center md:flex-row md:px-12 lg:px-16 xl:px-20 2xl:px-0 md:text-left">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                Not sure which plan fits your fleet?
              </h2>
              <p className="text-sm text-slate-600">
                Book a 20-minute call and we’ll map the right setup for your
                team.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#07315E] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-[#05223F] focus:outline-none focus:ring-2 focus:ring-[#07315E] focus:ring-offset-2"
            >
              Talk to sales
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
