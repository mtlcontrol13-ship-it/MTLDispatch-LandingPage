import About from "../components/LandingPageComponents/About";
import Features from "../components/LandingPageComponents/Features";
import Hero from "../components/LandingPageComponents/Hero";
import HomePricingPreview from "../components/LandingPageComponents/HomePricingPreview";
import Products from "../components/LandingPageComponents/Products";
import Services from "../components/LandingPageComponents/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Features />
      <HomePricingPreview />
      <Services />
    </div>
  );
};

export default Home;
