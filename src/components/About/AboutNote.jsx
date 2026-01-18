import React from "react";

const cards = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/25/cd/99/25cd99c2193a9d6a03cd8d298ec01ed6.jpg",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/1200x/bb/d9/42/bbd942c52b0e19a52b7c573fd7772e01.jpg",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/736x/f4/1b/ac/f41bac3c4bc12990eee9ce6918719319.jpg",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/736x/cb/18/0f/cb180ffde7c3abaaf56df8aa5153300e.jpg",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/1200x/d3/86/a7/d386a752e1d0a57808a4da8cd6eb340f.jpg",
  },
];

const AboutNote = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white border border-yellow-200 rounded-2xl shadow-lg p-10 md:p-14">

          <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-3">
            Your Trusted Travel Company
          </h2>

          <p className="text-gray-700 text-base md:text-md leading-[20px] mb-5 max-w-4xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          {/* MOBILE SLIDER (below md) */}
          <div className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory scrollbar-hide">
            {cards.map((card) => (
              <div
                key={card.id}
                className="min-w-[75%] snap-center bg-white rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={card.img}
                  alt=""
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>

          {/* DESKTOP GRID (md and above) — YOUR SAME LAYOUT */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={card.img}
                  alt=""
                  className="w-full h-34 object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutNote;
