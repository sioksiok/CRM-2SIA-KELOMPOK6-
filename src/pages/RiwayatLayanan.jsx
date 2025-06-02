import React, { useState } from "react";
import { FaUserNurse, FaCalendarAlt, FaSpa, FaStickyNote } from "react-icons/fa";

const riwayatLayanan = [
  {
    id: 1,
    tanggal: "2025-05-18",
    jenisLayanan: "Facial Deep Cleansing",
    keterangan: "Kulit wajah menjadi lebih bersih dan segar.",
    terapis: "Lina Rahayu",
  },
  {
    id: 2,
    tanggal: "2025-04-30",
    jenisLayanan: "Laser Acne Scar Treatment",
    keterangan: "Bekas jerawat mulai memudar, kulit lebih halus.",
    terapis: "Dewi Sartika",
  },
  {
    id: 3,
    tanggal: "2025-04-10",
    jenisLayanan: "Chemical Peeling",
    keterangan: "Kulit tampak cerah dan merata setelah perawatan.",
    terapis: "Rina Marlina",
  },
];

export default function RiwayatLayanan() {
  const [filterTerapis, setFilterTerapis] = useState("");
  const [filterJenis, setFilterJenis] = useState("");

  const filteredRiwayat = riwayatLayanan.filter((item) => {
    const matchTerapis = item.terapis.toLowerCase().includes(filterTerapis.toLowerCase());
    const matchJenis = item.jenisLayanan.toLowerCase().includes(filterJenis.toLowerCase());
    return matchTerapis && matchJenis;
  });

  const highlightText = (text, keyword) => {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <mark key={i} style={{ backgroundColor: "#ffe6e6", color: "#800000" }}>
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const handleReset = () => {
    setFilterTerapis("");
    setFilterJenis("");
  };

  return (
    <div
      className="min-h-screen p-8 flex flex-col items-center"
      style={{ backgroundColor: "#800000" }}
    >
      <div
        className="max-w-4xl w-full rounded-3xl p-8 shadow-xl animate-fadeIn"
        style={{
          backgroundColor: "#fff0f0",
          border: "2px solid #800000",
          boxShadow:
            "0 10px 15px -3px rgba(128,0,0,0.5), 0 4px 6px -2px rgba(128,0,0,0.3)",
        }}
      >
        <h1
          className="text-3xl font-extrabold mb-3 text-center font-serif"
          style={{ color: "#800000", textShadow: "1px 1px 2px rgba(128,0,0,0.4)" }}
        >
          Riwayat Layanan CRM
        </h1>
        <p className="text-center text-sm mb-6" style={{ color: "#800000", opacity: 0.7 }}>
          Menampilkan {filteredRiwayat.length} dari {riwayatLayanan.length} layanan.
        </p>

        {/* Filter Input */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-8">
          <input
            type="text"
            placeholder="Filter berdasarkan terapis"
            value={filterTerapis}
            onChange={(e) => setFilterTerapis(e.target.value)}
            className="mb-4 sm:mb-0 px-5 py-3 rounded-2xl font-medium shadow-sm transition"
            style={{
              border: "1.5px solid #800000",
              backgroundColor: "#fff",
              color: "#800000",
              caretColor: "#800000",
            }}
          />
          <input
            type="text"
            placeholder="Filter berdasarkan jenis layanan"
            value={filterJenis}
            onChange={(e) => setFilterJenis(e.target.value)}
            className="px-5 py-3 rounded-2xl font-medium shadow-sm transition"
            style={{
              border: "1.5px solid #800000",
              backgroundColor: "#fff",
              color: "#800000",
              caretColor: "#800000",
            }}
          />
          <button
            onClick={handleReset}
            className="mt-4 sm:mt-0 px-6 py-3 rounded-2xl font-semibold shadow-md transition active:scale-95"
            style={{
              backgroundColor: "#800000",
              color: "#fff",
              marginLeft: "auto",
              boxShadow: "0 4px 10px rgba(128,0,0,0.5)",
            }}
          >
            Reset
          </button>
        </div>

        {/* List */}
        {filteredRiwayat.length === 0 ? (
          <p className="text-center" style={{ color: "#800000", opacity: 0.7, fontWeight: "600" }}>
            Tidak ada data riwayat layanan yang sesuai filter.
          </p>
        ) : (
          <div className="space-y-6">
            {filteredRiwayat.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl p-6 shadow-inner font-sans animate-fadeIn"
                style={{
                  backgroundColor: "#fff",
                  border: "1.5px solid #800000",
                  color: "#800000",
                  boxShadow: "inset 0 0 10px rgba(128,0,0,0.1)",
                }}
              >
                <div className="text-sm mb-2 flex items-center gap-2" style={{ fontWeight: 600 }}>
                  <FaCalendarAlt /> Tanggal: {item.tanggal}
                </div>
                <div className="flex items-center gap-2">
                  <FaSpa /> <strong>Jenis Layanan:</strong>{" "}
                  {highlightText(item.jenisLayanan, filterJenis)}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <FaStickyNote /> <strong>Keterangan:</strong> {item.keterangan}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <FaUserNurse /> <strong>Terapis:</strong>{" "}
                  {highlightText(item.terapis, filterTerapis)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}