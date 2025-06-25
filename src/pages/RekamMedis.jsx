import React, { useState } from "react";
import { FaNotesMedical, FaUserMd, FaStethoscope, FaCalendarAlt } from "react-icons/fa";

export default function RekamMedis() {
  const [rekamMedis, setRekamMedis] = useState([
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
  ]);

  const [filterTerapis, setFilterTerapis] = useState("");
  const [filterTanggal, setFilterTanggal] = useState("");
  const [newEntry, setNewEntry] = useState({
    tanggal: "",
    keluhan: "",
    perawatan: "",
    hasil: "",
    terapis: "",
  });

  const filteredData = rekamMedis.filter((item) => {
    const matchTerapis = item.terapis.toLowerCase().includes(filterTerapis.toLowerCase());
    const matchTanggal = filterTanggal ? item.tanggal === filterTanggal : true;
    return matchTerapis && matchTanggal;
  });

  const handleAddRekamMedis = () => {
    if (
      !newEntry.tanggal ||
      !newEntry.keluhan ||
      !newEntry.perawatan ||
      !newEntry.hasil ||
      !newEntry.terapis
    ) {
      alert("Mohon lengkapi semua data rekam medis.");
      return;
    }

    const newData = {
      ...newEntry,
      id: rekamMedis.length + 1,
    };
    setRekamMedis([...rekamMedis, newData]);
    setNewEntry({
      tanggal: "",
      keluhan: "",
      perawatan: "",
      hasil: "",
      terapis: "",
    });
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center" style={{ backgroundColor: "#800000" }}>
      <div
        className="max-w-4xl w-full rounded-3xl p-8 shadow-xl"
        style={{
          backgroundColor: "#fff0f0",
          border: "2px solid #800000",
          boxShadow: "0 10px 15px -3px rgba(128,0,0,0.5), 0 4px 6px -2px rgba(128,0,0,0.3)",
        }}
      >
        <h1 className="text-3xl font-extrabold mb-8 text-center font-serif flex items-center justify-center gap-3"
          style={{ color: "#800000", textShadow: "1px 1px 2px rgba(128,0,0,0.4)" }}
        >
          <FaNotesMedical className="text-4xl" />
          Riwayat Perawatan Kecantikan
        </h1>

        {/* Form Input Rekam Medis */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { label: "Tanggal", name: "tanggal", type: "date" },
            { label: "Keluhan", name: "keluhan" },
            { label: "Perawatan", name: "perawatan" },
            { label: "Hasil", name: "hasil" },
            { label: "Terapis", name: "terapis" },
          ].map(({ label, name, type = "text" }) => (
            <div key={name}>
              <label className="block mb-1 text-sm font-semibold text-[#800000]">{label}</label>
              <input
                type={type}
                name={name}
                value={newEntry[name]}
                onChange={(e) => setNewEntry({ ...newEntry, [name]: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border shadow-sm"
                style={{ borderColor: "#800000", backgroundColor: "#fff" }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleAddRekamMedis}
          className="w-full py-3 rounded-2xl font-semibold transition active:scale-95"
          style={{
            backgroundColor: "#800000",
            color: "#fff",
            boxShadow: "0 4px 10px rgba(128,0,0,0.5)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#990000")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#800000")}
        >
          Simpan Rekam Medis
        </button>

        {/* Filter Inputs */}
        <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 mb-8">
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
        </div>
        
        {/* List Data */}
        {filteredData.length === 0 ? (
          <p className="text-center" style={{ color: "#800000", opacity: 0.7, fontWeight: "600" }}>
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
