"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-serif font-bold">TravelMate</h2>
          <p className="mt-3 text-gray-200 text-sm">
            Discover the world with curated packages, 
            seamless travel experiences, and memories for life. 🌍
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/destinations" className="hover:text-yellow-300">Destinations</a></li>
            <li><a href="/about" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-gray-200 text-sm mb-3">
            Subscribe to get travel updates & exclusive offers.
          </p>
          <form className="flex items-center bg-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 p-2 text-black outline-none"
            />
            <button className="px-4 py-2 bg-yellow-400 text-black font-semibold hover:bg-yellow-300">
              Join
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-yellow-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-300"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-300"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 text-center py-4 text-gray-200 text-sm">
        © {new Date().getFullYear()} TravelMate. All rights reserved.
      </div>
    </footer>
  );
}
