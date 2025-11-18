import React from "react";
import { IMAGES } from "../../assets/Images";
import { ICONS } from "../../assets/icons";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-16 md:py-24 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0">
        <div className="grid grid-cols-12 gap-y-12 gap-x-8 items-center">
          <div className="col-span-12 md:col-span-6 relative">
            <div className="relative z-10 max-w-lg mx-auto flex justify-center">
              <img
                src={IMAGES.aboutmercedes}
                alt="Luxury chauffeur service vehicle - Professional fleet management"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Decorative Bubble */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-1 sm:-bottom-4 md:-bottom-16 xl:-bottom-7 2xl:-bottom-7 w-48 sm:w-60 md:w-72 xl:w-100 2xl:w-108 h-24 sm:h-28 md:h-64 z-0 bg-[#FFC800] rounded-full transform scale-y-[0.2] scale-x-110" />
          </div>

          {/* Text Content Section */}
          <div className="col-span-12 md:col-span-6 space-y-6 mt-10 md:mt-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              About <span style={{ color: "#C73547" }}>MTLDispatch</span>
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="font-semibold">MTLDispatch</strong> is a
                comprehensive SaaS platform designed specifically for chauffeur
                and luxury transportation companies. Our powerful admin
                dashboard streamlines your entire operation, from fleet
                management to revenue tracking.
              </p>

              <p>
                We understand the unique challenges of running a premium
                transportation service. That's why we've built an all-in-one
                solution that helps you manage your drivers, monitor your fleet,
                track customer bookings, and analyze your business
                performance—all from a single, intuitive dashboard.
              </p>

              <p>
                Whether you're operating a small boutique service or managing a
                large fleet, MTLDispatch scales with your business. Our platform
                provides real-time insights into your revenue streams, driver
                performance, vehicle utilization, and customer satisfaction
                metrics.
              </p>

              <div className="pt-4 ">
                <button className=" group relative inline-flex items-center rounded-full border-2 border-[#C73547] px-6 py-2 text-sm font-semibold text-black  bg-white shadow-md cursor-pointer transition-all duration-200 focus:outline-none">
                  <span className="pr-6">Learn More</span>

                  <span className="absolute right-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-[#C73547] bg-white transition-all duration-200 group-hover:bg-[#C73547] group-hover:border-white group-hover:translate-x-0.5 ">
                    <ICONS.ArrowRight className="h-3.5 w-3.5 text-[#C73547] group-hover:rotate-360 transition-transform transition-colors duration-400  group-hover:text-white" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
