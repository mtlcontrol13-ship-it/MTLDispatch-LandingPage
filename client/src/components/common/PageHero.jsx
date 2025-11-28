import React from "react";

const PageHero = ({ title, highlights = [] }) => {
  return (
    <section className="overflow-hidden bg-linear-to-b from-[#052447] to-[#07315E] text-white">
      <div className="mx-auto grid max-w-6xl justify-items-center gap-4 px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {highlights.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            {highlights.map((item, idx) => (
              <React.Fragment key={`${item}-${idx}`}>
                <span className="tracking-normal">{item}</span>
                {idx < highlights.length - 1 && (
                  <span className="opacity-50">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      <div className="h-24 rounded-t-[40%] bg-slate-50" />
    </section>
  );
};

export default PageHero;
