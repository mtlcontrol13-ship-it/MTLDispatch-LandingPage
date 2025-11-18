import React from "react";
import { cryptoCoins } from "../../helpers/data";
import SectionHeader from "../common/SectionHeader";

const TrustedBy = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          heading="Trusted By"
          para="We are trusted by millions, some of them are listed below"
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {cryptoCoins.map((coin, index) => (
            <div
              key={index}
              className="h-16 w-32 rounded-lg bg-white shadow-sm flex items-center justify-center opacity-80 hover:opacity-100 transition"
            >
              <img
                src={coin.icon}
                alt={coin.name ?? "logo"}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
