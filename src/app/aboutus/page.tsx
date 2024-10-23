"use client";
import React, { useState, useEffect } from 'react';
import { GlobeDemo } from '../components/Globe';
import { GlobeLargeDemo } from '../components/GlobeLarge';
import Footer from '../components/Footer';
import SmasifyServices from '../components/SmasifyServices';
import { ButtonDemo } from '../components/Button';

const AboutUs = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check if screen is small
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // 768px is typical tablet breakpoint
    };

    // Check screen size initially
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {isSmallScreen ? <GlobeDemo /> : <GlobeLargeDemo />}
      <SmasifyServices />
      <ButtonDemo />
      <Footer />
    </div>
  );
};

export default AboutUs;