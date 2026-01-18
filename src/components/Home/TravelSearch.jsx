"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { FaPlane, FaTrain, FaBus, FaTaxi, FaHotel, FaUsers, FaArrowRight, FaSearch } from "react-icons/fa";

const imageUrl = "https://i.pinimg.com/736x/a7/5d/15/a75d15dcc266609a305b4b98c489f092.jpg";

const tabs = [
  { id: "flights", label: "Flights", icon: <FaPlane /> },
  { id: "trains", label: "Trains", icon: <FaTrain /> },
  { id: "buses", label: "Buses", icon: <FaBus /> },
  { id: "cabs", label: "Cabs", icon: <FaTaxi /> },
  { id: "accommodations", label: "Stays", icon: <FaHotel /> },
  { id: "partners", label: "Groups", icon: <FaUsers /> },
];

export default function TravelSearchRedesign() {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("oneway");

  // Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  const moveX = (clientX - window.innerWidth / 2) / 50;
  const moveY = (clientY - window.innerHeight / 2) / 50;

  mouseX.set(moveX);
  mouseY.set(moveY);
};





  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center p-4"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ x: mouseX, y: mouseY, scale: 1.1 }}
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out"
      >
        <img src={imageUrl} alt="Background" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>
      </motion.div>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[100px_1fr] gap-6">
        
        {/* Side Mode Selector (Unique Concept) */}
        <div className="flex lg:flex-col flex-row justify-center gap-4 bg-white/5 backdrop-blur-xl p-4 rounded-3xl border border-white/10 shadow-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 rounded-2xl transition-all duration-300 text-2xl relative group ${
                activeTab === tab.id ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]" : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.icon}
              <span className="absolute left-full ml-4 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex flex-col gap-6">
          <header className="text-left text-white space-y-2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="text-red-500 font-bold tracking-widest uppercase text-sm"
            >
              Adventure Awaits
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter"
            >
              WHERE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">NEXT?</span>
            </motion.h1>
          </header>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-8 shadow-2xl"
          >
            {/* Trip Type Toggle */}
            <div className="flex gap-1 bg-black/20 w-fit p-1 rounded-full mb-8 border border-white/5">
              {["oneway", "round"].map((type) => (
                <button
                  key={type}
                  onClick={() => setTripType(type)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    tripType === type ? "bg-white text-black shadow-lg" : "text-white/60 hover:text-white"
                  }`}
                >
                  {type === "oneway" ? "One Way" : "Round Trip"}
                </button>
              ))}
            </div>

            {/* Futuristic Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="group space-y-2">
                <label className="text-xs font-bold text-white/40 ml-2 uppercase tracking-widest">Origin</label>
                <div className="bg-white/5 border border-white/10 group-focus-within:border-red-500 transition-colors p-4 rounded-2xl">
                  <input type="text" placeholder="From where?" className="bg-transparent w-full text-white outline-none placeholder:text-white/20" />
                </div>
              </div>

              <div className="group space-y-2">
                <label className="text-xs font-bold text-white/40 ml-2 uppercase tracking-widest">Destination</label>
                <div className="bg-white/5 border border-white/10 group-focus-within:border-red-500 transition-colors p-4 rounded-2xl">
                  <input type="text" placeholder="Going to?" className="bg-transparent w-full text-white outline-none placeholder:text-white/20" />
                </div>
              </div>

              <div className="group space-y-2">
                <label className="text-xs font-bold text-white/40 ml-2 uppercase tracking-widest">Departure</label>
                <div className="bg-white/5 border border-white/10 group-focus-within:border-red-500 transition-colors p-4 rounded-2xl">
                  <input type="date" className="bg-transparent w-full text-white outline-none invert brightness-200" />
                </div>
              </div>

              <div className="group space-y-2">
                <label className="text-xs font-bold text-white/40 ml-2 uppercase tracking-widest">Return</label>
                <div className={`bg-white/5 border border-white/10 group-focus-within:border-red-500 transition-colors p-4 rounded-2xl ${tripType === 'oneway' ? 'opacity-30' : ''}`}>
                  <input type="date" disabled={tripType === "oneway"} className="bg-transparent w-full text-white outline-none invert brightness-200 disabled:cursor-not-allowed" />
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap gap-4">
                 {/* Simplified Fare Type Pills */}
                 {["Regular", "Student", "Senior"].map(f => (
                   <span key={f} className="px-4 py-1.5 rounded-full border border-white/10 text-xs text-white/70 hover:bg-white/10 cursor-pointer transition-colors">
                     {f}
                   </span>
                 ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-black px-10 py-4 rounded-2xl flex items-center gap-3 shadow-[0_10px_30px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.6)] transition-all"
              >
                FIND JOURNEY <FaSearch />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}