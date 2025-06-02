import React from "react";

const promoMember = [
  {
    id: 1,
    judul: "Facial Brightening",
    deskripsi: "Cashback 30% untuk Member Gold & Platinum",
    kategoriMember: "Gold & Platinum",
    hargaAwal: 250000,
    hargaPromo: 175000,
    tanggalMulai: "2025-06-01",
    tanggalSelesai: "2025-06-30",
    gambar:
      "https://cdn0-production-images-kly.akamaized.net/TFXhZ5fAer2iNHyJIk_EA9-oW44=/500x281/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3447308/original/076990400_1620103503-photo-1570172619644-dfd03ed5d881.jpeg",
  },
  {
    id: 2,
    judul: "Facial Premium",
    deskripsi: "Gratis 1x untuk Member Platinum",
    kategoriMember: "Platinum",
    hargaAwal: 300000,
    hargaPromo: 0,
    tanggalMulai: "2025-06-10",
    tanggalSelesai: "2025-06-30",
    gambar:
      "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/ZbontmHR7NPLXxj_Q36GA/original/085539400_1639129436-Prosedur_Radiofrequency_Setrika_Wajah_untuk_Perawatan_Kulit.jpg",
  },
  {
    id: 3,
    judul: "Treatment Detox Wajah",
    deskripsi: "Double point untuk semua transaksi",
    kategoriMember: "Semua Member",
    hargaAwal: 220000,
    hargaPromo: 180000,
    tanggalMulai: "2025-06-01",
    tanggalSelesai: "2025-06-25",
    gambar:
      "https://i0.wp.com/zaloraadmin.wpcomstaging.com/wp-content/uploads/2023/11/treatment-wajah.png?resize=1200%2C620&ssl=1",
  },
  {
    id: 4,
    judul: "Facial Acne Care",
    deskripsi: "Diskon 25% untuk Gold & Platinum",
    kategoriMember: "Gold & Platinum",
    hargaAwal: 270000,
    hargaPromo: 202500,
    tanggalMulai: "2025-06-05",
    tanggalSelesai: "2025-06-25",
    gambar:
      "https://blog.atome.id/wp-content/uploads/2021/11/Simak-10-Perawatan-Kulit-Wajah-Yang-Populer-Dan-Kekinian.jpg",
  },
  {
    id: 5,
    judul: "Peeling Glow Up",
    deskripsi: "Hanya untuk Member Silver ke atas",
    kategoriMember: "Silver, Gold, Platinum",
    hargaAwal: 200000,
    hargaPromo: 150000,
    tanggalMulai: "2025-06-03",
    tanggalSelesai: "2025-06-28",
    gambar:
      "https://aestheticmed.in/wp-content/uploads/2024/10/high-angle-woman-getting-prp-treatment-scaled.jpg",
  },
  {
    id: 6,
    judul: "Masker Collagen",
    deskripsi: "Diskon untuk Semua Member",
    kategoriMember: "Semua Member",
    hargaAwal: 180000,
    hargaPromo: 120000,
    tanggalMulai: "2025-06-01",
    tanggalSelesai: "2025-06-30",
    gambar:
      "https://mysaclinicbali.com/wp-content/uploads/2024/03/PRP-treatment-at-Mysa-Clinic-Bali-scaled.jpg",
  },
];

export default function PromoMember() {
  return (
    <div className="min-h-screen p-10" style={{ backgroundColor: "#800000" }}>
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Promo Khusus Member
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {promoMember.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <img
              src={promo.gambar}
              alt={promo.judul}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-[#800000] font-sans">
              <h2 className="text-lg font-bold mb-2">{promo.judul}</h2>
              <p className="text-sm mb-1">
                <span className="font-semibold">Kategori Member:</span>{" "}
                {promo.kategoriMember}
              </p>
              <p className="text-sm mb-2">{promo.deskripsi}</p>
              <div className="flex items-center space-x-3 mb-2">
                <span className="line-through text-gray-400 text-sm">
                  Rp{promo.hargaAwal.toLocaleString("id-ID")}
                </span>
                <span className="text-lg font-bold text-green-600">
                  {promo.hargaPromo > 0
                    ? `Rp${promo.hargaPromo.toLocaleString("id-ID")}`
                    : "Gratis!"}
                </span>
              </div>
              <p className="text-xs font-medium opacity-70">
                Berlaku: {promo.tanggalMulai} s.d. {promo.tanggalSelesai}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
