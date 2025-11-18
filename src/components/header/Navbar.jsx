import React, { useEffect, useState } from "react";
import { navbarItems } from "../../helpers/navBarItems";
import { ICONS } from "../../assets/icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll and allow Escape to close when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      const onKey = (e) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-black/20 backdrop-blur-md border-b border-white/10"
          : "bg-[#07315E] shadow-lg"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-12 lg:px-16 xl:px-20 2xl:px-0 text-white">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-[#07315E] to-[#C73547]" />
          <span className="text-xl font-bold tracking-tight">MTLDispatch</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex ml-auto justify-end">
          {navbarItems.map((item, index) => (
            <li key={index} className="group relative">
              {item.name === "Login" ? (
                <a
                  href={item.link}
                  className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white/95 shadow-sm backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
                >
                  {item.name}
                </a>
              ) : item.subItems && item.subItems.length > 0 ? (
                <a
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 transition-colors hover:text-white"
                >
                  <span>{item.name}</span>
                  <ICONS.ChevronDown className="h-4 w-4 text-white/70 transition-transform duration-200 ease-out group-hover:rotate-180" />
                </a>
              ) : (
                <a
                  href={item.link}
                  className="text-sm font-medium text-white/90 transition-colors hover:text-white"
                >
                  {item.name}
                </a>
              )}
              {item.subItems && item.subItems.length > 0 && (
                <div className="invisible absolute left-0 top-full z-40 w-64 pt-3 opacity-0 translate-y-2 transition-all duration-200 ease-out group-hover:delay-150 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="rounded-lg border border-white/10 bg-[#07315E] p-2 shadow-xl">
                    {item.subItems.map((sub, i) => (
                      <a
                        key={i}
                        href={sub.link}
                        className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <ICONS.X className="h-6 w-6" /> : <ICONS.Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <button
            aria-label="Close menu backdrop"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Right Drawer */}
          <div className="absolute inset-y-0 right-0 flex h-full w-[86%] max-w-sm animate-[mobileSlideRight_0.25s_ease-out]">
            <div className="flex h-full w-full flex-col overflow-hidden border-l border-white/10 bg-[#07315E] text-white shadow-2xl">
              {/* Top bar with title and close */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-base font-semibold">Menu</span>
                <button
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/10 hover:bg-white/20"
                  onClick={() => setMenuOpen(false)}
                >
                  <ICONS.X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable items */}
              <div className="flex-1 divide-y divide-white/10 overflow-auto">
                {navbarItems.map((item, index) => (
                  <div key={index} className="px-2">
                    {item.subItems ? (
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 text-base font-medium hover:bg-white/10">
                          <span>{item.name}</span>
                          <ICONS.ChevronDown className="h-5 w-5 text-white/80 transition-transform duration-200 ease-in-out group-open:rotate-180" />
                        </summary>
                        <div className="pb-2 pl-2">
                          {item.subItems.map((sub, i) => (
                            <a
                              key={i}
                              href={sub.link}
                              className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                              onClick={() => setMenuOpen(false)}
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <a
                        href={item.link}
                        className={`${
                          item.name === "Login"
                            ? "my-2 block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-center text-base font-semibold text-white/95 hover:bg-white/20"
                            : "block rounded-lg px-3 py-3 text-base hover:bg-white/10"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
