import React from 'react'

const Hero = () => {
  return (
    <section
      className="relative min-h-[80vh] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07315E]/80 via-[#07315E]/60 to-[#C73547]/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-24 md:gap-8 md:px-12 lg:px-16 xl:px-20 2xl:px-0 min-h-[80vh] justify-center">
        <h1 className="text-3xl font-extrabold leading-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl">
          Smart Dispatch Software for Fleet Operators
        </h1>
        <p className="max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
          Centralise bookings, automate driver allocation, and monitor performance in real time.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#C73547] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#a52b39] focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Request Free Demo
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-lg border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Browse Products
          </a>
        </div>
      </div>

      {/* Subtle bottom gradient for text contrast near fold */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  )
}

export default Hero
