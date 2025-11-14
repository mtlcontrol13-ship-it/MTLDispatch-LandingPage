import About from "../components/LandingPageComponents/About";
import Contact from "../components/LandingPageComponents/Contact";
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
      <Contact />
    </div>
  );
};

export default Home;
