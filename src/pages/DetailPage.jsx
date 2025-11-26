import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ICONS } from "../assets/icons";
import { IMAGES } from "../assets/Images";
import { getDetailContent } from "../helpers/detailContent";
import Container from "../components/common/Container";

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
      <Container className="py-20">
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
      </Container>
    );
  }

  const { title, tagline, summary, primaryCta, secondaryCta, stats, highlights, deepDive, checklistTitle, checklist } =
    details;

  return (
    <>
      {/* Hero Section with Visual Mockup */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#07315E] via-[#0A4A85] to-[#07315E] py-20">
        {/* Decorative background elements - optimized with will-change */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C73547]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/70">
                <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
                <ICONS.ChevronRight className="h-4 w-4" />
                <Link to={anchorHref} className="hover:text-white transition-colors duration-200">
                  {category === "products" ? "Products" : "Services"}
                </Link>
                <ICONS.ChevronRight className="h-4 w-4" />
                <span className="text-white font-medium">{title}</span>
              </nav>

              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white">
                <ICONS.Sparkles className="h-4 w-4" />
                {badgeLabel}
              </span>

              {/* Title & Tagline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {title}
                </h1>
                {tagline && (
                  <p className="text-xl text-blue-100 font-medium">
                    {tagline}
                  </p>
                )}
                <p className="text-base md:text-lg leading-relaxed text-white/90">
                  {summary}
                </p>
              </div>

              {/* CTAs - optimized with will-change on hover only */}
              <div className="flex flex-wrap gap-4 pt-4">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#07315E] shadow-xl transition-all duration-300 hover:shadow-2xl active:scale-95"
                    style={{ willChange: 'auto' }}
                    onMouseEnter={(e) => e.currentTarget.style.willChange = 'transform'}
                    onMouseLeave={(e) => e.currentTarget.style.willChange = 'auto'}
                  >
                    {primaryCta.label}
                    <ICONS.ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/20 active:scale-95"
                  >
                    {secondaryCta.label}
                  </a>
                )}
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 pt-4 text-sm text-white/80">
                <ICONS.Shield className="h-5 w-5 text-green-400" />
                <span>Trusted by 975+ fleets worldwide</span>
              </div>
            </div>

            {/* Right: Visual Mockup - optimized transform */}
            <div className="relative lg:block hidden">
              {/* Floating card effect */}
              <div className="relative">
                {/* Main dashboard mockup - optimized with GPU acceleration */}
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm bg-white/5 transition-transform duration-300 ease-out"
                  style={{ willChange: 'auto' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.willChange = 'transform';
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    setTimeout(() => e.currentTarget.style.willChange = 'auto', 300);
                  }}
                >
                  {/* Browser chrome */}
                  <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="inline-block bg-slate-700 rounded px-3 py-1 text-xs text-white/70">
                        mtldispatch.com
                      </div>
                    </div>
                  </div>
                  
                  {/* Dashboard image - optimized loading */}
                  <div className="bg-slate-50">
                    <img
                      src={IMAGES.Dashboard}
                      alt={`${title} Dashboard`}
                      className="w-full h-auto"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Decorative floating elements - static, no animation */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C73547] rounded-2xl opacity-20 blur-2xl pointer-events-none"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-2xl opacity-20 blur-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="py-16">

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
            <ICONS.ArrowRight className="h-4 w-4 rotate-180" />
            Back to overview
          </a>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#07315E]"
          >
            Return home
          </Link>
        </div>
      </Container>
    </>
  );
};

export default DetailPage;
