import { IMAGES } from "../assets/Images";

export const tabs = [
  {
    id: 0,
    number: "01",
    title: "Clean User Interface",
    heading: "MTLDispatch Has A Clean User Interface.",
    description: [
      "Our intuitive dashboard design makes managing your chauffeur business effortless. With clean layouts and easy navigation, you can handle bookings, drivers, and customers efficiently.",
      "Built specifically for chauffeur companies, every feature is designed to streamline your daily operations and reduce complexity.",
    ],
  },
  {
    id: 1,
    number: "02",
    title: "Cloud Data Save Options",
    heading: "Solid Has Cloud Data Save Options.",
    description: [
      "Your data is automatically backed up to secure cloud servers, ensuring you never lose important booking or customer information. Access your dispatch system from anywhere, anytime.",
      "Real-time synchronization keeps all your devices updated, so your team always has the latest information at their fingertips.",
    ],
  },
  {
    id: 2,
    number: "03",
    title: "Management And Collaboration",
    heading: "Powerful Management And Collaboration.",
    description: [
      "Coordinate your entire team with built-in collaboration tools. Assign drivers, track vehicles, and manage multiple users with different permission levels.",
      "Share booking information instantly with your drivers and keep everyone on the same page with real-time updates and notifications.",
    ],
  },
];

export const cryptoCoins = [
  { name: "Mega Transfers", icon: IMAGES.MegaTransfers },
  { name: "Your IT Experts", icon: IMAGES.YourITExperts },
  { name: "Heathrow Airport Chauffered", icon: IMAGES.HAC },
];

export const footerNav = [
  {
    title: "Solutions",
    links: [
      { label: "Dispatch Management", href: "/#features" },
      { label: "Driver Coordination", href: "/#services" },
      { label: "Customer Communication", href: "/#products" },
      { label: "Performance Analytics", href: "/#pricing" },
      { label: "Executive Dashboard", href: "/#about" },
      { label: "Integrations", href: "/#contact" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Chauffeur App", href: "/#products" },
      { label: "Client Widget", href: "/#features" },
      { label: "Vehicle Tracking", href: "/#services" },
      { label: "Zone Control", href: "/#features" },
      { label: "Billing Suite", href: "/#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Media Kit", href: "/media" },
    ],
  },
];

export const plans = [
  {
    name: "Core",
    shortDescription:
      "Launch quickly with core dispatch, booking, and mobile apps.",
    description:
      "Everything you need to go live fast: a streamlined dispatcher console, branded booking forms, and driver/passenger apps. Perfect for boutique fleets or teams standardizing processes before scaling. Includes baseline automation, simple invoicing, and responsive email support.",

    // NEW
    priceMonthly: "99",
    periodMonthly: "/mo",
    priceYearly: "84", // ~15% off per month
    periodYearly: "/mo • billed yearly",

    // legacy fallback (monthly)
    price: "99",
    period: "/mo",

    features: [
      "Web + phone bookings",
      "Driver & passenger apps",
      "Basic invoicing",
      "Email support",
    ],
    detailFeatures: [
      "Unlimited bookings across web and phone",
      "Driver & passenger mobile apps with push alerts",
      "Zones, fares, and vehicle classes configuration",
      "Basic invoicing with export to CSV",
      "Custom booking forms and client branding",
      "Analytics snapshot with daily summaries",
      "Email + in-app help center",
      "User roles for dispatchers and admins",
      "Audit logs for key booking changes",
      "Access to community training library",
    ],
    cta: "Start Free Trial",
    href: "/pricing/starter",
  },
  {
    name: "Plus",
    shortDescription:
      "Scale operations with automations, integrations, and analytics.",
    description:
      "Designed for scaling fleets that need automation and deeper insights. Unlock auto-assign rules, QuickBooks sync, premium support, and advanced analytics dashboards that surface driver utilization, margins, and SLA adherence. Includes everything from Core plus priority rollout guidance.",

    // NEW
    priceMonthly: "249",
    periodMonthly: "/mo",
    priceYearly: "212",
    periodYearly: "/mo • billed yearly",

    // legacy fallback (monthly)
    price: "249",
    period: "/mo",

    badge: "Most popular",
    features: [
      "Everything in Core",
      "Auto-assign rules",
      "QuickBooks sync",
      "Priority support",
    ],
    detailFeatures: [
      "Advanced auto-assign rules with proximity + performance scoring",
      "QuickBooks Online + Xero integrations",
      "Priority response SLAs (2h) and dedicated CSM",
      "Custom dashboard widgets + exportable reports",
      "API access for partner networks",
      "SMS + WhatsApp customer messaging",
      "Driver performance analytics + heatmaps",
      "Multi-market dispatch controls",
      "SFTP data drops + webhook notifications",
      "Live training for new dispatcher hires",
    ],
    highlighted: true,
    cta: "Request Free Demo",
    href: "/pricing/growth",
  },
  {
    name: "Black",
    shortDescription:
      "Tailored platform, SLAs, and dedicated success for large fleets.",
    description:
      "Enterprise-grade program with bespoke workflows, uptime SLAs, and 24/7 white-glove support. Includes custom development hours, dedicated success architect, and governance tooling to connect multiple brands or geographies under one reporting structure. Perfect for global or franchise fleets.",

    // Same label for both (enterprise talk-to-sales)
    priceMonthly: "Let’s talk",
    periodMonthly: "",
    priceYearly: "Let’s talk",
    periodYearly: "",

    // legacy fallback
    price: "Let’s talk",
    period: "",

    features: [
      "Custom workflows",
      "Unlimited zones & fleets",
      "Dedicated success manager",
      "24/7 support",
    ],
    detailFeatures: [
      "Dedicated success architect + quarterly roadmap planning",
      "24/7 hotline with 30-min critical response SLA",
      "Custom module development + private APIs",
      "Unlimited fleets, brands, and geographies",
      "SOC2-ready governance + audit trails",
      "Single sign-on (Okta, Azure AD) and SCIM user sync",
      "Lifecycle reporting with executive scorecards",
      "Tailored integrations (payments, telematics, CRM)",
      "Onsite training + rollout playbooks",
      "Joint marketing + co-sell opportunities",
    ],
    cta: "Contact Sales",
    href: "/pricing/enterprise",
  },
];
