import React from "react";
import { Mail, Instagram, MapPin, Send, Facebook } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="relative min-h-screen bg-white text-zinc-700 px-6 py-24 overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-400/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 md:mb-24">
          <span className="inline-block text-xs font-medium tracking-[0.4em] uppercase text-orange-500 mb-4">
            Plan your journey with us
          </span>

          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-zinc-900 mb-6">
            Travel smarter with{" "}
            <span className="text-orange-500 italic font-serif">YatraKaro</span>
          </h1>

          <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Discover unforgettable destinations, customized travel packages, and
            hassle-free journeys across India. Let us plan your next adventure.
          </p>
        </header>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-orange-500">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-orange-500 transition-all placeholder:text-zinc-400"
                    placeholder="Your Name"
                  />
                </div>

                <div className="group">
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-orange-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-orange-500 transition-all placeholder:text-zinc-400"
                    placeholder="Your Gmail ID (@gmail.com)"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-orange-500">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-orange-500 transition-all resize-none placeholder:text-zinc-400"
                  placeholder="Tell us about your dream destination, travel dates, or package requirements..."
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-orange-400 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
              >
                Send Message
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>

          {/* Contact Sidebar */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-12 lg:pl-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8">
                Contact Details
              </h3>

              <div className="space-y-8">
                <ContactLink
                  icon={<Mail size={18} />}
                  label="Email"
                  value="support@yatrakarotravels.com"
                  href="mailto:support@yatrakarotravels.com"
                />

                <ContactLink
                  icon={<Instagram size={18} />}
                  label="Instagram"
                  value="@yatra.karo"
                  href="https://www.instagram.com/yatra.karo?igsh=d3o0Nmk1dzNibmt0"
                />

                <ContactLink
                  icon={<Facebook size={18} />}
                  label="Facebook"
                  value="YatraKaro Travels"
                  href="https://www.facebook.com/share/1GM5h8u3r8/"
                />

                <ContactLink
                  icon={<MapPin size={18} />}
                  label="Location"
                  value="India • Serving PAN India"
                />
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-orange-50 border border-orange-200">
              <p className="text-sm italic leading-relaxed text-zinc-600">
                "Travel is the only thing you buy that makes you richer."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, value, href }) {
  const Content = (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200 group-hover:bg-orange-500 group-hover:text-white transition-all">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-zinc-500">
          {label}
        </p>
        <p className="text-sm text-zinc-700 group-hover:text-orange-500 transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {Content}
    </a>
  ) : (
    Content
  );
}
