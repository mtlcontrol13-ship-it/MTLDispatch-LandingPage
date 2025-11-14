import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "./layout/LandingPageLayout";
import Home from "./pages/Home";

import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />

        {/* Services */}
        <Route path="services/:slug" element={<DetailPage category="services" />} />

        {/* Products */}
        <Route path="products/:slug" element={<DetailPage category="products" />} />
      </Route>
    </Routes>
  );
}

export default App;
