import React from "react";
import PageHero from "../components/common/PageHero";
import PricingCards from "../components/LandingPageComponents/PricingCards";

const PricingPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <PageHero
        title="Pricing"
        highlights={["Core", "Plus", "Black"]}
      />

      <section className="relative z-10 mx-auto -mt-16 max-w-6xl px-6 py-14 md:px-12 lg:px-16 xl:px-20 2xl:px-0">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Flexible plans for every fleet size
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Start with the essentials and upgrade as you add vehicles, markets,
            and automation. Every plan includes premium support.
          </p>
        </div>

        <PricingCards />
      </section>
    </div>
  );
};

export default PricingPage;
