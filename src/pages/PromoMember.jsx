
import React from "react";
// PERBAIKAN JALUR IMPORT DI SINI
import { usePromos } from '../context/PromoContext'; // Jika PromoMember.jsx di src/pages dan PromoContext.js di src/context
// Atau jika PromoContext.js di src/context/PromoContext.js dan PromoMember.jsx di src/pages/PromoMember.jsx
// Anda mungkin perlu: import { usePromos } from '../../context/PromoContext';
// Mari kita asumsikan struktur standar: src/pages dan src/context

export default function PromoMember() {
  const { promos } = usePromos();

  // Filter hanya promo yang bertipe 'member' dan aktif
  const memberPromos = promos.filter(promo => promo.type === 'member' && promo.active);

  // Jika Anda ingin memisahkan promo besar di kolom kanan, Anda bisa lakukan seperti ini:
  const largePromo = memberPromos.find(promo => promo.level && (promo.level.includes("Gold") || promo.level.includes("Platinum")));
  const smallPromos = memberPromos.filter(promo => promo.id !== (largePromo ? largePromo.id : null));

  return (
    <div className="relative">
      {/* Background foto dengan opacity 70% */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-70"
        style={{ backgroundImage: "url('/treatment1.jpg')" }}
      ></div>

      {/* Konten utama */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-20 z-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-center text-gray-800 mb-3">
          Our Special Offers for Members
        </h1>
        <p className="text-center text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-12">
          Unlock exclusive beauty experiences with our limited-time promotions.
          Discover your path to radiant confidence. Explore now.
        </p>

        {memberPromos.length > 0 ? (
          <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto">
            {/* Kolom Kiri */}
            <div className="flex flex-col space-y-6">
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
                      <p className="text-sm text-gray-600 mb-1">
                        {promo.description}
                      </p>
                    </div>
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
              ))}
            </div>

            {/* Kolom Kanan */}
            {largePromo && (
              <div className="row-span-3 bg-white border border-gray-300 rounded-md shadow-md overflow-hidden flex flex-col">
                <img
                  src={largePromo.image}
                  alt={largePromo.title}
                  className="h-72 w-full object-cover"
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
          <p className="text-center text-gray-600 text-lg">Belum ada promo member yang tersedia saat ini.</p>
        )}
      </div>
    </div>
  );
}