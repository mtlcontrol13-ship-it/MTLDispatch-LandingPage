import React from "react";
import { IMAGES } from "../../assets/Images";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: IMAGES.facebook },
  { label: "X", href: "https://x.com", icon: IMAGES.x },
  { label: "Instagram", href: "https://instagram.com", icon: IMAGES.instagram },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold text-white">MTLDispatch</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Comprehensive dispatch management tailored for luxury chauffeur
              businesses. Streamline bookings, monitor drivers, and stay on top
              of performance from a single dashboard.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <ul className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt={`${social.label} icon`}
                      className="h-5 w-5 object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
          &copy; {new Date().getFullYear()} MTLDispatch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
