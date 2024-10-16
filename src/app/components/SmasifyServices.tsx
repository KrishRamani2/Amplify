"use client";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image1 from "../images/musicD.jpeg"
import Image2 from "../images/rc.jpeg"
import Image3 from "../images/analytics.webp"
import Image4 from "../images/market.jpeg"
import Image5 from "../images/artistic.jpeg"
interface Service {
  title: string;
  description: string;
  icon: string;
  image: typeof Image1; // Assuming all images are of the same type
}
const services: Service[] = [
  {
    title: "Music Distribution",
    description: "Get your music on all major streaming platforms worldwide.",
    icon: "🎵",
    image: Image1,
  },
  {
    title: "Royalty Collection",
    description: "We collect and distribute your royalties from various sources.",
    icon: "💰",
    image: Image2,
  },
  {
    title: "Analytics Dashboard",
    description: "Track your music's performance with our detailed analytics.",
    icon: "📊",
    image: Image3,
  },
  {
    title: "Marketing Tools",
    description: "Access promotional tools to boost your music's visibility.",
    icon: "📣",
    image: Image4,
  },
  {
    title: "Artist Support",
    description: "Get personalized support from our team of music industry experts.",
    icon: "🤝",
    image: Image5,
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[24rem] h-auto rounded-xl p-6 border">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white flex items-center"
      >
        <span className="text-2xl mr-2">{service.icon}</span> {service.title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        {service.description}
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src={service.image}
          height="600"
          width="800"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt={service.title}
        />
      </CardItem>
   
    </CardBody>
  </CardContainer>
);

export function SmasifyServices() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default SmasifyServices;