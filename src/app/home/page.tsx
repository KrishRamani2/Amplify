"use client";
import React from 'react'
import { NavbarDemo } from '../components/Navbar';
import Footer from '../components/Footer';
import { SidebarDemo } from '../components/Sidebar';

const homepage = () => {
  return (
    <>
    <div>
      <SidebarDemo />
    </div>
    <Footer />
    </>
  )
}

export default homepage