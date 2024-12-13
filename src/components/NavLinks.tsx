"use client";

import React, { useState } from "react";
import Link from "next/link";
interface NavLink {
  href: string;
  label: string;
}
interface HeaderProps {
  navLink?: NavLink[];
}

const NavLinks: React.FC<HeaderProps> = ({
  navLink = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const renderNavLinks = (isMobile = false) => (
    <ul className={isMobile ? "space-y-6" : "hidden md:flex space-x-8 text-lg"}>
      {navLink.map((link) => (
        <li key={link.href} className={isMobile ? "" : ""}>
          <Link
            href={link.href}
            className="block py-2 hover:text-primary text-white"
            onClick={isMobile ? toggleMobileMenu : undefined}
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
