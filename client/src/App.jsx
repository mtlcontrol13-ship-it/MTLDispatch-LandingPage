import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "./layout/LandingPageLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DetailPage from "./pages/DetailPage";
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />

        {/* Register Routes */}
        <Route path="/contact" element={<ContactPage />} />
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
