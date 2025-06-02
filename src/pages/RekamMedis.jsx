import React, { useState } from "react";
import { FaNotesMedical, FaUserMd, FaStethoscope, FaCalendarAlt } from "react-icons/fa";

const rekamMedisKecantikan = [
  {
    id: 1,
    tanggal: "2025-05-18",
    keluhan: "Wajah kusam dan berminyak",
    perawatan: "Facial Deep Cleansing",
    hasil: "Kulit lebih bersih dan segar",
    terapis: "Lina Rahayu",
  },
  {
    id: 2,
    tanggal: "2025-04-30",
    keluhan: "Bekas jerawat membandel",
    perawatan: "Laser Acne Scar Treatment",
    hasil: "Perbaikan tekstur kulit mulai terlihat",
    terapis: "Dewi Sartika",
  },
  {
    id: 3,
    tanggal: "2025-04-10",
    keluhan: "Kulit kusam dan tidak merata",
    perawatan: "Chemical Peeling",
    hasil: "Kulit tampak lebih cerah setelah 3 hari",
    terapis: "Rina Marlina",
  },
];

export default function RekamMedis() {
  const [filterTerapis, setFilterTerapis] = useState("");
  const [filterTanggal, setFilterTanggal] = useState("");

  const filteredData = rekamMedisKecantikan.filter((item) => {
    const matchTerapis = item.terapis.toLowerCase().includes(filterTerapis.toLowerCase());
    const matchTanggal = filterTanggal ? item.tanggal === filterTanggal : true;
    return matchTerapis && matchTanggal;
  });

  const handleReset = () => {
    setFilterTerapis("");
    setFilterTanggal("");
  };

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
          className="text-3xl font-extrabold mb-8 text-center font-serif flex items-center justify-center gap-3"
          style={{ color: "#800000", textShadow: "1px 1px 2px rgba(128,0,0,0.4)" }}
        >
          <FaNotesMedical className="text-4xl" />
          Riwayat Perawatan Kecantikan
        </h1>

        {/* Filter Inputs */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-8">
          <input
            type="text"
            placeholder="Cari berdasarkan terapis"
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
            type="date"
            value={filterTanggal}
            onChange={(e) => setFilterTanggal(e.target.value)}
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
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#990000")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#800000")}
          >
            Reset Filter
          </button>
        </div>

        {/* List */}
        {filteredData.length === 0 ? (
          <p
            className="text-center"
            style={{ color: "#800000", opacity: 0.7, fontWeight: "600" }}
          >
            Belum ada rekam medis kecantikan untuk filter ini.
          </p>
        ) : (
          <div className="space-y-6">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl p-6 shadow-inner font-sans flex flex-col gap-2"
                style={{
                  backgroundColor: "#fff0f0",
                  border: "1.5px solid #800000",
                  color: "#800000",
                  boxShadow: "inset 0 0 10px rgba(128,0,0,0.15)",
                }}
              >
                <div className="text-sm mb-2 flex items-center gap-2">
                  <FaCalendarAlt /> Tanggal: {item.tanggal}
                </div>
                <div className="flex items-center gap-2">
                  <FaStethoscope /> <strong>Keluhan:</strong> {item.keluhan}
                </div>
                <div className="flex items-center gap-2">
                  <FaNotesMedical /> <strong>Jenis Perawatan:</strong> {item.perawatan}
                </div>
                <div className="flex items-center gap-2">
                  <FaNotesMedical /> <strong>Hasil / Catatan:</strong> {item.hasil}
                </div>
                <div className="flex items-center gap-2">
                  <FaUserMd /> <strong>Terapis:</strong> {item.terapis}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
