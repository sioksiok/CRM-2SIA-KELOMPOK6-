import React, { createContext, useState, useContext } from "react";

// Membuat Context
const PromoContext = createContext();

// Data promo awal
const initialPromos = [
  {
    id: 1,
    title: "Diskon 10% untuk Member Silver",
    level: "Silver",
    description: "Dapatkan diskon 10% untuk semua layanan facial.",
    originalPrice: 150000,
    discountedPrice: 135000,
    active: true,
    image: "",
    type: "member"
  },
  {
    id: 2,
    title: "Gratis Konsultasi Umum",
    level: "Umum",
    description: "Konsultasi dokter gratis untuk semua pengunjung.",
    originalPrice: 100000,
    discountedPrice: 0,
    active: true,
    image: "https://example.com/promo_umum.jpg",
    type: "umum"
  },
  {
    id: 3,
    title: "Advanced Yellow Laser",
    level: "Gold",
    description: "Explore therapeutic benefits of hand massages...",
    originalPrice: 250000,
    discountedPrice: 175000,
    active: true,
    image: "https://cdn0-production-images-kly.akamaized.net/TFXhZ5fAer2iNHyJIk_EA9-oW44=/500x281/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3447308/original/076990400_1620103503-photo-1570172619644-dfd03ed5d881.jpeg",
    type: "member"
  },
  {
    id: 4,
    title: "Ultimate Eye Peel",
    level: "Silver",
    description: "Dive into the world of hair treatment...",
    originalPrice: 200000,
    discountedPrice: 145000,
    active: true,
    image: "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/ZbontmHR7NPLXxj_Q36GA/original/085539400_1639129436-Prosedur_Radiofrequency_Setrika_Wajah_untuk_Perawatan_Kulit.jpg",
    type: "member"
  },
  {
    id: 5,
    title: "CO2 Acne Scar",
    level: "Platinum",
    description: "Embark on a journey of relaxation...",
    originalPrice: 300000,
    discountedPrice: 210000,
    active: true,
    image: "https://i0.wp.com/zaloraadmin.wpcomstaging.com/wp-content/uploads/2023/11/treatment-wajah.png?resize=1200%2C620&ssl=1",
    type: "member"
  },
  {
    id: 6,
    title: "Acne Injection",
    level: "Gold & Platinum",
    description: "Dive into the world of facial massages...",
    originalPrice: 220000,
    discountedPrice: 150000,
    active: true,
    image: "https://blog.atome.id/wp-content/uploads/2021/11/Simak-10-Perawatan-Kulit-Wajah-Yang-Populer-Dan-Kekinian.jpg",
    type: "member"
  },
];

// Provider
export const PromoProvider = ({ children }) => {
  const [promos, setPromos] = useState(initialPromos);

  const addPromo = (newPromo) => {
    const promoWithId = { ...newPromo, id: Date.now() };
    setPromos((prev) => [...prev, promoWithId]);
  };

  const deletePromo = (id) => {
    setPromos((prev) => prev.filter((promo) => promo.id !== id));
  };

  return (
    <PromoContext.Provider value={{ promos, addPromo, deletePromo }}>
      {children}
    </PromoContext.Provider>
  );
};

// Hook custom
export const usePromos = () => useContext(PromoContext);
