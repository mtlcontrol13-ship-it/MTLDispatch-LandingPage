import About from "../components/LandingPageComponents/About";
import Features from "../components/LandingPageComponents/Features";
import Hero from "../components/LandingPageComponents/Hero";
import MobileApp from "../components/LandingPageComponents/MobileApp";
// import Pricing from "../components/LandingPageComponents/Pricing";
import HomePricingPreview from "../components/LandingPageComponents/HomePricingPreview";
import Products from "../components/LandingPageComponents/Products";
import Services from "../components/LandingPageComponents/Services";
import TrustedBy from "../components/LandingPageComponents/TrustedBy";
import Reviews from "../components/LandingPageComponents/Reviews";
import HowItWorks from "../components/LandingPageComponents/HowItWorks";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Features />
      <HowItWorks />
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
