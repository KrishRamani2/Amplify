"use client";

import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import Arijit from "../images/Arijjit-Singh-Concert.jpeg"
export function AnimatedPinDemo() {
  const cardData = [
    {
      title: "Arijit Singh",
      href: Arijit,
      description: "Customizable Tailwind CSS and Framer Motion Components.",
      header: "UI",
    },
    {
      title: "/another-example.com",
      href: Arijit,
      description: "Another customizable component library.",
      header: "Example UI",
    },
    {
      title: "/more-examples.com",
      href: Arijit,
      description: "More customizable components for your projects.",
      header: "More UI",
    },
    {
      title: "/more-examples.com",
      href: Arijit,
      description: "More customizable components for your projects.",
      header: "More UI",
    },
    // Add more card data as needed
  ];

  return (
    <div className="h-[40rem] w-full flex items-center justify-center overflow-x-auto">
      <div className="flex space-x-4">
        {cardData.map((card, index) => (
          <PinContainer key={index} title={card.title}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {card.header}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">{card.description}</span>
              </div>
              <div className="flex-1 w-full mt-4 relative overflow-hidden rounded-lg">
                <Image
                  src={card.href}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}