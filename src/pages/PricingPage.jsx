import React, { useState } from "react";
import PageHero from "../components/common/PageHero";
import PricingCards from "../components/LandingPageComponents/PricingCards";
import Container from "../components/common/Container";
import { ICONS } from "../assets/icons";

const PricingPage = () => {
  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Is onboarding included in the price?",
      a: "Yes, all plans include guided onboarding, data import assistance, and training for dispatchers.",
    },
    {
      q: "Can I change plans later?",
      a: "You can upgrade or downgrade at any time. Changes are prorated automatically.",
    },
    {
      q: "Do you offer discounts for larger fleets?",
      a: "Yes, our team can prepare custom pricing for multi-market or enterprise fleets on the Black plan.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, ACH transfers, and can set up invoicing for enterprise customers.",
    },
  ];

  return (
    <div className="bg-[#F4F7FB] text-slate-900">
      <PageHero title="Pricing" highlights={["Core", "Plus", "Black"]} />

      <main className="relative z-10">
        {/* Pricing Section */}
        <section className="-mt-16">
          <Container className="py-10">
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-3xl">
                Flexible plans for every fleet size
              </h1>
              <p className="mt-3 text-sm text-slate-600 md:text-base">
                Start with the essentials and upgrade as you add vehicles,
                markets, and automation. Every plan includes premium support.
              </p>

              {/* Billing Toggle */}
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1.5 text-sm shadow-sm">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  aria-pressed={billing === "monthly"}
                  className={`relative rounded-full px-4 py-2 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#07315E]/60 focus-visible:ring-offset-2 ${
                    billing === "monthly"
                      ? "bg-[#07315E] text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Monthly billing
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("yearly")}
                  aria-pressed={billing === "yearly"}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#07315E]/60 focus-visible:ring-offset-2 ${
                    billing === "yearly"
                      ? "bg-[#07315E] text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>Yearly billing</span>
                  <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-green-700">
                    Save 15%
                  </span>
                </button>
              </div>

              <p className="mt-3 text-xs text-slate-500 flex items-center justify-center gap-4 flex-wrap">
                <span className="flex items-center gap-1">
                  <ICONS.Check className="h-3 w-3 text-green-600" />
                  No setup fees
                </span>
                <span className="flex items-center gap-1">
                  <ICONS.Check className="h-3 w-3 text-green-600" />
                  Cancel anytime
                </span>
                <span className="flex items-center gap-1">
                  <ICONS.Check className="h-3 w-3 text-green-600" />
                  All prices in USD
                </span>
              </p>
            </div>

            <PricingCards billing={billing} />
          </Container>
        </section>

        {/* Feature Comparison */}
        <section className="bg-white/50 backdrop-blur-sm">
          <Container className="py-12">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Compare plans at a glance
              </h2>
              <p className="mt-2 text-slate-600">
                All plans include dispatcher console, booking forms, and mobile
                apps
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Core",
                  desc: "Best for boutique fleets launching digital dispatch for the first time.",
                  iconName: "PlugZap",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  title: "Plus",
                  desc: "Automation and analytics for growing fleets across markets.",
                  iconName: "TrendingUp",
                  color: "from-[#C73547] to-[#B32A3D]",
                },
                {
                  title: "Black",
                  desc: "Custom workflows, SLAs, and integrations for enterprise operations.",
                  iconName: "ShieldCheck",
                  color: "from-[#07315E] to-[#05223F]",
                },
              ].map((item, i) => {
                const ItemIcon = ICONS[item.iconName];
                return (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div
                      className={`absolute top-0 right-0 h-32 w-32 bg-linear-to-br ${item.color} opacity-5 blur-3xl transition-opacity duration-300 group-hover:opacity-10`}
                    ></div>
                    <div className="relative">
                      <div
                        className={`inline-flex rounded-lg bg-linear-to-br ${item.color} p-2.5 shadow-sm`}
                      >
                        <ItemIcon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section>
          <Container className="py-12">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  Frequently asked questions
                </h2>
                <p className="mt-2 text-slate-600">
                  Everything you need to know about our pricing
                </p>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left transition-colors duration-200 hover:bg-slate-50"
                    >
                      <span className="font-semibold text-slate-900">
                        {faq.q}
                      </span>
                      <ICONS.ChevronRight
                        className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300"
                        style={{
                          transform:
                            openFaq === i ? "rotate(90deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: openFaq === i ? "200px" : "0px",
                        opacity: openFaq === i ? 1 : 0,
                      }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-slate-200 bg-linear-to-br from-white to-slate-50">
          <Container className="py-12">
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-[#07315E] via-[#07315E] to-[#05223F] p-8 shadow-xl md:p-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

              <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    <ICONS.MessageCircle className="h-3.5 w-3.5" />
                    Expert Consultation
                  </div>
                  <h2 className="text-2xl font-bold text-white md:text-3xl">
                    Not sure which plan fits your fleet?
                  </h2>
                  <p className="mt-2 text-base text-white/90">
                    Book a 20-minute call and we'll map the right setup for your
                    team.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#07315E] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#07315E]"
                >
                  Talk to sales
                  <ICONS.ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
