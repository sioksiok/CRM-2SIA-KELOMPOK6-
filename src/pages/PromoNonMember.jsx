import React from "react";
import { usePromo } from "../PromoContext";

export default function PromoNonMember() {
  const { promoUmum } = usePromo();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Promo Umum</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {promoUmum.map((promo) => (
          <div key={promo.id} className="border p-4 rounded shadow">
            {promo.image && <img src={promo.image} className="h-32 w-full object-cover rounded mb-2" />}
            <h2 className="font-semibold">{promo.title}</h2>
            <p className="text-sm">{promo.description}</p>
            <p className="text-sm line-through text-gray-500">Rp {promo.originalPrice}</p>
            <p className="text-green-600 font-bold">Rp {promo.discountedPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
