import React from "react";
import { IMAGES } from "../../assets/Images";
import { footerNav } from "../../helpers/data";

const Footer = () => {
  return (
    <footer className="tracking-wide bg-black px-6 sm:px-10 pt-16 pb-8 text-slate-300">
      <div className="mx-auto 2xl:max-w-7xl xl:max-w-280">
        <div className="grid gap-12 min-[1200px]:grid-cols-3 xl:gap-16">
          <div className="max-w-md">
            <a href="/">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-md bg-linear-to-br from-[#07315E] to-[#D43E51]" />
                <span className="text-xl font-semibold text-white">
                  MTLDispatch
                </span>
              </div>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              SaaS platform purpose-built for luxury chauffeur fleets. Track
              bookings, manage drivers, and deliver white-glove experiences from
              a single dispatch command center.
            </p>
            <ul className="mt-8 flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:opacity-80"
                >
                  <img
                    src={IMAGES.facebook}
                    alt="Facebook"
                    className="h-6 w-6 filter brightness-0 invert"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:opacity-80"
                >
                  <img
                    src={IMAGES.x}
                    alt="X"
                    className="h-6 w-6 filter brightness-0 invert"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:opacity-80"
                >
                  <img
                    src={IMAGES.instagram}
                    alt="Instagram"
                    className="h-6 w-6 filter brightness-0 invert"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="min-[1200px]:col-span-2 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerNav.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  {section.title}
                </h4>
                <ul className="mt-6 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="mt-12 mb-8 border-white/10" />

        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} MTLDispatch. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4 md:ml-auto">
            <li>
              <a
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/security"
                className="transition-colors hover:text-white"
              >
                Security
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
