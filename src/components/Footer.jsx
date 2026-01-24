import Link from "next/link";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaChevronRight, 
  FaPaperPlane, 
  FaHeart 
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebookF, url: "https://www.facebook.com/share/1GM5h8u3r8/" },
    { icon: FaInstagram, url: "https://www.instagram.com/yatra.karo?igsh=d3o0Nmk1dzNibmt0" },
  ];

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Destinations", link: "/" },
    { name: "Packages", link: "/" },
    { name: "Gallery", link: "/" },
  ];

  const OurDestinitions = [
    { name: "Rajasthan", link: "/" },
    { name: "J&K", link: "/" },
    { name: "Himachal Pradesh", link: "/" },
    { name: "South India", link: "/" },
    { name: "Religious Places", link: "/" },
    { name: "Maharashtra", link: "/" },
    { name: "Punjab", link: "/" },
    { name: "India Tour", link: "/" },
    { name: "Gujarat", link: "/" },
  ];

  const services = [
    { name: "Trekking Packages", link: "/trekking" },
    { name: "Hill Station Tours", link: "/tours" },
    { name: "Adventure Travel", link: "/adventure" },
    { name: "Camping & Stays", link: "/camping" },
    { name: "Custom Trip Planning", link: "/custom-trip" },
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "Jaipur, Rajasthan, India" },
    { icon: FaPhoneAlt, text: "+91 73070 22824", link: "tel:+917307022824" },
    { icon: FaEnvelope, text: "support@yatrakarotravels.com", link: "mailto:support@yatrakarotravels.com" },
  ];

  return (
    <footer className="relative bg-black text-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 relative z-10">
        
        {/* ABOUT SECTION */}
        <div>
          <img
            src="/PYT.png"
            alt="Logo"
            className="inline-block mr-2 w-16 h-16 mb-8"
          />
          {/* <h2 className="text-sm font-bold text-orange-400 mb-4">ParvatYatra</h2> */}
          <p className="mb-4 leading-[22px] text-sm opacity-90">
            ParvatYatra is your trusted travel companion for unforgettable
            mountain adventures. We craft scenic journeys across India’s
            majestic hills, offering trekking expeditions, serene retreats,
            camping under starlit skies, and personalized adventure tours.
          </p>
          <p className="mb-4 leading-[22px] text-sm opacity-90"> 
            With expert guides, comfortable accommodations, and well-planned
            itineraries, we ensure every trip is seamless, safe, and truly
            memorable—helping you explore, connect with nature, and create
            lifelong memories.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3">
            {socialLinks.map(({ icon: Icon, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full text-white transition-transform hover:-translate-y-1 hover:bg-sky-500"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl text-orange-400 mb-6 border-b-2 border-white pb-2">
            Quick Links
          </h3>
          <ul className="space-y-1 pb-10 text-sm">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <FaChevronRight className="text-white" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="text-xl text-orange-400 mb-6 border-b-2 border-white pb-2">
            Our Destinations
          </h3>
          <ul className="space-y-1 text-sm">
            {OurDestinitions.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <FaChevronRight className="text-white" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-xl text-orange-400 mb-6 border-b-2 border-white pb-2">
            Our Services
          </h3>
          <ul className="space-y-1 text-sm">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.link}
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <FaChevronRight className="text-white-400" />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT + NEWSLETTER */}
        <div>
          <h3 className="text-xl text-orange-400 mb-6 border-b-2 border-white pb-2">
            Contact Us
          </h3>
          <ul className="space-y-1 text-sm mb-6">
            {contactInfo.map(({ icon: Icon, text, link }) => (
              <li key={text} className="flex items-start gap-4">
                <Icon className="text-white mt-1" />
                {link ? (
                  <a
                    href={link}
                    className="hover:underline opacity-90 hover:opacity-100"
                  >
                    {text}
                  </a>
                ) : (
                  <div>{text}</div>
                )}
              </li>
            ))}
          </ul>

          {/* Newsletter */}
          <h3 className="text-xl text-orange-400 mb-2 border-b-2 border-white pb-2">
            Newsletter
          </h3>
          <p className="mb-4 opacity-70  text-sm">
            Subscribe to receive travel updates and exclusive offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="flex-1 p-3 rounded-l-md focus:outline-none bg-gray-100 text-black"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-sky-400 text-white p-3 rounded-r-md transition"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="mt-16 pt-8 border-t border-gray-700 text-center opacity-70 text-sm">
        <p>
          © 2024 ParvatYatra Travel Agency. All Rights Reserved. | Designed with{" "}
          <FaHeart className="inline text-sky-400" /> by ParvatYatra Development Team
        </p>
      </div>
    </footer>
  );
}
