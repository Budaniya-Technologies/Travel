"use client";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "How do I book a YatraKaro trip?",
    answer:
      "You can easily book your journey through the YatraKaro website by selecting your destination, travel dates, and completing the secure checkout process.",
  },
  {
    id: 2,
    question: "What payment methods does YatraKaro accept?",
    answer:
      "YatraKaro accepts UPI, credit/debit cards, net banking, and PayPal for international travelers.",
  },
  {
    id: 3,
    question: "Can I cancel or reschedule my trip?",
    answer:
      "Yes! You can cancel or reschedule your booking up to 7 days before departure, as per YatraKaro’s cancellation policy.",
  },
  {
    id: 4,
    question: "How can I contact YatraKaro support?",
    answer:
      "You can reach YatraKaro via email, WhatsApp, or our 24/7 live chat support available directly on the website.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-white">
            YatraKaro FAQs
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-gray-300">
            Travel smarter with YatraKaro. Find answers to common questions
            before planning your next journey with us.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="max-w-3xl mx-auto mt-10 space-y-4 md:mt-6">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl cursor-pointer hover:bg-gray-700 transition-all"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="flex items-center justify-between w-full px-6 py-5"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`px-6 pb-5 transition-all duration-300 ${
                  openId === faq.id ? "block" : "hidden"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <p className="text-center text-gray-300 mt-10">
          Still have questions?{" "}
          <a
            href="/contact"
            className="font-medium text-cyan-400 hover:underline"
          >
            Contact YatraKaro Support
          </a>
        </p>
      </div>
    </section>
  );
}
