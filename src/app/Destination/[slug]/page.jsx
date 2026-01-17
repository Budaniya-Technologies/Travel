import Image from "next/image";

const destinations = {
  "taj-mahal": {
    name: "Taj Mahal, Agra",
    description: "An ivory-white marble mausoleum and symbol of eternal love.",
    image: "/slider1.png",
  },
  jaipur: {
    name: "Jaipur, Rajasthan",
    description:
      "The Pink City known for its forts, palaces, and vibrant culture.",
    image: "/slider3.png",
  },
  kerala: {
    name: "Kerala Backwaters",
    description: "A network of serene canals, lagoons, and houseboats.",
    image: "/slider2.jpg",
  },
  goa: {
    name: "Goa Beaches",
    description: "Golden beaches, nightlife, and Portuguese heritage.",
    image: "/slider.png",
  },
  "leh-ladakh": {
    name: "Leh-Ladakh",
    description:
      "A high-desert region with monasteries and scenic mountain passes.",
    image: "/slider4.webp",
  },
};

export default function DestinationPage({ params }) {
  const { slug } = params;
  const destination = destinations[slug];

  if (!destination) {
    return (
      <h1 className="text-center mt-20 text-2xl">Destination Not Found</h1>
    );
  }

  return (
    <>
      <div className="relative w-full h-[500px]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover shadow-lg"
        />

        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-4xl font-bold">{destination.name}</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6">
        <p className="mt-6 text-gray-700 text-lg">{destination.description}</p>
      </div>
    </>
  );
}
