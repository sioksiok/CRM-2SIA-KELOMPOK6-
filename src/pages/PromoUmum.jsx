import React from "react";

const promoUmum = [
  {
    id: 1,
    judul: "Diskon 20% untuk Semua Perawatan!",
    deskripsi:
      "Nikmati diskon 20% untuk semua perawatan kecantikan di salon kami selama bulan Juni 2025. Promo berlaku untuk pelanggan umum (non-member).",
    tanggalMulai: "2025-06-01",
    tanggalSelesai: "2025-06-30",
    gambar:
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    judul: "Gratis Konsultasi Kulit",
    deskripsi:
      "Dapatkan layanan konsultasi kulit GRATIS dengan terapis profesional kami. Promo khusus untuk non-member yang ingin mulai perawatan.",
    tanggalMulai: "2025-05-20",
    tanggalSelesai: "2025-07-01",
    gambar:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    judul: "Paket Facial Basic Rp 99.000",
    deskripsi:
      "Coba paket facial basic dengan harga spesial Rp 99.000 saja. Perawatan lengkap untuk membuat kulitmu segar dan bercahaya.",
    tanggalMulai: "2025-06-05",
    tanggalSelesai: "2025-06-25",
    gambar:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=60",
  },
];

export default function PromoUmum() {
  return (
    <div
      className="min-h-screen p-8 flex flex-col items-center"
      style={{ backgroundColor: "#800000" }}
    >
      <div
        className="max-w-4xl w-full rounded-3xl p-8 shadow-xl"
        style={{
          backgroundColor: "#fff0f0",
          border: "2px solid #800000",
          boxShadow:
            "0 10px 15px -3px rgba(128,0,0,0.5), 0 4px 6px -2px rgba(128,0,0,0.3)",
        }}
      >
        <h1
          className="text-3xl font-extrabold mb-8 text-center font-serif"
          style={{ color: "#800000", textShadow: "1px 1px 2px rgba(128,0,0,0.4)" }}
        >
          Promo Umum (Non-Member)
        </h1>

        {promoUmum.length === 0 ? (
          <p
            className="text-center"
            style={{ color: "#800000", opacity: 0.7, fontWeight: "600" }}
          >
            Saat ini belum ada promo untuk non-member.
          </p>
        ) : (
          <div className="space-y-8">
            {promoUmum.map((promo) => (
              <div
                key={promo.id}
                className="rounded-2xl p-6 shadow-inner font-sans flex flex-col md:flex-row gap-6 items-center"
                style={{
                  backgroundColor: "#fff0f0",
                  border: "1.5px solid #800000",
                  color: "#800000",
                  boxShadow: "inset 0 0 10px rgba(128,0,0,0.15)",
                }}
              >
                <img
                  src={promo.gambar}
                  alt={promo.judul}
                  className="w-full md:w-48 h-36 object-cover rounded-xl shadow-md flex-shrink-0"
                />
                <div>
                  <h2 className="text-xl font-semibold mb-2">{promo.judul}</h2>
                  <p className="mb-3">{promo.deskripsi}</p>
                  <div className="text-sm font-semibold" style={{ opacity: 0.7 }}>
                    Periode: {promo.tanggalMulai} sampai {promo.tanggalSelesai}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
