import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "./layout/LandingPageLayout";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Contact from "./components/LandingPageComponents/Contact";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />

        {/* Register Routes */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/pricing" element={<PricingPage />} />

        {/* Services */}
        <Route
          path="services/:slug"
          element={<DetailPage category="services" />}
        />

        {/* Products */}
        <Route
          path="products/:slug"
          element={<DetailPage category="products" />}
        />
      </Route>
    </Routes>
  );
}

export default App;
