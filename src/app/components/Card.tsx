"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
  const cardData = [
    {
      title: "/ui.aceternity.com",
      href: "https://twitter.com/mannupaaji",
      description: "Customizable Tailwind CSS and Framer Motion Components.",
      header: "Aceternity UI",
    },
    {
      title: "/another-example.com",
      href: "https://example.com",
      description: "Another customizable component library.",
      header: "Example UI",
    },
    {
      title: "/more-examples.com",
      href: "https://example.com",
      description: "More customizable components for your projects.",
      header: "More UI",
    },
    {
      title: "/more-examples.com",
      href: "https://example.com",
      description: "More customizable components for your projects.",
      header: "More UI",
    },
    // Add more card data as needed
  ];

  return (
    <div className="h-[40rem] w-full flex items-center justify-center overflow-x-auto">
      <div className="flex space-x-4">
        {cardData.map((card, index) => (
          <PinContainer key={index} title={card.title} href={card.href}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {card.header}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">{card.description}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}
