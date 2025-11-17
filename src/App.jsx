import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "./layout/LandingPageLayout";
import Home from "./pages/Home";

import DetailPage from "./pages/DetailPage";
import Contact from "./components/LandingPageComponents/Contact";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicePage />} />

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
