import About from "../components/LandingPageComponents/About";
import Features from "../components/LandingPageComponents/Features";
import Hero from "../components/LandingPageComponents/Hero";
import Pricing from "../components/LandingPageComponents/Pricing";
import Products from "../components/LandingPageComponents/Products";
import Services from "../components/LandingPageComponents/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Features />
      <Pricing />
      <Services />
    </div>
  );
};

export default Home;
