import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ICONS } from "../assets/icons";
import { getDetailContent } from "../helpers/detailContent";

const DetailPage = ({ category }) => {
  const { slug } = useParams();
  const details = getDetailContent(category, slug);
  const anchorHref = category === "products" ? "/#products" : "/#services";

  const badgeLabel = useMemo(() => {
    if (details?.categoryLabel) return details.categoryLabel;
    return category === "products" ? "Product" : "Service";
  }, [category, details]);

  if (!details) {
    return (
      <section className="w-full py-20 pr-6 md:pr-10 lg:pr-14 xl:pr-16 pl-6 md:pl-12 lg:pl-20 xl:pl-28 2xl:pl-36">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0A4A85]">Not Found</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">We could not find that page.</h1>
          <p className="mt-4 text-gray-600">
            The detail you are looking for may have moved. Head back to the overview and choose another option.
          </p>
          <Link
            to={anchorHref}
            className="mt-8 inline-flex items-center rounded-lg bg-[#07315E] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#052447]"
          >
            Back to overview
          </Link>
        </div>
      </section>
    );
  }

  const { title, tagline, summary, primaryCta, secondaryCta, stats, highlights, deepDive, checklistTitle, checklist } =
    details;

  return (
    <section className="w-full py-20 pr-6 md:pr-10 lg:pr-14 xl:pr-16 pl-6 md:pl-12 lg:pl-20 xl:pl-28 2xl:pl-36">
      <div className="max-w-5xl space-y-4">
        <span className="inline-flex items-center rounded-full border border-[#0A4A85]/20 bg-[#0A4A85]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0A4A85]">
          {badgeLabel}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{title}</h1>
        {tagline && <p className="text-lg font-medium text-[#0A4A85]">{tagline}</p>}
        <p className="max-w-3xl text-base leading-relaxed text-gray-600">{summary}</p>
        <div className="flex flex-wrap gap-3">
          {primaryCta && (
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-[#07315E] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#052447]"
            >
              {primaryCta.label}
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-[#07315E]/30 hover:text-[#07315E]"
            >
              {secondaryCta.label}
            </a>
          )}
        </div>

        {stats?.length > 0 && (
          <div className="mt-10 grid gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-3">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center sm:text-left">
                <p className="text-3xl font-bold text-gray-900">{value}</p>
                <p className="mt-1 text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        )}

        {highlights?.length > 0 && (
          <div id="highlights" className="mt-14 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0A4A85]">Key takeaways</p>
              <h2 className="mt-2 text-2xl font-semibold text-gray-900">What customers love</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map(({ title: itemTitle, description }) => (
                <div key={itemTitle} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">{itemTitle}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {deepDive && (
          <div id="deep-dive" className="mt-14 rounded-3xl bg-[#F5F8FC] p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0A4A85]">Deep dive</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">{deepDive.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-700">{deepDive.description}</p>
            {deepDive.bullets?.length > 0 && (
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                {deepDive.bullets.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <ICONS.CircleCheck className="mt-0.5 h-5 w-5 text-[#0A4A85]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {checklist?.length > 0 && (
          <div className="mt-14">
            {checklistTitle && (
              <h3 className="text-xl font-semibold text-gray-900">{checklistTitle}</h3>
            )}
            <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ICONS.CircleCheck className="mt-0.5 h-5 w-5 text-[#0A4A85]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-16 flex flex-wrap items-center gap-4">
          <a
            href={anchorHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#07315E] hover:underline"
          >
            Back to overview
          </a>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#07315E]"
          >
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
