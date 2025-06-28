import React, { createContext, useContext, useState, useEffect } from "react";

// Buat Context
const PromoContext = createContext();

// Data dummy promo awal
const initialPromos = [
  {
    id: 1,
    title: "Diskon 10% untuk Member Silver",
    level: "Silver",
    description: "Dapatkan diskon 10% untuk semua layanan facial.",
    originalPrice: 150000,
    discountedPrice: 135000,
    active: true,
    image: "https://via.placeholder.com/200x150?text=Silver",
    type: "member",
  },
  {
    id: 2,
    title: "Gratis Konsultasi Umum",
    level: "Umum",
    description: "Konsultasi dokter gratis untuk semua pengunjung.",
    originalPrice: 100000,
    discountedPrice: 0,
    active: true,
    image: "https://via.placeholder.com/200x150?text=Umum",
    type: "umum",
  },
  {
    id: 3,
    title: "Advanced Yellow Laser",
    level: "Gold",
    description: "Perawatan laser khusus untuk Gold member.",
    originalPrice: 250000,
    discountedPrice: 175000,
    active: true,
    image: "https://via.placeholder.com/200x150?text=Gold",
    type: "member",
  },
  {
    id: 4,
    title: "CO2 Acne Scar",
    level: "Platinum",
    description: "Perawatan wajah khusus untuk mengatasi bekas jerawat.",
    originalPrice: 300000,
    discountedPrice: 210000,
    active: true,
    image: "https://via.placeholder.com/200x150?text=Platinum",
    type: "member",
  },
];

export const PromoProvider = ({ children }) => {
  const [promos, setPromos] = useState(initialPromos);

  // Tambah promo
  const addPromo = (newPromo) => {
    const promoWithId = { ...newPromo, id: Date.now() };
    setPromos((prev) => [...prev, promoWithId]);
  };

  // Hapus promo
  const deletePromo = (id) => {
    setPromos((prev) => prev.filter((promo) => promo.id !== id));
  };

  // Update promo (untuk fitur edit)
  const updatePromo = (updatedPromo) => {
    setPromos((prev) =>
      prev.map((promo) => (promo.id === updatedPromo.id ? updatedPromo : promo))
    );
  };

  return (
    <PromoContext.Provider
      value={{ promos, setPromos, addPromo, deletePromo, updatePromo }}
    >
      {children}
    </PromoContext.Provider>
  );
};

export const usePromos = () => useContext(PromoContext);
