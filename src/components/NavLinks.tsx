"use client";

import React, { useState } from "react";
import Link from "next/link";

// Types moved outside component
type NavLink = {
  href: string;
  label: string;
};

// Default navigation data
const defaultNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

type NavLinksProps = {
  navLinks?: NavLink[];
};

const NavLinks = ({ navLinks = defaultNavLinks }: NavLinksProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const renderNavLinks = () => (
    <ul
      className={
        isMobileMenuOpen ? "space-y-6" : "hidden md:flex space-x-8 text-lg"
      }
    >
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="block py-2 hover:text-primary text-white"
            onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return <>{renderNavLinks()}</>;
};

export default NavLinks;
