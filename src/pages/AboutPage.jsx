import React from "react";
import { ICONS } from "../assets/icons";
import PageHero from "../components/common/PageHero";
import Hero from "../components/about/Hero";
import CTA from "../components/about/CTA";
import Stats from "../components/LandingPageComponents/Stats";

const focusAreas = [
  {
    title: "Operational Excellence",
    description:
      "Live fleet visibility, driver accountability, and real-time KPIs so your team can anticipate every guest need.",
    icon: ICONS.BarChart3,
  },
  {
    title: "People & Partnership",
    description:
      "White-glove onboarding, 24/7 support, and a success manager who understands chauffeur businesses.",
    icon: ICONS.Headset,
  },
  {
    title: "Future-Ready Stack",
    description:
      "Open APIs, partner integrations, and automation rules that scale from boutique fleets to global networks.",
    icon: ICONS.PlugZap,
  },
];

const AboutPage = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <PageHero
        title="About"
        highlights={[
          "Fleet automation",
          "Driver experience",
          "Client hospitality",
        ]}
      />

      <section className="pt-2 pb-10 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0 mx-auto max-w-7xl">
        <div className="overflow-hidden">
          <Hero />
        </div>
      </section>
      <Stats />
      <section className="mx-auto max-w-5xl px-6 py-16 text-center md:px-12 lg:px-16 xl:px-20 2xl:px-0">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
          Ready to meet?
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Tell us about your fleet goals.
        </h2>
        <p className="mt-3 text-slate-600">
          We'll map the right onboarding plan, automations, and integrations to
          get your chauffeurs rolling.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#C73547] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c73547]/30 transition hover:-translate-y-0.5"
          >
            Talk to our team
            <ICONS.ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Explore services
          </a>
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default AboutPage;
