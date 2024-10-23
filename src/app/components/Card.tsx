"use client";

import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import Arijit from "../images/Arijjit-Singh-Concert.jpeg";
import artist from "../images/artist1.webp"
import artist1 from "../images/artist2.webp"
import artist2 from "../images/artist3.webp"
import artist3 from "../images/artist4.webp"
import artist4 from "../images/artist5.webp"

export function AnimatedPinDemo() {
  const cardData = [
    {
      title: "Arijit Singh",
      href: Arijit,
      description: "A popular Indian playback singer ",
      header: "Arijit Singh",
    },
    {
      title: "Hariprasad Chaursia",
      href: artist,
      description: "A world renowned exponent of the bansuri",
      header: "Hariprasad Chaursia",
    },
    {
      title: "Ravi Shankar",
      href: artist1,
      description: "A Legendary Sitar Player",
      header: "Ravi Shankar",
    },
    {
      title: "Shiv Kumar Sharma",
      href: artist3,
      description: "A popular Classical Musician",
      header: "Shiv Kumar Sharma",
    },
    {
      title: "Zakir Hussain",
      href: artist2,
      description: "A Classical Tabla Player",
      header: "Zakir Hussain",
    },
    {
      title: "Ustad Ali Akbar Khan",
      href: artist4,
      description: "Indian Classical Musicians",
      header: "Ustad Ali Akbar Khan",
    },
    {
      title: "Arijit Singh",
      href: Arijit,
      description: "A popular Indian playback singer ",
      header: "Arijit Singh",
    },
    {
      title: "Hariprasad Chaursia",
      href: artist,
      description: "A world renowned exponent of the bansuri",
      header: "Hariprasad Chaursia",
    },
    {
      title: "Ravi Shankar",
      href: artist1,
      description: "A Legendary Sitar Player",
      header: "Ravi Shankar",
    },
    {
      title: "Shiv Kumar Sharma",
      href: artist3,
      description: "A popular Classical Musician",
      header: "Shiv Kumar Sharma",
    },
    {
      title: "Zakir Hussain",
      href: artist2,
      description: "A Classical Tabla Player",
      header: "Zakir Hussain",
    },
    {
      title: "Ustad Ali Akbar Khan",
      href: artist4,
      description: "Indian Classical Musicians",
      header: "Ustad Ali Akbar Khan",
    },
    // Add more card data as needed
  ];

  return (
    <div className="w-full">
      {/* Mobile view */}
      <div className="md:hidden">
        <div className="flex flex-col space-y-8 p-4">
          {cardData.map((card, index) => (
            <div key={index} className="w-full">
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                {card.header}
              </h3>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={card.href}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-base font-semibold text-slate-100 mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-300">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block h-[40rem] w-full flex items-center justify-center overflow-x-auto">
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
    </div>
  );
}