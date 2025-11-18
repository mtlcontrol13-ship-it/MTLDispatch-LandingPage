import About from "../components/LandingPageComponents/About";
import Features from "../components/LandingPageComponents/Features";
import Hero from "../components/LandingPageComponents/Hero";
import Index from "../components/LandingPageComponents/Index";
import MobileApp from "../components/LandingPageComponents/MobileApp";
import Pricing from "../components/LandingPageComponents/Pricing";
import Products from "../components/LandingPageComponents/Products";
import Services from "../components/LandingPageComponents/Services";
import TrustedBy from "../components/LandingPageComponents/TrustedBy";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Features />
      <Index />
      <TrustedBy />   
      <Pricing />
      <MobileApp />
      <Services />
    </div>
  );
};

export default Home;
