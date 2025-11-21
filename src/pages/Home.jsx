import About from "../components/LandingPageComponents/About";
import Features from "../components/LandingPageComponents/Features";
import Hero from "../components/LandingPageComponents/Hero";
import Index from "../components/LandingPageComponents/Index";
import MobileApp from "../components/LandingPageComponents/MobileApp";
import Pricing from "../components/LandingPageComponents/Pricing";
import HomePricingPreview from "../components/LandingPageComponents/HomePricingPreview";
import Products from "../components/LandingPageComponents/Products";
import Services from "../components/LandingPageComponents/Services";
import TrustedBy from "../components/LandingPageComponents/TrustedBy";
import Reviews from "../components/LandingPageComponents/Reviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Features />
      <Index />
      <TrustedBy />   
      <HomePricingPreview />
      {/* <Pricing /> */}
      <MobileApp />
      <Services />
      <Reviews />
    </div>
  );
};

export default Home;
