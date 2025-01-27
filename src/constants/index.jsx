import { Code } from "lucide-react";
import { Brush } from "lucide-react";
import { Search } from "lucide-react";
import { Megaphone } from "lucide-react";
import { AppWindow } from "lucide-react";
import { FileLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.png";
import user2 from "../assets/profile-pictures/user2.png";
import user3 from "../assets/profile-pictures/user3 2.jpg";
import user4 from "../assets/profile-pictures/user4.png";
import user5 from "../assets/profile-pictures//user7.jpg";
import user6 from "../assets/profile-pictures/user6.png";

export const navItems = [
  { label: "Features", href: "features" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "user1",
    company: "SN Studios",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "user2",
    company: "SN Studios",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "user3",
    company: "SN Studios",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "user4",
    company: "SN Studios",
    image: user4,
    text: "Working with the team at SN Studios was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "user5",
    company: "SN Studios",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "user6",
    company: "SN Studios",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Code />,
    text: "Website Development",
    description:
      "We create responsive, high-performing websites tailored to your business needs. From simple landing pages to complex e-commerce platforms, our websites deliver seamless user experiences and drive engagement.",
  },
  {
    icon: <Brush />,
    text: "Branding and Design",
    description:
      "Elevate your brand with professional logo design, visual identities, and custom graphics. Our designs ensure your business stands out with a cohesive and memorable brand presence.",
  },
  {
    icon: <Search />,
    text: "Search Engine Optimization",
    description:
      "Boost your online visibility with our SEO services. We optimize your website to rank higher in search engines, helping you attract more organic traffic and convert visitors into customers.",
  },
  {
    icon: <Megaphone />,
    text: "Digital Marketing and Ads",
    description:
      "Expand your reach with targeted Google Ads campaigns, social media marketing, and email strategies. We create data-driven campaigns to maximize ROI and grow your business.",
  },
  {
    icon: <AppWindow />,
    text: "Web Application Development",
    description:
      "Transform your ideas into powerful web applications. We specialize in building scalable, feature-rich apps tailored to your specific requirements, ensuring reliability and performance.",
  },
  {
    icon: <FileLock />,
    text: " Content Management and Maintenance",
    description:
      "Keep your website updated and secure with our content management and maintenance services. From regular updates to performance monitoring, we ensure your site stays in top shape.",
  },
];

export const checklistItems = [
  {
    title: "Effortless Code Integration",
    description:
      "Streamline your development process with seamless code merging solutions for projects of any scale.",
  },
  {
    title: "Comprehensive Code Reviews",
    description:
      "Ensure quality and consistency in your codebase with expert reviews tailored to your project needs.",
  },
  {
    title: "AI-Powered Development",
    description:
      "Leverage AI tools to accelerate your workflow, optimize performance, and reduce project turnaround time.",
  },
  {
    title: "Fast and Secure Deliverables",
    description:
      "Deliver your projects to clients or teams efficiently with robust sharing and collaboration tools.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "$5",
    features: [
      "Portfolio Display",
      "Basic Web Analytics",
      "Private Mode",
      "Email Support",
    ],
  },
  {
    title: "Pro",
    price: "$25",
    features: [
      "Advanced Portfolio Features",
      "Advanced Web Analytics",
      "Private Mode",
      "Priority Email Support",
      "Monthly Reports",
    ],
  },
  {
    title: "Business",
    price: "$100",
    features: [
      "Custom Web Applications",
      "Premium Web Analytics",
      "Private Mode",
      "24/7 Support",
      "Custom Integrations",
      "Dedicated Account Manager",
    ],
  },
];
export const resourcesLinks = [
  { href: "/getting-started", text: "Getting Started" },
  { href: "/web-development", text: "Web Development" },
  { href: "/frontend-design", text: "Frontend Design" },
  { href: "/open-source", text: "Open Source Contributions" },
  { href: "/react-resources", text: "React Resources" },
  { href: "/tailwind-guides", text: "Tailwind CSS Guides" },
];
export const platformLinks = [
  { href: "/pricing", text: "Pricing" },
  { href: "/web-development", text: "Web Development" },
  { href: "/frontend-design", text: "Frontend Design" },
  { href: "/open-source", text: "Open Source Contributions" },
  { href: "/portfolio", text: "Portfolio Showcase" },
  { href: "/case-studies", text: "Case Studies" },
];
export const communityLinks = [
  { href: "/blog", text: "Blog" },
  { href: "/forums", text: "Community Forums" },
  { href: "/events", text: "Upcoming Events" },
  { href: "/open-source", text: "Contribute to Open Source" },
  { href: "/mentorship", text: "Mentorship Programs" },
  { href: "/discord", text: "Join our Discord" },
  { href: "/faq", text: "FAQ" },
];
