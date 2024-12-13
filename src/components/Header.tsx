"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  navLink?: NavLink[];
  title: string;
}

const Header: React.FC<HeaderProps> = ({
  navLink = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  title,
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
            className="block py-2 hover:text-primary text-secondary"
            onClick={isMobile ? toggleMobileMenu : undefined}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  const url = "./images/logo.svg";

  return (
    <div className=" w-full  overflow-hidden">
      <div className=" w-full">
        <div className=" max-w-7xl lg:mx-auto mx-5 px-5 py-3 flex items-center justify-between">
          <div className="">
            <img src={url} className=" w-[100px]" alt="Logo" />
          </div>
          {renderNavLinks()}
          <div className="md:hidden z-[100] ">
            <button
              onClick={toggleMobileMenu}
              className=" focus:outline-none z-50 text-secondary"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6 z-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 z-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden fixed inset-0 z-50 bg-black bg-opacity-90 text-white flex flex-col justify-center items-center transition-all duration-300`}
        >
          {renderNavLinks(true)}
        </div>
      </div>
      <p className=" absolute top-[120px] border-[2px] border-solid border-primary w-full"></p>
    </div>
  );
};

export default Header;
