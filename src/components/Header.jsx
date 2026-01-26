"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { Logo } from "../../public/PYT.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    {
      name: "Seasons Trends",
      href: "/",
      dropdown: [
        { name: "India", href: "/destination/europe" },
        { name: "Winter Package", href: "/destination/asia" },
        { name: "Summer Package", href: "/destination/america" },
      ],
    },
    {
      name: "Plans",
      href: "/",
      dropdown: [
        { name: "Honeymoon", href: "/" },
        { name: "Adventure", href: "/" },
        { name: "Family", href: "/" },
        { name: "Solo Trips", href: "/" },
      ],
    },
   
    { name: "Packages", href: "/all-packages" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-black/10 py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl font-bold transition-colors ${
            isScrolled ? "text-orange-700" : "text-white"
          }`}
        >
          {/* Use relative path from public folder */}
          <img
            src="/PYT.png"
            alt="Logo"
            className="inline-block mr-2 w-16 h-16"
          />
          YatraKaro.
        </Link>

        {/* Desktop Navigation */}
        <ul
          className={`hidden lg:flex space-x-6 font-medium transition-colors ${
            isScrolled ? "text-gray-700" : "text-white"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.name} className="relative group py-2">
              <Link
                href={link.href}
                className="hover:text-blue-500 flex items-center gap-1 transition-colors"
              >
                {link.name}
                {link.dropdown && <FaChevronDown size={10} />}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-white text-gray-800 shadow-xl rounded-md overflow-hidden border-t-2 border-blue-600">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden transition-colors ${
            isScrolled ? "text-gray-700" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="mb-8 text-gray-700"
          >
            <FaTimes size={24} />
          </button>
          <ul className="flex flex-col space-y-4 font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-lg hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
