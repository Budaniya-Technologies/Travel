"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/PYT.png";

import {
  FaSearch,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const dropdownLinks = [
  {
    title: "Collective",
    options: [
      { label: "India Tours", link: "/admission" },
      { label: "Winter Package", link: "/" },
      { label: "Summer Packages", link: "/" },
    ],
  },
  {
    title: "Plans",
    options: [
      { label: "Honymoon", link: "/" },
      { label: "Adventure", link: "/" },
      { label: "Family", link: "/" },
      { label: "Solo Trip", link: "/" },
    ],
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setLoginOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 shadow-lg bg-white font-sans ">
      {/* --- TOP BAR (GREEN) --- */}
      <div className="bg-orange-600 text-white px-4 md:px-6 py-2 flex flex-wrap items-center justify-between gap-y-2">


        {/* Visible on both Mobile and Desktop now */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-white/90">
            Follow Us:
          </span>
          <div className="flex gap-3 text-lg md:text-lg">
            <a
              href="https://www.facebook.com/share/1GM5h8u3r8/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-300 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/yatra.karo?igsh=d3o0Nmk1dzNibmt0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-300 transition"
            >
              <FaInstagram />
            </a>
            {/* <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-gray-300 transition"
            >
              <FaYoutube />
            </a> */}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+911234567890"
            className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20 hover:bg-white/30 transition shadow-sm"
          >
            <FaWhatsapp className="text-[23px]" />
            <span className="text-xs md:text-sm font-bold">
                +91 8949406003
            </span>
          </a>

          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-1 rounded-full text-sm bg-white/20 border border-white/30 text-white placeholder-white/70 focus:bg-white focus:text-black focus:outline-none transition-all w-32 focus:w-48"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION (WHITE) --- */}
      <div className="bg-white border-b relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0 hover:scale-105 transition-transform"
          >
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={35}
              className="h-10 w-auto object-contain rounded shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold text-gray-800 leading-none">
                Yatra Karo
              </span>
              <span className="text-[10px] md:text-xs font-medium text-orange-600">
                Travels
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 h-full">
            <Link
              href="/"
              className="text-gray-700 hover:text-red-600 font-bold text-sm uppercase"
            >
              Home
            </Link>
            <Link
              href="/aboutus"
              className="text-gray-700 hover:text-red-600 font-bold text-sm uppercase"
            >
              About US
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-red-600 font-bold text-sm uppercase"
            >
              Blogs
            </Link>
             <Link
              href="/all-packages"
              className="text-gray-700 hover:text-red-600 font-bold text-sm uppercase"
            >
              All Packages
            </Link>

            {/* Desktop Mega Menu Trigger */}
            <div
              className="h-full flex items-center cursor-pointer group"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <span className="text-gray-700 group-hover:text-red-600 font-bold text-sm uppercase flex items-center gap-1">
                Explore All{" "}
                <FaChevronDown
                  className={`text-[10px] transition-transform ${isMegaMenuOpen ? "rotate-180" : ""}`}
                />
              </span>

              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8 p-8">
                    {dropdownLinks.map((category, idx) => (
                      <div key={idx} className="flex flex-col gap-3">
                        <h3 className="text-black font-black text-sm uppercase tracking-widest border-b pb-2">
                          {category.title}
                        </h3>
                        <ul className="flex flex-col gap-2">
                          {category.options.map((opt, i) => (
                            <li key={i}>
                              <Link
                                href={opt.link}
                                className="text-gray-800 hover:text-black hover:translate-x-1 transition-all text-[16px] font-medium inline-block"
                              >
                                {opt.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-red-600 font-bold text-sm uppercase"
            >
              Contact
            </Link>
          </div>

          {/* Right Section: Login + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block relative" ref={loginRef}>
              <button
                onClick={() => setLoginOpen(!loginOpen)}
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-200 transition flex items-center gap-2"
              >
                LOGIN <FaChevronDown className="text-[10px]" />
              </button>
              {loginOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl border rounded-xl py-2 z-50">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-50"
                  >
                    User Login
                  </Link>
                  {/* <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-50 border-t"
                  >
                    Partner Login
                  </Link> */}
                </div>
              )}
            </div>

            <button
              className="md:hidden text-2xl text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white h-screen overflow-y-auto pb-32 animate-in slide-in-from-right duration-300">
          <div className="flex flex-col">
            <div className="p-6 grid grid-cols-1 gap-4 bg-gray-50 border-b">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-gray-800 border-b pb-2"
              >
                Home
              </Link>
              <Link
                href="/aboutus"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-gray-800 border-b pb-2"
              >
                About US
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-gray-800 border-b pb-2"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-gray-800 border-b pb-2"
              >
                Contact
              </Link>
              <div className="text-[#DC143C] font-black text-xs uppercase tracking-widest mt-2">
                Explore All Destinations
              </div>
            </div>

            {dropdownLinks.map((category, idx) => (
              <div key={idx} className="border-b">
                <details className="group">
                  <summary className="list-none px-6 py-4 flex justify-between items-center font-bold text-gray-700 text-sm uppercase cursor-pointer group-open:bg-green-50">
                    {category.title}
                    <FaChevronDown className="text-[10px] group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="flex flex-col bg-white">
                    {category.options.map((opt, i) => (
                      <Link
                        key={i}
                        href={opt.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-10 py-3 text-sm text-black/90 border-b border-gray-50 last:border-none hover:bg-gray-50"
                      >
                        {opt.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </div>
            ))}

            <div className="p-6 flex flex-col gap-4">
              <Link href="/contact">
              <button className="w-full bg-[#DC143C] text-white py-4 rounded-xl font-bold shadow-lg">
                BOOK A TRIP
              </button></Link>
              <div className="flex gap-4">
                
                <button className="flex-1 border-2 border-gray-200 py-3 rounded-xl font-bold text-gray-700 text-sm">
                  <Link href="/login">
                  USER LOGIN
                  </Link>
                </button>
               
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// import Image from "next/image";
// import { Logo } from "../../public/PYT.png";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/aboutus" },
//     {
//       name: "Seasons Trends",
//       href: "/",
//       dropdown: [
//         { name: "India", href: "/destination/europe" },
//         { name: "Winter Package", href: "/destination/asia" },
//         { name: "Summer Package", href: "/destination/america" },
//       ],
//     },
//     {
//       name: "Plans",
//       href: "/",
//       dropdown: [
//         { name: "Honeymoon", href: "/" },
//         { name: "Adventure", href: "/" },
//         { name: "Family", href: "/" },
//         { name: "Solo Trips", href: "/" },
//       ],
//     },

//     { name: "Packages", href: "/all-packages" },
//     { name: "Blogs", href: "/blog" },
//     { name: "Contact", href: "/contact" },
//     { name: "Login", href: "/login" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-md py-3" : "bg-black/10 py-5"
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <Link
//           href="/"
//           className={`text-xl font-bold transition-colors ${
//             isScrolled ? "text-orange-700" : "text-white"
//           }`}
//         >
//           {/* Use relative path from public folder */}
//           <img
//             src="/PYT.png"
//             alt="Logo"
//             className="inline-block mr-2 w-16 h-16"
//           />
//           YatraKaro.
//         </Link>

//         {/* Desktop Navigation */}
//         <ul
//           className={`hidden lg:flex space-x-6 font-medium transition-colors ${
//             isScrolled ? "text-gray-700" : "text-white"
//           }`}
//         >
//           {navLinks.map((link) => (
//             <li key={link.name} className="relative group py-2">
//               <Link
//                 href={link.href}
//                 className="hover:text-blue-500 flex items-center gap-1 transition-colors"
//               >
//                 {link.name}
//                 {link.dropdown && <FaChevronDown size={10} />}
//               </Link>

//               {/* Dropdown Menu */}
//               {link.dropdown && (
//                 <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-white text-gray-800 shadow-xl rounded-md overflow-hidden border-t-2 border-blue-600">
//                   {link.dropdown.map((sub) => (
//                     <Link
//                       key={sub.name}
//                       href={sub.href}
//                       className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                     >
//                       {sub.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Toggle */}
//         <button
//           className={`lg:hidden transition-colors ${
//             isScrolled ? "text-gray-700" : "text-white"
//           }`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </nav>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="p-6">
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="mb-8 text-gray-700"
//           >
//             <FaTimes size={24} />
//           </button>
//           <ul className="flex flex-col space-y-4 font-medium text-gray-700">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   className="block text-lg hover:text-blue-600"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// }
