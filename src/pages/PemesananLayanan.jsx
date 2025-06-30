// PemesananLayanan.jsx
import React, { useState } from "react";

const layananList = [
  { id: "L001", nama: "Facial Glow Up", harga: 150000 },
  { id: "L002", nama: "Laser Treatment", harga: 300000 },
  { id: "L003", nama: "Chemical Peeling", harga: 250000 },
];

export default function PemesananLayanan() {
  const [nama, setNama] = useState("");
  const [layananDipilih, setLayananDipilih] = useState("");
  const [catatan, setCatatan] = useState("");
  const [histori, setHistori] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !layananDipilih) {
      alert("Lengkapi semua data terlebih dahulu.");
      return;
    }

    const item = layananList.find((i) => i.id === layananDipilih);
    const dataBaru = {
      nama,
      layanan: item.nama,
      harga: item.harga,
      catatan,
      tanggal: new Date().toLocaleString(),
    };

    setHistori([dataBaru, ...histori]);
    setNama("");
    setLayananDipilih("");
    setCatatan("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-[#fce8e8]">
      <div className="w-full max-w-xl rounded-3xl p-8 border border-[#800000] shadow-lg bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#800000] font-serif">
          Pemesanan Layanan Aira
        </h2>

        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <div>
            <label className="block font-semibold text-[#800000]">Nama</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-[#800000]"
              placeholder="Masukkan nama"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#800000]">Pilih Layanan</label>
            <select
              value={layananDipilih}
              onChange={(e) => setLayananDipilih(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-[#800000]"
            >
              <option value="">-- Pilih Layanan --</option>
              {layananList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nama} - Rp{item.harga.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-[#800000]">Catatan</label>
            <textarea
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-[#800000]"
              placeholder="Contoh: kulit sensitif"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-[#800000] text-white hover:bg-[#990000] transition"
          >
            Pesan Layanan
          </button>
        </form>

        <div className="mt-6">
          <h3 className="text-lg font-bold text-[#800000] mb-3">Riwayat Pemesanan</h3>
          {histori.length === 0 ? (
            <p className="text-[#800000]">Belum ada pemesanan.</p>
          ) : (
            <ul className="space-y-3">
              {histori.map((item, index) => (
                <li
                  key={index}
                  className="p-4 rounded-xl border border-[#800000] bg-[#fff0f0]"
                >
                  <p><strong>Nama:</strong> {item.nama}</p>
                  <p><strong>Layanan:</strong> {item.layanan}</p>
                  <p><strong>Harga:</strong> Rp{item.harga.toLocaleString()}</p>
                  <p><strong>Tanggal:</strong> {item.tanggal}</p>
                  {item.catatan && <p><strong>Catatan:</strong> {item.catatan}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
