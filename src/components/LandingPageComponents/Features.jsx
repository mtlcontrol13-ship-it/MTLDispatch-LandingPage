import React from "react";
import { ICONS } from "../../assets/icons";
import { IMAGES } from "../../assets/Images";

const features = [
  {
    title: "Complete Solutions",
    description:
      "All-in-one suite covering dispatch, apps, billing, and reporting to scale your fleet.",
    icon: ICONS.Layers,
  },
  {
    title: "QuickBooks Integration",
    description:
      "Sync invoices, payments, and accounts automatically with QuickBooks.",
    icon: ICONS.PlugZap,
  },
  {
    title: "Share Platform",
    description:
      "Connect partner fleets to share jobs and expand coverage instantly.",
    icon: ICONS.Share2,
  },
  {
    title: "Enterprise-grade Reliability",
    description:
      "Secure, reliable cloud hosting with high uptime and data protection.",
    icon: ICONS.ShieldCheck,
  },
];

const centerFeature = {
  title: "Real-time Fleet Management",
  description:
    "Track drivers, manage bookings, and optimize routes in real-time with live updates.",
  icon: ICONS.Navigation,
};

const metricsByTitle = {
  "Complete Solutions": "-30% admin time",
  "QuickBooks Integration": "-60% invoicing time",
  "Share Platform": "+20% job coverage",
  "Enterprise-grade Reliability": "99.9% uptime",
  "Real-time Fleet Management": "+40% efficiency",
};

const FeatureCard = ({ feature, stat }) => (
  <div className="group flex items-start gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#07315E]/20 bg-[#07315E]/5 text-[#07315E] shadow-sm transition-all duration-200 ease-out group-hover:scale-105 group-hover:shadow-md group-hover:border-[#07315E]/30 group-hover:bg-[#07315E]/10">
      <feature.icon className="h-6 w-6" />
    </div>
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[#07315E] group-hover:underline underline-offset-4 decoration-[#07315E]/60">
          {feature.title}
        </h3>
        {stat && (
          <span className="inline-flex items-center rounded-full bg-[#07315E]/10 px-2 py-0.5 text-xs font-medium text-[#07315E]">
            {stat}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        {feature.description}
      </p>
    </div>
  </div>
);

const StraightArrow = ({ className = "", style }) => (
  <div className={`pointer-events-none ${className}`} style={style}>
    <img
      src={IMAGES.uparrow}
      alt=""
      aria-hidden="true"
      draggable={false}
      className="select-none drop-shadow-md w-10 sm:w-12"
    />
  </div>
);

const CurvedArrow = ({ className = "", flipX = false, flipY = false, style }) => {
  const imageTransforms = [];
  if (flipX) imageTransforms.push("scaleX(-1)");
  if (flipY) imageTransforms.push("scaleY(-1)");

  return (
    <div className={`pointer-events-none ${className}`} style={style}>
      <img
        src={IMAGES.curvearrow}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="select-none drop-shadow-md w-10 sm:w-14 lg:w-18"
        style={imageTransforms.length ? { transform: imageTransforms.join(" ") } : undefined}
      />
    </div>
  );
};

const Features = () => {
  return (
    // <section
    //   id="features"
    //   className="pt-10 pb-20 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0 mx-auto max-w-7xl scroll-mt-24"
    // >
    //   <div className="mx-auto max-w-2xl text-center">
    //     <h2 className="text-2xl md:text-3xl font-bold">Key Features</h2>
    //     <p className="mt-2 text-gray-600">
    //       Purpose-built capabilities that streamline operations, reduce costs,
    //       and delight customers.
    //     </p>
    //   </div>

    //   <div>
    //     {/* Left column – top */}
    //     <div>
    //       <FeatureCard
    //         feature={features[0]}
    //         stat={metricsByTitle[features[0].title]}
    //       />
    //     </div>

    //     {/* Left column – bottom */}
    //     <div>
    //       <FeatureCard
    //         feature={features[1]}
    //         stat={metricsByTitle[features[1].title]}
    //       />
    //     </div>

    //     {/* Center – top card (same structure: just wrapped in a card shell) */}
    //     <div>
    //       <div className=" absolute p-6 rounded-2xl border border-[#07315E]/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex items-center">
    //         <FeatureCard
    //           feature={centerFeature}
    //           stat={metricsByTitle[centerFeature.title]}
    //         />
    //       </div>
    //     </div>

    //     {/* Center – car image */}
    //     <div>
    //       <div className="relative ">
    //         <img
    //           src={IMAGES.featuresmercedes}
    //           alt="Luxury Mercedes chauffeur vehicle"
    //         />
    //       </div>
    //     </div>

    //     {/* Right column – top */}
    //     <div>
    //       <FeatureCard
    //         feature={features[2]}
    //         stat={metricsByTitle[features[2].title]}
    //       />
    //     </div>

    //     {/* Right column – bottom */}
    //     <div>
    //       <FeatureCard
    //         feature={features[3]}
    //         stat={metricsByTitle[features[3].title]}
    //       />
    //     </div>
    //   </div>
    // </section>
    <div className="flex items-center md:pt-20 2xl:pt-0 h-screen justify-center">
      <div className="relative flex h-[320px] w-[320px] items-center justify-center sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]">
        <img
          src={IMAGES.featuresmercedes}
          alt="Luxury dispatch vehicle"
          className="relative z-10 h-full w-full object-contain"
        />

        {/* Connector Arrows */}
        <StraightArrow
          className="absolute hidden lg:block z-20"
          style={{ top: "-40px", left: "50%", transform: "translateX(-50%)" }}
        />
        <CurvedArrow
          className="absolute hidden lg:block z-20"
          flipX
          style={{ top: "16%", left: "-12%", transform: "rotate(-28deg)", transformOrigin: "95% 60%" }}
        />
        <CurvedArrow
          className="absolute hidden lg:block z-20"
          style={{ top: "16%", right: "-12%", transform: "rotate(28deg)", transformOrigin: "5% 60%" }}
        />
        <CurvedArrow
          className="absolute hidden lg:block z-20"
          flipX
          flipY
          style={{ bottom: "10%", left: "-12%", transform: "translate(-25%, 12%) rotate(28deg)", transformOrigin: "95% 55%" }}
        />
        <CurvedArrow
          className="absolute hidden lg:block z-20"
          flipY
          style={{ bottom: "10%", right: "-12%", transform: "translate(25%, 12%) rotate(-28deg)", transformOrigin: "5% 55%" }}
        />

        {/* Top Center - Real-time Fleet Management */}
        <div className="absolute -top-56 left-1/2 w-80 -translate-x-1/2 group">
          <div className="relative z-30 rounded-xl border border-gray-200 bg-white/90 p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#C73547]">
                <ICONS.Navigation className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">
                    Real-time Fleet Management
                  </h3>
                  <span className="inline-flex items-center rounded-md bg-[#FFC800]/20 px-2 py-1 text-xs font-semibold text-gray-900 whitespace-nowrap">
                    +40%
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-snug">
                  Track drivers, manage bookings, and optimize routes in
                  real-time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Left - Complete Solutions */}
        <div className="absolute -left-96 -top-20 w-80 group">
          <div className="relative z-30 rounded-xl border border-gray-200 bg-white/90 p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#FFC800]">
                <ICONS.Layers className="h-6 w-6 text-gray-900" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">
                    Complete Solutions
                  </h3>
                  <span className="inline-flex items-center rounded-md bg-[#C73547]/20 px-2 py-1 text-xs font-semibold text-gray-900 whitespace-nowrap">
                    -30%
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-snug">
                  All-in-one suite covering dispatch, apps, billing, and
                  reporting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Right - QuickBooks Integration */}
        <div className="absolute -right-96 -top-20 w-80 group">
          <div className="relative z-30 rounded-xl border border-gray-200 bg-white/90 p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#C73547]">
                <ICONS.PlugZap className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">
                    QuickBooks Integration
                  </h3>
                  <span className="inline-flex items-center rounded-md bg-[#FFC800]/20 px-2 py-1 text-xs font-semibold text-gray-900 whitespace-nowrap">
                    -60%
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-snug">
                  Sync invoices, payments, and accounts automatically.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left - Share Platform */}
        <div className="absolute -left-96 -bottom-20 w-80 group">
          <div className="relative z-30 rounded-xl border border-gray-200 bg-white/90 p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#FFC800]">
                <ICONS.Share2 className="h-6 w-6 text-gray-900" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">
                    Share Platform
                  </h3>
                  <span className="inline-flex items-center rounded-md bg-[#C73547]/20 px-2 py-1 text-xs font-semibold text-gray-900 whitespace-nowrap">
                    +20%
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-snug">
                  Connect partner fleets to share jobs and expand coverage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right - Enterprise-grade Reliability */}
        <div className="absolute -right-96 -bottom-20 w-80 group">
          <div className="relative z-30 rounded-xl border border-gray-200 bg-white/90 p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#C73547]">
                <ICONS.ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">
                    Enterprise-grade Reliability
                  </h3>
                  <span className="inline-flex items-center rounded-md bg-[#FFC800]/20 px-2 py-1 text-xs font-semibold text-gray-900 whitespace-nowrap">
                    99.9%
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-snug">
                  Secure, reliable cloud hosting with high uptime and
                  protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
