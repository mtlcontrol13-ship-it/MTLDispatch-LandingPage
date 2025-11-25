import React, { useState } from "react";
import PageHero from "../components/common/PageHero";
import PricingCards from "../components/LandingPageComponents/PricingCards";
import Container from "../components/common/Container";

const PricingPage = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="bg-[#F4F7FB] text-slate-900">
      <PageHero title="Pricing" highlights={["Core", "Plus", "Black"]} />

      <main className="relative z-10">
        {/* Pricing + toggle */}
        <section className="-mt-16">
          <Container className="py-10">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Flexible plans for every fleet size
              </h2>
              <p className="mt-3 text-sm text-slate-600 md:text-base">
                Start with the essentials and upgrade as you add vehicles,
                markets, and automation. Every plan includes premium support.
              </p>

              {/* Billing toggle */}
              <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50/80 px-2 py-1 text-xs shadow-sm md:text-sm">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  aria-pressed={billing === "monthly"}
                  className={`rounded-full px-3 py-1 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#07315E]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F7FB] ${
                    billing === "monthly"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  Monthly billing
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("yearly")}
                  aria-pressed={billing === "yearly"}
                  className={`flex items-center gap-2 rounded-full px-3 py-1 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#07315E]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F7FB] ${
                    billing === "yearly"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <span>Yearly billing</span>
                  <span className="rounded-full bg-[#C73547]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#C73547]">
                    Save 15%
                  </span>
                </button>
              </div>

              <p className="mt-2 text-[11px] text-slate-500">
                No setup fees. Cancel anytime. All prices in USD.
              </p>
            </div>

            <PricingCards layout="horizontal" billing={billing} />
          </Container>
        </section>

        {/* Comparison strip */}
        <section>
          <Container className="mt-8 pb-8">
            <h2 className="text-lg font-semibold text-slate-900">
              Compare plans at a glance
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              All plans include dispatcher console, booking forms, and mobile
              apps.
            </p>

            <div className="mt-4 grid gap-3 text-xs text-slate-700 md:grid-cols-3 md:text-sm">
              <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                <p className="font-semibold text-slate-900">Core</p>
                <p className="mt-1 text-slate-600">
                  Best for boutique fleets launching digital dispatch for the
                  first time.
                </p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                <p className="font-semibold text-slate-900">Plus</p>
                <p className="mt-1 text-slate-600">
                  Automation and analytics for growing fleets across markets.
                </p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                <p className="font-semibold text-slate-900">Black</p>
                <p className="mt-1 text-slate-600">
                  Custom workflows, SLAs, and integrations for enterprise
                  operations.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section>
          <Container className="pb-10">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              Frequently asked questions
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <details className="group rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-slate-900">
                  <span>Is onboarding included in the price?</span>
                  <span className="text-xs text-slate-400 transition-transform duration-200 group-open:rotate-90">
                    &#9656;
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Yes, all plans include guided onboarding, data import
                  assistance, and training for dispatchers.
                </p>
              </details>

              <details className="group rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-slate-900">
                  <span>Can I change plans later?</span>
                  <span className="text-xs text-slate-400 transition-transform duration-200 group-open:rotate-90">
                    &#9656;
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  You can upgrade or downgrade at any time. Changes are prorated
                  automatically.
                </p>
              </details>

              <details className="group rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-slate-900">
                  <span>Do you offer discounts for larger fleets?</span>
                  <span className="text-xs text-slate-400 transition-transform duration-200 group-open:rotate-90">
                    &#9656;
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Yes, our team can prepare custom pricing for multi-market or
                  enterprise fleets on the Black plan.
                </p>
              </details>
            </div>
          </Container>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-slate-200 bg-white">
          <Container className="py-8">
            <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
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
          </Container>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
