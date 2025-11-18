import React from "react";

const PageHero = ({
  eyebrow,
  title,
  description,
  highlights = [],
}) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#052447] to-[#07315E] pb-28 pt-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
      </div>
      <div className="relative mx-auto mb-10 flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-3xl text-base text-white/80">{description}</p>
        )}
        {highlights.length > 0 && (
          <div className="mb-2 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
            {highlights.map((item, idx) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {idx < highlights.length - 1 && (
                  <span className="opacity-50">&bull;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 rounded-t-[40%] bg-slate-50" />
    </section>
  );
};

export default PageHero;
