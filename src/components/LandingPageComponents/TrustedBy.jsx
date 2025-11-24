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

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 items-center">
          {cryptoCoins.map((coin, index) => (
            <div
              key={index}
              className="flex justify-center"
            >
              <img
                src={coin.icon}
                alt={coin.name ?? "logo"}
                className="h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
