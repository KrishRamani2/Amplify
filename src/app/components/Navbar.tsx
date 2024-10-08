"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../../utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Account">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Login</HoveredLink>
            <HoveredLink href="/interface-design">View Profile</HoveredLink>
            <HoveredLink href="/seo">Listening history</HoveredLink>
            <HoveredLink href="/branding">Settings and privacy</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/home"><MenuItem  item="Home"></MenuItem></Link>
        <Link href="/premium"><MenuItem item="Premium"> </MenuItem></Link>
        <Link href="/library"><MenuItem  item="Library"></MenuItem></Link>
        <Link href="/search"><MenuItem  item="Search"></MenuItem></Link>
        <Link href="/aboutus"><MenuItem  item="About Us"></MenuItem></Link>
      </Menu>
    </div>
  );
}
