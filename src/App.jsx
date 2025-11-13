import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "./layout/LandingPageLayout";
import Home from "./pages/Home";

import ImplementationOnboarding from "./pages/services/ImplementationOnboarding";
import Integrations from "./pages/services/Integrations";
import TrainingSupport from "./pages/services/TrainingSupport";
import PerformanceOptimization from "./pages/services/PerformanceOptimization";
import CloudHosting from "./pages/services/CloudHosting";
import ComplianceSecurity from "./pages/services/ComplianceSecurity";

import DispatchSoftware from "./pages/products/DispatchSoftware";
import BookingSoftware from "./pages/products/BookingSoftware";
import PassengerApp from "./pages/products/PassengerApp";
import DriverApp from "./pages/products/DriverApp";
import BillingAndInvoicing from "./pages/products/BillingAndInvoicing";
import ReportingAndAnalytics from "./pages/products/ReportingAndAnalytics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />

        {/* Services */}
        <Route path="services/implementation-onboarding" element={<ImplementationOnboarding />} />
        <Route path="services/integrations" element={<Integrations />} />
        <Route path="services/training-support" element={<TrainingSupport />} />
        <Route path="services/performance-optimization" element={<PerformanceOptimization />} />
        <Route path="services/cloud-hosting" element={<CloudHosting />} />
        <Route path="services/compliance-security" element={<ComplianceSecurity />} />

        {/* Products */}
        <Route path="products/dispatch-software" element={<DispatchSoftware />} />
        <Route path="products/booking-software" element={<BookingSoftware />} />
        <Route path="products/passenger-app" element={<PassengerApp />} />
        <Route path="products/driver-app" element={<DriverApp />} />
        <Route path="products/billing-and-invoicing" element={<BillingAndInvoicing />} />
        <Route path="products/reporting-and-analytics" element={<ReportingAndAnalytics />} />
      </Route>
    </Routes>
  );
}

export default App;
