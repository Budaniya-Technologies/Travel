"use client";
import { useState } from "react";
import { FaPlane, FaTrain, FaBus, FaTaxi, FaHotel, FaUsers } from "react-icons/fa";

const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5StW50ZWpLh1mpPq5pCATj6Ckx-JyaQ6HQw&s";

const tabs = [
  { id: "flights", label: "Flights", icon: <FaPlane /> },
  { id: "trains", label: "Trains", icon: <FaTrain /> },
  { id: "buses", label: "Buses", icon: <FaBus /> },
  { id: "cabs", label: "Cabs", icon: <FaTaxi /> },
  { id: "accommodations", label: "Accommodations", icon: <FaHotel /> },
  { id: "partners", label: "Travel Partners", icon: <FaUsers /> },
];

const fareTypes = [
  "Regular Fares",
  "Armed Forces Fares",
  "Student Fares",
  "Senior Citizen Fares",
  "Doctors & Nurses Fares",
];

export default function TravelSearch() {
  const [activeTab, setActiveTab] = useState("flights");
  const [fareType, setFareType] = useState("Regular Fares");
  const [tripType, setTripType] = useState("oneway");

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={imageUrl}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Heading */}
        <div className="text-center text-white mb-10">
          <p className="text-xl font-light tracking-wide">Inspired?</p>
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            GET STARTED
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 bg-white/90 px-5 py-3 rounded-2xl shadow-lg backdrop-blur">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-red-600 text-white shadow-md scale-105"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="mt-8 w-full max-w-6xl bg-white rounded-2xl p-8 shadow-2xl">
          {/* Trip Type */}
          <div className="flex justify-center gap-6 mb-6 text-gray-900 font-semibold">
            <label className="cursor-pointer">
              <input
                type="radio"
                value="oneway"
                checked={tripType === "oneway"}
                onChange={(e) => setTripType(e.target.value)}
                className="mr-2 accent-red-600"
              />
              One Way
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                value="round"
                checked={tripType === "round"}
                onChange={(e) => setTripType(e.target.value)}
                className="mr-2 accent-red-600"
              />
              Round Trip
            </label>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
            <input
              type="text"
              placeholder="From Origin"
              className="col-span-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
            />
            <input
              type="text"
              placeholder="To Destination"
              className="col-span-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
            />
            <input
              type="date"
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
            />
            <input
              type="date"
              disabled={tripType === "oneway"}
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600 outline-none disabled:opacity-50"
            />
            <select className="col-span-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600">
              <option>1 Traveler</option>
              <option>2 Travelers</option>
              <option>3 Travelers</option>
              <option>4 Travelers</option>
            </select>
            <select className="col-span-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600">
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>

          {/* Fare Type */}
          <div className="flex flex-wrap gap-6 mb-6 text-gray-700 text-sm font-medium">
            {fareTypes.map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="fareType"
                  value={type}
                  checked={fareType === type}
                  onChange={(e) => setFareType(e.target.value)}
                  className="accent-red-600"
                />
                {type}
              </label>
            ))}
          </div>

          {/* Direct Flight */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <input type="checkbox" className="accent-red-600" /> Direct flight only
            </label>
          </div>

          {/* Search Button */}
          <div className="flex justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-3 rounded-full text-lg font-bold shadow-md transition-all">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
