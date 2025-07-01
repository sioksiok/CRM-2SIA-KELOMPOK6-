import React from "react";

export default function PromoMember() {
  const promos = [
    {
      id: 1,
      title: "Laser Proyellow",
      level: "Gold",
      type: "member",
      active: true,
      description: "Diskon spesial untuk perawatan wajah premium.",
      image:
        "https://i.pinimg.com/736x/74/04/f0/7404f0b39fb71f96221af7b618a9939f.jpg",
      originalPrice: 250000,
      discountedPrice: 175000,
    },
    {
      id: 2,
      title: "Facial Basic Silver",
      level: "Silver",
      type: "member",
      active: true,
      description: "Perawatan wajah dasar dengan harga terjangkau.",
      image:
        "https://i.pinimg.com/736x/94/98/b5/9498b5a5340b7b9e3df881ddd3ea0905.jpg",
      originalPrice: 150000,
      discountedPrice: 120000,
    },
    {
      id: 3,
      title: "Promo Bronze Cleansing",
      level: "Bronze",
      type: "member",
      active: true,
      description: "Cleansing wajah ringan untuk pemula.",
      image:
        "https://i.pinimg.com/736x/b1/58/d9/b158d9e4c2136e7ecbbe61417f33d051.jpg",
      originalPrice: 100000,
      discountedPrice: 85000,
    },
  ];

  const memberPromos = promos.filter(
    (promo) => promo.type === "member" && promo.active
  );

  const largePromo = memberPromos.find(
    (promo) =>
      promo.level &&
      (promo.level.includes("Gold") || promo.level.includes("Platinum"))
  );

  const smallPromos = memberPromos.filter(
    (promo) => promo.id !== (largePromo?.id ?? null)
  );

  return (
    <div className="relative">
      {/* Background blur */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-70"
        style={{
          backgroundImage:
            "url('/treatment.jpeg')",
        }}
      />
      <div className="relative py-16 px-4 sm:px-6 lg:px-20 z-10">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-center text-gray-800 mb-3">
          Our Special Offers for Members
        </h1>
        <p className="text-center text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-12">
          Unlock exclusive beauty experiences with our limited-time promotions.
          Discover your path to radiant confidence. Explore now.
        </p>

        {/* Promo Grid */}
        {memberPromos.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Kiri - Promo kecil (2 kolom dalam 1 grid-item) */}
            <div className="flex flex-col space-y-6 col-span-2">
              {smallPromos.map((promo) => (
                <div
                  key={promo.id}
                  className="bg-white border border-gray-300 rounded-md shadow-md overflow-hidden flex"
                >
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-1/3 object-cover h-full"
                  />
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h2 className="text-md font-semibold text-gray-800 mb-1">
                        {promo.title}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {promo.description}
                      </p>
                      <div className="mt-2">
                        <p className="text-xs text-indigo-600 font-medium mb-1">
                          Member Level: {promo.level}
                        </p>
                        <p className="text-sm text-gray-500 line-through">
                          Rp {promo.originalPrice.toLocaleString("id-ID")}
                        </p>
                        <p className="text-base text-pink-600 font-bold">
                          Rp {promo.discountedPrice.toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Kanan - Promo besar */}
            {largePromo && (
              <div className="bg-white border border-gray-300 rounded-md shadow-md overflow-hidden flex flex-col">
                <img
                  src={largePromo.image}
                  alt={largePromo.title}
                  className="w-full object-cover h-80"
                />
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                      {largePromo.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {largePromo.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-indigo-600 font-medium mb-1">
                      Member Level: {largePromo.level}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      Rp {largePromo.originalPrice.toLocaleString("id-ID")}
                    </p>
                    <p className="text-lg text-pink-600 font-bold">
                      Rp {largePromo.discountedPrice.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            Belum ada promo member yang tersedia saat ini.
          </p>
        )}
      </div>
    </div>
  );
}
