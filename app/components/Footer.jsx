"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const productLinks = [
    { label: "Overview" },
    { label: "Features" },
    { label: "Solutions" },
    { label: "Tutorials" },
    { label: "Pricing" },
    { label: "Releases" },
  ];

  const resourceLinks = [
    { label: "Blog", href: "#" },
    { label: "Newsletter", href: "#" },
    { label: "Events", href: "#" },
    { label: "Help centre", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "Support", href: "#" },
  ];

  const legalLinks = [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ];

  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-indigo-900 text-white pt-20 pb-4 px-4">
      <div className="max-w-11/12 mx-auto">
        {/* Mobile */}
        <div className="lg:hidden space-y-6 mb-8">
          <div>
            <h2 className="text-4xl! font-bold mb-2 text-white!">
              Strength Innovations
            </h2>
            <p className="text-white! text-xl!">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          {/* Product */}
          <div className="border-b border-gray-800 pb-4">
            <button
              onClick={() => toggleSection("product")}
              className="flex justify-between items-center w-full py-2"
            >
              <h3 className="font-semibold text-xl! text-white!">Product</h3>
              {openSection === "product" ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>

            {openSection === "product" && (
              <ul className="mt-4 space-y-3 pl-2">
                {productLinks.map((link) => (
                  <li
                    key={link.label}
                    className="text-gray-400! hover:text-white! text-xl! transition-colors duration-200"
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Resources */}
          <div className="border-b border-gray-800 pb-4">
            <button
              onClick={() => toggleSection("resources")}
              className="flex justify-between items-center w-full py-2"
            >
              <h3 className="font-semibold text-xl! text-white!">Resources</h3>
              {openSection === "resources" ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>

            {openSection === "resources" && (
              <ul className="mt-4 space-y-3 pl-2">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400! hover:text-white! block py-1 text-xl!"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-2xl! font-bold mb-4 text-white!">Strength Innovations</h2>
            <p className="text-gray-400! text-xl!">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          <div>
            <h3 className="font-semibold  mb-4 text-2xl! text-white!">
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li
                  key={link.label}
                  className="text-gray-400! hover:text-white! text-xl! transition-colors duration-200"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-2xl! text-white!">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400! hover:text-white! text-xl! transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL LINKS — untouched */}
          <div>
            <a href="#" className="word" aria-label="tiktok">
              <span aria-hidden="true">t</span>
              <span aria-hidden="true">i</span>
              <span aria-hidden="true">k</span>
              <span aria-hidden="true">t</span>
              <span aria-hidden="true">o</span>
              <span aria-hidden="true">k</span>
            </a>
            <a href="#" className="word" aria-label="instagram">
              <span aria-hidden="true">i</span>
              <span aria-hidden="true">n</span>
              <span aria-hidden="true">s</span>
              <span aria-hidden="true">t</span>
              <span aria-hidden="true">a</span>
              <span aria-hidden="true">g</span>
              <span aria-hidden="true">r</span>
              <span aria-hidden="true">a</span>
              <span aria-hidden="true">m</span>
            </a>
            <a href="#" className="word" aria-label="instagram">
              <span aria-hidden="true">f</span>
              <span aria-hidden="true">a</span>
              <span aria-hidden="true">c</span>
              <span aria-hidden="true">e</span>
              <span aria-hidden="true">b</span>
              <span aria-hidden="true">o</span>
              <span aria-hidden="true">o</span>
              <span aria-hidden="true">k</span>
            </a>
            <a href="#" className="word" aria-label="youtube">
              <span aria-hidden="true">y</span>
              <span aria-hidden="true">o</span>
              <span aria-hidden="true">u</span>
              <span aria-hidden="true">t</span>
              <span aria-hidden="true">u</span>
              <span aria-hidden="true">b</span>
              <span aria-hidden="true">e</span>
            </a>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400! text-xl! text-center md:text-left">
            © 2025 SIPP. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-400! hover:text-white! text-xl! transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
