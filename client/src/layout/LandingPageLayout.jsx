import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

const LandingPageLayout = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTopButton />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
