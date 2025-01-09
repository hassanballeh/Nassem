"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";

// Types moved outside component
type NavLink = {
  href: string;
  label: string;
};

type SlideContent = {
  image: string;
  primarySlogan: string;
  secondarySlogan: string;
};

// Default data
const defaultSlides: SlideContent[] = [
  {
    image: "./images/210_2-1-copyright.webp",
    primarySlogan: "Precision Repairs",
    secondarySlogan: "Reliable Results",
  },
  {
    image: "./images/210_2-2-copyright.webp",
    primarySlogan: "Expert Hands",
    secondarySlogan: "Honest Hearts",
  },
  {
    image: "./images/210_2-3-copyright.webp",
    primarySlogan: "Keeping You",
    secondarySlogan: "Moving Forward",
  },
];

const defaultNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

type HeroProps = {
  slides?: SlideContent[];
  navLinks?: NavLink[];
};

const Hero = ({
  slides = defaultSlides,
  navLinks = defaultNavLinks,
}: HeroProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const renderNavLinks = (isMobile = false) => (
    <ul className={isMobile ? "space-y-6" : "hidden md:flex space-x-8 text-lg"}>
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="block py-2 hover:text-primary"
            onClick={isMobile ? toggleMobileMenu : undefined}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <nav className="absolute top-0 left-0 w-full mx-auto z-20 text-white">
        <div className="max-w-7xl lg:mx-auto mx-5 px-5 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <img src="/images/logo.svg" alt="Logo" className="w-[100px]" />
          </div>
          {renderNavLinks()}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`${isMobileMenuOpen ? "h-0 w-0" : "h-6 w-6"}`}
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
            </button>
          </div>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white flex flex-col justify-center items-center transition-all duration-300`}
        >
          {renderNavLinks(true)}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 text-2xl"
            aria-label="Close mobile menu"
          >
            ×
          </button>
        </div>
      </nav>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-2">
                    {slide.primarySlogan}
                  </h1>
                  <p className="text-xl md:text-2xl">{slide.secondarySlogan}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
