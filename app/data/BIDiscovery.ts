import { Lightbulb, GitBranch, Sparkles, Truck } from "lucide-react";

export const steps = [
  {
    title: "Discovery & Insights",
    desc: "We understand your business, industry, competitors, and target audience to build a strong foundation.",
    icon: Lightbulb,
  },
  {
    title: "Brand Strategy & Direction",
    desc: "We define your brand positioning, messaging, and visual direction to ensure clarity and consistency.",
    icon: GitBranch,
  },
  {
    title: "Creative Concept Development",
    desc: "We translate strategy into multiple design concepts that align with your brand vision.",
    icon: Sparkles,
  },
  {
    title: "Execution & Delivery",
    desc: "We deliver high-quality, ready-to-use brand assets across digital and print platforms.",
    icon: Truck,
  },
];

export const projects = Array.from({ length: 10 }, (_, i) => ({
  title: `Project ${i + 1}`,
}));

export const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "1000+", label: "Projects delivered" },
  { value: "50+", label: "Satisfied clients" },
];