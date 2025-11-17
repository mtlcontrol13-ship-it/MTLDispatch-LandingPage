import React from "react";
import { ICONS } from "../assets/icons";

const services = [
  {
    title: "Implementation & Onboarding",
    description:
      "White-glove setup, data import, and workflow tailoring so you go live fast.",
    Icon: ICONS.Wrench,
    href: "/services/implementation-onboarding",
  },
  {
    title: "Integrations",
    description:
      "Connect payments, accounting, GPS, SMS, and partner systems via secure APIs.",
    Icon: ICONS.PlugZap,
    href: "/services/integrations",
  },
  {
    title: "Training & Support",
    description:
      "Hands-on team training plus multi-channel support when you need it most.",
    Icon: ICONS.Headset,
    href: "/services/training-support",
  },
  {
    title: "Performance Optimization",
    description:
      "Regular reviews of acceptance, ETAs, and utilization with actionable guidance.",
    Icon: ICONS.Rocket,
    href: "/services/performance-optimization",
  },
  {
    title: "Cloud Hosting",
    description:
      "Secure, scalable hosting with monitoring, backups, and proactive maintenance.",
    Icon: ICONS.CloudCog,
    href: "/services/cloud-hosting",
  },
  {
    title: "Compliance & Security",
    description:
      "Role-based access, audit trails, and best practices to protect your data.",
    Icon: ICONS.ShieldCheck,
    href: "/services/compliance-security",
  },
];

const contactCards = [
  {
    title: "Talk to Sales",
    description: "Book a discovery call with our solution experts.",
    cta: "Schedule call",
    href: "/contact",
  },
  {
    title: "Support Center",
    description: "Submit tickets, track updates, or chat with support.",
    cta: "Visit portal",
    href: "/contact",
  },
  {
    title: "Success Resources",
    description: "Download playbooks, onboarding kits, and best practices.",
    cta: "Browse docs",
    href: "/contact",
  },
];

const ServicePage = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#052447] to-[#07315E] pb-28 pt-16 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 mb-10 px-6 text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Services
          </h1>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
            <span>Implementation</span>
            <span className="opacity-50">&bull;</span>
            <span>Integrations</span>
            <span className="opacity-50">&bull;</span>
            <span>Success Programs</span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 rounded-t-[40%] bg-slate-50" />
      </section>

      {/* Service Grid */}
      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">
            Provide us with reliable services
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            A complete suite of professional services to launch, integrate, and
            optimize your chauffeur operations with confidence.
          </p>
        </div>
        <div className="rounded-3xl border border-white/70 bg-white p-8 shadow-lg">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ title, description, Icon, href }) => (
              <a
                key={title}
                href={href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#07315E]/30 hover:shadow-lg"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#07315E]/10 text-[#07315E] shadow-sm transition group-hover:border group-hover:border-[#07315E]/40 group-hover:bg-[#07315E]/15">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>
                <span className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-[#07315E]/20 bg-white px-4 py-2 text-sm font-semibold text-[#07315E] opacity-0 transition group-hover:opacity-100">
                  Learn more
                  <ICONS.ArrowRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA cards */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            Need help choosing the right plan?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Connect with our teams for demos, support, or best-practice guides.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <div className="grid gap-6 lg:grid-cols-3">
            {contactCards.map(({ title, description, cta, href }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>
                <a
                  href={href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#07315E]"
                >
                  {cta}
                  <ICONS.ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-[#052447] px-6 py-10 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
            Need a custom service?
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Let's tailor a solution for your fleet
          </h2>
          <p className="mt-4 text-white/80">
            Share your requirements and we'll design the onboarding, automations,
            and integrations to match your workflow.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#052447]"
          >
            Talk to our team
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
