import React from "react";

export default function PromoNonMember() {
  const publicPromos = [
    {
      id: 1,
      title: "Laser Proyellow",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      image:
        "https://i.pinimg.com/736x/3d/e1/47/3de147474da85c48e27df390d69b7e6e.jpg",
      originalPrice: 200000,
      discountedPrice: 150000,
      type: "umum",
      active: true,
    },
    {
      id: 2,
      title: "DNA Salmon",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      image:
        "https://i.pinimg.com/736x/a7/34/0f/a7340fd7edb9ed890c4c680303a709cf.jpg",
      originalPrice: 180000,
      discountedPrice: 125000,
      type: "umum",
      active: true,
    },
    {
      id: 3,
      title: "Facial Glow Up",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      image: "https://i.pinimg.com/736x/7c/59/fc/7c59fc602fbf135894a7127c23abd6a2.jpg",
      originalPrice: 220000,
      discountedPrice: 160000,
      type: "umum",
      active: true,
    },
    {
      id: 4,
      title: "IPL Hair Removal",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      image: "https://i.pinimg.com/736x/65/6e/51/656e514e4209a8db350a34c4f8267085.jpg",
      originalPrice: 300000,
      discountedPrice: 225000,
      type: "umum",
      active: true,
    },
  ];

  return (
    <div
      className="p-6 min-h-screen overflow-y-auto bg-cover bg-center" // Tambahkan bg-cover dan bg-center
      style={{ backgroundImage: `url('/treatment1.jpg')` }} // Set background image di sini
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Explore Our Special Offers
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Unlock exclusive beauty experiences with our limited-time promotions. Discover your path to radiant confidence. Explore now.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 pb-10">
        {publicPromos.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src={promo.image}
                alt={promo.title}
                className="h-full w-full object-cover min-h-[180px] md:min-h-0"
              />
            </div>
            <div className="p-6 md:p-8 flex-grow">
              <h3 className="text-2xl font-bold text-gray-800">
                {promo.title}
              </h3>
              <p className="text-sm text-pink-600 mb-4">General manager</p>
              <p className="text-base text-gray-700 leading-relaxed">
                {promo.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}