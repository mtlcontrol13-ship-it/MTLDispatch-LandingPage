import React from "react";
import {
  Route,
  CalendarCheck,
  Smartphone,
  Car,
  Receipt,
  BarChart3,
  ArrowRight,
} from "../../helpers/icons";

const products = [
  {
    title: "Dispatch Software",
    description:
      "Automate driver allocation and manage bookings efficiently with our intelligent dispatch system.",
    icon: "Route",
  },
  {
    title: "Booking Software",
    description:
      "Centralise all bookings in one platform, making it easy to manage and track customer requests.",
    icon: "CalendarCheck",
  },
  {
    title: "Passenger App",
    description:
      "Offer a seamless booking experience for passengers with our user-friendly mobile app.",
    icon: "Smartphone",
  },
  {
    title: "Driver App",
    description:
      "Equip your drivers with a dedicated app for real-time updates, navigation, and job management.",
    icon: "Car",
  },
  {
    title: "Billing & Invoicing",
    description:
      "Simplify your financial processes with integrated billing and invoicing features.",
    icon: "Receipt",
  },
  {
    title: "Reporting & Analytics",
    description:
      "Gain insights into your fleet's performance with comprehensive reporting and analytics tools.",
    icon: "BarChart3",
  },
];

const iconMap = {
  Route: Route,
  CalendarCheck: CalendarCheck,
  Smartphone: Smartphone,
  Car: Car,
  Receipt: Receipt,
  BarChart3: BarChart3,
};

const productLinks = {
  "Dispatch Software": "/products/dispatch-software",
  "Booking Software": "/products/booking-software",
  "Passenger App": "/products/passenger-app",
  "Driver App": "/products/driver-app",
  "Billing & Invoicing": "/products/billing-and-invoicing",
  "Reporting & Analytics": "/products/reporting-and-analytics",
};

const Products = () => {
  return (
    <section
      id="products"
      className="pt-20 pb-10 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0 mx-auto max-w-7xl"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Products</h2>
        <p className="mt-2 text-gray-600">
          Streamline operations with automated dispatching, real-time tracking, integrated billing,
          and powerful reporting. Built for taxi, chauffeur, courier, and private hire fleets of any size.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((f, i) => {
          const Icon = iconMap[f.icon] || Route;
          const href = productLinks[f.title] || "/products";
          return (
            <div
              key={i}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#07315E]/20 bg-[#07315E]/5 text-[#07315E] shadow-sm transition-colors group-hover:border-[#07315E]/30 group-hover:bg-[#07315E]/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">{f.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                <a
                  href={href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#07315E] hover:underline underline-offset-4"
                  aria-label={`Learn more about ${f.title}`}
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
