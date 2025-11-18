import { Link } from "react-router-dom";
import About from "../components/LandingPageComponents/About";
import Features from "../components/LandingPageComponents/Features";
import Hero from "../components/LandingPageComponents/Hero";
import Products from "../components/LandingPageComponents/Products";
import Services from "../components/LandingPageComponents/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Features />
      <section className="mx-auto max-w-7xl px-6 py-16 text-center md:px-12 lg:px-16 xl:px-20 2xl:px-0">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Flexible Pricing
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Choose the plan that matches your fleet today and upgrade as you
            scale your operations.
          </p>
          <Link
            to="/pricing"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#C73547] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c73547]/30 transition hover:-translate-y-0.5"
          >
            View all pricing
          </Link>
        </div>
      </section>
      <Services />
    </div>
  );
};

export default Home;
