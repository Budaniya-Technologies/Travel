"use client";
import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { FaPlane, FaTrain, FaBus, FaTaxi, FaHotel, FaUsers, FaSearch, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const imageUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80";

const tabs = [
  { id: "flights", label: "Flights", icon: <FaPlane /> },
  { id: "stays", label: "Stays", icon: <FaHotel /> },
  { id: "trains", label: "Trains", icon: <FaTrain /> },
  { id: "buses", label: "Buses", icon: <FaBus /> },
  { id: "cabs", label: "Cabs", icon: <FaTaxi /> },
  { id: "groups", label: "Groups", icon: <FaUsers /> },
];

export default function TravelSearchRedesign() {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("oneway");

  // Parallax Logic (Desktop Only Performance)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 60;
    const moveY = (clientY - window.innerHeight / 2) / 60;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-x-hidden bg-[#050505] flex flex-col lg:flex-row items-center justify-center p-4 md:p-8"
    >
      {/* Background with Parallax */}
      <motion.div 
        style={{ x: mouseX, y: mouseY, scale: 1.1 }}
        className="absolute inset-0 z-0"
      >
        <img src={imageUrl} alt="Background" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60"></div>
      </motion.div>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row gap-6 mb-20 lg:mb-0">
        
        {/* SIDEBAR - Desktop Only */}
        <nav className="hidden lg:flex flex-col gap-4 bg-white/5 backdrop-blur-2xl p-4 rounded-3xl border border-white/10 shadow-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-5 rounded-2xl transition-all duration-300 text-2xl relative group ${
                activeTab === tab.id ? "bg-orange-500 text-white shadow-lg shadow-orange-500/40" : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.icon}
              <span className="absolute left-full ml-6 px-3 py-1 bg-white text-black text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          ))}
        </nav>

        {/* CONTENT AREA */}
        <div className="flex-1 flex flex-col gap-6">
          <header className="text-center lg:text-left space-y-2">
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs md:text-sm"
            >
              Explore the World
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter"
            >
              PLAN YOUR <br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
                ESCAPADE
              </span>
            </motion.h1>
          </header>

          <motion.div 
            layout
            className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-6 md:p-10 shadow-3xl"
          >
            {/* Trip Type Toggle */}
            <div className="flex bg-black/40 p-1.5 rounded-2xl w-full sm:w-fit mb-8">
              {["oneway", "round"].map((type) => (
                <button
                  key={type}
                  onClick={() => setTripType(type)}
                  className={`flex-1 sm:flex-none px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    tripType === type ? "bg-white text-black" : "text-white/50 hover:text-white"
                  }`}
                >
                  {type === "oneway" ? "One Way" : "Round Trip"}
                </button>
              ))}
            </div>

            {/* Responsive Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <InputBlock label="From" icon={<FaMapMarkerAlt />} placeholder="Origin City" />
              <InputBlock label="To" icon={<FaMapMarkerAlt />} placeholder="Destination" />
              <InputBlock label="Depart" icon={<FaCalendarAlt />} type="date" />
              <InputBlock 
                label="Return" 
                icon={<FaCalendarAlt />} 
                type="date" 
                disabled={tripType === 'oneway'} 
              />
            </div>

            {/* Bottom Section */}
            <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
              <div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                {["Economy", "Business", "First"].map(cls => (
                  <span key={cls} className="whitespace-nowrap px-5 py-2 rounded-full border border-white/10 text-xs font-medium text-white/60 hover:bg-white/20 cursor-pointer transition-all">
                    {cls}
                  </span>
                ))}
              </div>

              <button className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-rose-600 text-white font-bold px-12 py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-orange-600/20">
                SEARCH JOURNEY <FaSearch className="text-sm" />
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* MOBILE BOTTOM NAV - Visible only on small screens */}
      <nav className="lg:hidden fixed bottom-6 left-4 right-4 z-50 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 flex justify-between items-center shadow-2xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center flex-1 py-3 rounded-2xl transition-all ${
              activeTab === tab.id ? "bg-orange-500 text-white" : "text-white/40"
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span className="text-[10px] mt-1 font-bold uppercase tracking-tighter">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

// Sub-component for Inputs
function InputBlock({ label, icon, placeholder, type = "text", disabled = false }) {
  return (
    <div className={`flex flex-col gap-2 ${disabled ? 'opacity-20 grayscale' : 'opacity-100'}`}>
      <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">
        {label}
      </label>
      <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 focus-within:border-orange-500/50 focus-within:bg-white/10 transition-all">
        <span className="text-orange-500 text-sm">{icon}</span>
        <input 
          disabled={disabled}
          type={type} 
          placeholder={placeholder} 
          className="bg-transparent w-full text-white outline-none placeholder:text-white/20 font-medium"
        />
      </div>
    </div>
  );
} 