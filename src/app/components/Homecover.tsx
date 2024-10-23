"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import Image1 from "../images/Untitled.jpeg";
import Image2 from "../images/sound2.jpeg";
import Image3 from "../images/sound3.jpg";
import Image4 from "../images/sound4.avif";
import Image5 from "../images/sound5.jpg";
import Image6 from "../images/sound6.jpeg";
import Image7 from "../images/sound7.webp";
import Image8 from "../images/sound8.jpg";
import Image9 from "../images/sound9.webp";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Moonbeam",
    link: "/",
    thumbnail: { src: Image2, alt: "Moonbeam Thumbnail" },
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: { src: Image3, alt: "Cursor Thumbnail" },
  },
  {
    title: "Rogue",
    link: "/",
    thumbnail: { src: Image1, alt: "Rogue Thumbnail" },
  },
  {
    title: "Editorially",
    link: "/",
    thumbnail: { src: Image5, alt: "Editorially Thumbnail" },
  },
  {
    title: "Editrix AI",
    link: "/",
    thumbnail: { src: Image4, alt: "Editrix AI Thumbnail" },
  },
  {
    title: "Pixel Perfect",
    link: "/",
    thumbnail: { src: Image7, alt: "Pixel Perfect Thumbnail" },
  },
  {
    title: "Algochurn",
    link: "/",
    thumbnail: { src: Image8, alt: "Algochurn Thumbnail" },
  },
  {
    title: "Aceternity UI",
    link: "/",
    thumbnail: { src: Image9, alt: "Aceternity UI Thumbnail" },
  },
  {
    title: "Tailwind Master Kit",
    link: "/",
    thumbnail: { src: Image6, alt: "Tailwind Master Kit Thumbnail" },
  },
  {
    title: "SmartBridge",
    link: "/",
    thumbnail: { src: Image2, alt: "SmartBridge Thumbnail" },
  },
  {
    title: "Renderwork Studio",
    link: "/",
    thumbnail: { src: Image8, alt: "Renderwork Studio Thumbnail" },
  },
  {
    title: "Creme Digital",
    link: "/",
    thumbnail: { src: Image9, alt: "Creme Digital Thumbnail" },
  },
  {
    title: "Golden Bells Academy",
    link: "",
    thumbnail: { src: Image7, alt: "Golden Bells Academy Thumbnail" },
  },
  {
    title: "Invoker Labs",
    link: "",
    thumbnail: { src: Image3, alt: "Invoker Labs Thumbnail" },
  },
  {
    title: "E Free Invoice",
    link: "",
    thumbnail: { src: Image1, alt: "E Free Invoice Thumbnail" },
  },
];
