import Image from "next/image";
import Link from "next/link";

const tourpkgs = [
  {
    id: 1,
    name: "Taj Mahal & Agra Tour",
    image: "/slider1.png",
    description: "Explore the iconic Taj Mahal and Mughal heritage sites.",
    slug: "taj-mahal-agra",
  },
  {
    id: 2,
    name: "Golden Triangle Tour",
    image: "/slider4.webp",
    description: "Delhi, Agra & Jaipur - Experience the heart of India.",
    slug: "golden-triangle",
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    image: "/slider.png",
    description: "Houseboat stay and serene backwaters in Kerala.",
    slug: "kerala-backwaters",
  },
  {
    id: 4,
    name: "Rajasthan Palace Tour",
    image: "/slider1.png",
    description: "Visit Jaipur, Udaipur & Jodhpur palaces in luxury.",
    slug: "rajasthan-palaces",
  },
];

export default function PkgPage({ params }) {
  const { slug } = params;
  console.log(slug);

  const pkg = tourpkgs.find((p) => p.slug === slug);

  if (!pkg) {
    return (
      <h1 className="text-center mt-20 text-2xl">Destination Not Found</h1>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <Image src={pkg.image} alt={pkg.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{pkg.name}</h1>
        </div>
      </div>

     

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-indigo-600">
            Explore More Packages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tourpkgs
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link key={p.slug} href={`/packages/${p.slug}`}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={400}
                      height={300}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {p.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

         
        </div>
      </section>

         <div className=" text-gray-800">
            <p className=" font-bold">{pkg.description}</p>
        </div>

     
    </>
  );
}

/* ✅ Pre-generate all static pages */
export function generateStaticParams() {
  return tourpkgs.map((p) => ({ slug: p.slug }));
}
