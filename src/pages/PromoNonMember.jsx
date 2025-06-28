import React from "react";
import { usePromos } from "../context/PromoContext";

export default function PromoNonMember() {
  const { promos } = usePromos();

  const publicPromos = promos.filter(
    (promo) => promo.type === "umum" && promo.active
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Promo Umum</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publicPromos.map((promo) => (
          <div
            key={promo.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{promo.title}</h3>
              <p className="text-sm text-gray-600">{promo.description}</p>
              <p className="text-sm text-gray-500 line-through mt-2">
                Rp {promo.originalPrice.toLocaleString("id-ID")}
              </p>
              <p className="text-base text-pink-600 font-semibold">
                Rp {promo.discountedPrice.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
