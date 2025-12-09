"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import CtaButton from "./CtaButton";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Ink & Passion", href: "/about" },
    { name: "Our Capabilities", href: "/services" },
    { name: "The Proof Gallery", href: "/portfolio" },
  ];

  return (
    <nav
      className={`fixed! w-full! z-50! transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "backdrop-blur-sm bg-[#402099] py-4"
          : "bg-transparent py-6 text-neutral-900"
      }`}
    >
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className={`text-xl font-bold ${
                isScrolled ? "text-white!" : "text-white!"
              }`}
            >
              LOGO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = isClient && pathname === link.href;
              return (
                <div key={link.name} className="group">
                  <Link
                    href={link.href}
                    className={`relative font-medium text-xl transition-colors ${
                      isScrolled
                        ? isActive
                          ? "text-white!"
                          : "text-white!"
                        : isActive
                        ? "text-white!"
                        : "text-white!"
                    }`}
                  >
                    {link.name}

                    {/* Underline Animation */}
                    <span
                      className={`vibrating-line absolute left-0 -bottom-1 w-full h-1 rounded-full bg-white! transition-all duration-300 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <CtaButton isScrolled={isScrolled} />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="text-white!" />
              ) : (
                <Menu className="text-white!" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-[50px] shadow-xl px-4 pt-20 h-[60vh]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-700 hover:text-blue-600 text-center sm:text-2xl max-sm:text-2xl font-medium border-b border-gray-100 last:border-0 transition-all duration-300 hover:scale-105 hover:bg-blue-50 active:scale-95 active:bg-blue-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="block mt-4 bg-linear-to-r from-blue-600 to-purple-600 text-white sm:text-xl max-sm:text-xl px-6 py-3 rounded-full font-medium text-center transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 hover:from-blue-700 hover:to-purple-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
