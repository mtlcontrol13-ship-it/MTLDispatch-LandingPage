import React from "react";
import { cryptoCoins } from "../../helpers/data";
import SectionHeader from "../common/SectionHeader";
import Container from "../common/Container";

const TrustedBy = () => {
  return (
    <section className="bg-gray-50 py-12">
      <Container>
        <SectionHeader
          heading="Trusted By"
          para="We are trusted by millions, some of them are listed below"
        />

        <div className="mt-10 flex justify-center items-center gap-8 md:gap-12">
          {cryptoCoins.map((coin, index) => (
            <div
              key={index}
              className="flex justify-center"
            >
              <a href={coin.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={coin.icon}
                  alt={coin.name ?? "logo"}
                  className="h-16 md:h-20 w-auto object-contain cursor-pointer transition duration-300"
                  style={{ 
                    filter: 'grayscale(100%) brightness(0.4) opacity(0.7)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%) brightness(0.4) opacity(1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%) brightness(0.4) opacity(0.7)';
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustedBy;
