import { IMAGES } from "../assets/Images";

 export  const tabs = [
    {
      id: 0,
      number: "01",
      title: "Clean User Interface",
      heading: "MTLDispatch Has A Clean User Interface.",
      description: [
        "Our intuitive dashboard design makes managing your chauffeur business effortless. With clean layouts and easy navigation, you can handle bookings, drivers, and customers efficiently.",
        "Built specifically for chauffeur companies, every feature is designed to streamline your daily operations and reduce complexity."
      ]
    },
    {
      id: 1,
      number: "02",
      title: "Cloud Data Save Options",
      heading: "Solid Has Cloud Data Save Options.",
      description: [
        "Your data is automatically backed up to secure cloud servers, ensuring you never lose important booking or customer information. Access your dispatch system from anywhere, anytime.",
        "Real-time synchronization keeps all your devices updated, so your team always has the latest information at their fingertips."
      ]
    },
    {
      id: 2,
      number: "03",
      title: "Management And Collaboration",
      heading: "Powerful Management And Collaboration.",
      description: [
        "Coordinate your entire team with built-in collaboration tools. Assign drivers, track vehicles, and manage multiple users with different permission levels.",
        "Share booking information instantly with your drivers and keep everyone on the same page with real-time updates and notifications."
      ]
    }
  ];


export const cryptoCoins = [
  { name: "Mega Transfers", icon: IMAGES.MegaTransfers  },
  { name: "Your IT Experts", icon: IMAGES.YourITExperts },
  { name: "Heathrow Airport Chauffered", icon: IMAGES.HAC },
]


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

