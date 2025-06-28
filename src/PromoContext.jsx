// src/context/PromoContext.js
import React, { createContext, useState, useContext } from 'react';

// Membuat Context
const PromoContext = createContext();

// Data promo awal (bisa kosong atau diisi dengan data dummy)
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
    type: "member" // Tambahkan tipe promo
  },
  {
    id: 2,
    title: "Gratis Konsultasi Umum",
    level: "Umum", // Bisa juga menggunakan 'level' 'Umum' atau biarkan kosong jika tidak relevan
    description: "Konsultasi dokter gratis untuk semua pengunjung.",
    originalPrice: 100000,
    discountedPrice: 0,
    active: true,
    image: "https://example.com/promo_umum.jpg", // Contoh gambar untuk promo umum
    type: "umum" // Tambahkan tipe promo
  },
  // Tambahkan data promo member dari promoMember.js ke sini
  {
    id: 3,
    title: "Advanced Yellow Laser",
    level: "Gold",
    description: "Explore the therapeutic benefits of hand massages and how they can alleviate tension and stress. Learn simple techniques to treat your hands to some well-deserved TLC.",
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
    description: "Dive into the world of hair treatment and discover effective ways to revitalize and maintain your hair’s natural beauty. From deep conditioning to scalp massage, we’ll guide you to the perfect hair care routine.",
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
    description: "Embark on a journey of relaxation and rejuvenation with body massages. Uncover the physical and mental benefits of this timeless practice, from relieving muscle tension to reducing stress.",
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
    description: "Dive into the world of facial massages and the rejuvenating effects of eye masks. Discover how these skincare rituals can enhance your natural beauty, reduce puffiness.",
    originalPrice: 220000,
    discountedPrice: 150000,
    active: true,
    image: "https://blog.atome.id/wp-content/uploads/2021/11/Simak-10-Perawatan-Kulit-Wajah-Yang-Populer-Dan-Kekinian.jpg",
    type: "member"
  },
];


// Membuat PromoProvider untuk menyediakan data promo ke komponen lain
export const PromoProvider = ({ children }) => {
  const [promos, setPromos] = useState(initialPromos);

  const addPromo = (newPromo) => {
    // Tambahkan id unik yang lebih robust
    const promoWithId = { ...newPromo, id: Date.now() }; // Menggunakan timestamp sebagai ID
    setPromos((prevPromos) => [...prevPromos, promoWithId]);
  };

  const deletePromo = (id) => {
    setPromos((prevPromos) => prevPromos.filter((promo) => promo.id !== id));
  };

  // Anda bisa menambahkan fungsi untuk update promo juga jika diperlukan

  return (
    <PromoContext.Provider value={{ promos, addPromo, deletePromo }}>
      {children}
    </PromoContext.Provider>
  );
};

// Hook kustom untuk memudahkan penggunaan context
export const usePromos = () => useContext(PromoContext);