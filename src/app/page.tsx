"use client";
import { HeroScrollDemo } from "./components/Container_Scroll";
import { HeroParallaxDemo } from "./components/Homecover";
import { TypewriterEffectSmoothDemo } from "./components/Popular_Artist_Text";
import { AnimatedPinDemo } from "./components/Card";
import { NavbarDemo } from "./components/Navbar";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div >
      <NavbarDemo />
        <HeroScrollDemo/>
        <HeroParallaxDemo/>
        <TypewriterEffectSmoothDemo />
        <AnimatedPinDemo />
        <Footer />
    </div>
  );
}
