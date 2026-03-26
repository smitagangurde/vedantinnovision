import { Lightbulb, GitBranch, Sparkles, Truck } from "lucide-react";

export const steps = [
  {
    title: "Discovery & Research",
    desc: "We dive deep into your industry, competitor landscape, and target audience behaviors.",
    icon: Lightbulb,
  },
  {
    title: "Strategy & DNA",
    desc: "Defining the core messaging, brand voice, and visual “vibe” of your organization.",
    icon: GitBranch,
  },
  {
    title: "Conceptualization",
    desc: "Translating strategy into sketches and diverse visual directions for your review.",
    icon: Sparkles,
  },
  {
    title: "Finalization & Delivery",
    desc: "Providing launch-ready, high-res assets in all required print and digital formats.",
    icon: Truck,
  },
];

export const projects = Array.from({ length: 10 }, (_, i) => ({
  title: `Project ${i + 1}`,
}));

export const stats = [
  { value: "17+", label: "Years of experience" },
  { value: "10,000+", label: "Projects delivered" },
  { value: "5,000+", label: "Satisfied clients" },
];