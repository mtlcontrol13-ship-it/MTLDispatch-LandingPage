import React from "react";
import { IMAGES } from "../../assets/Images";

const CTA = () => {
  return (
    <section
      className="relative h-full p-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.CTA})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-2xl font-bold mb-4">
          Empowering Chauffeur Companies with Seamless Dispatch & Booking
        </h2>

        <p className="text-md md:text-lg mb-6 leading-relaxed">
          Our platform gives your company the tools to manage bookings, drivers,
          invoices, and real-time tracking — all in one intuitive dashboard.
          Streamline your operations, enhance your customer experience, and grow
          your fleet with confidence.
        </p>

        <div className="space-x-4">
          <a
            href="/about"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition"
          >
            Learn More
          </a>
          <a
            href="/signup"
            className="px-6 py-3 border border-white font-semibold rounded-md hover:bg-white/20 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
