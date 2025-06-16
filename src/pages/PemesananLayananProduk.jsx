import React, { useState } from "react";

const layananList = [
  { id: "L001", nama: "Facial Glow Up", harga: 150000 },
  { id: "L002", nama: "Laser Treatment", harga: 300000 },
  { id: "L003", nama: "Chemical Peeling", harga: 250000 },
];

const produkList = [
  { id: "P001", nama: "Sabun Wajah Aira", harga: 75000 },
  { id: "P002", nama: "Toner Brightening", harga: 85000 },
  { id: "P003", nama: "Sunscreen SPF 50+", harga: 100000 },
];

export default function PemesananItem() {
  const [nama, setNama] = useState("");
  const [jenis, setJenis] = useState("");
  const [itemDipilih, setItemDipilih] = useState("");
  const [catatan, setCatatan] = useState("");
  const [histori, setHistori] = useState([]);

  const getItemList = () => {
    return jenis === "layanan" ? layananList : produkList;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !jenis || !itemDipilih) {
      alert("Lengkapi semua data terlebih dahulu.");
      return;
    }

    const item = getItemList().find((i) => i.id === itemDipilih);
    const dataBaru = {
      nama,
      jenis,
      item: item.nama,
      harga: item.harga,
      catatan,
      tanggal: new Date().toLocaleString(),
    };

    setHistori([dataBaru, ...histori]);
    setNama("");
    setJenis("");
    setItemDipilih("");
    setCatatan("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        background: `linear-gradient(135deg, #800000 0%, #800000 100%)`,
      }}
    >
      <div
        className="w-full max-w-3xl rounded-3xl p-8"
        style={{
          backgroundColor: "#fff0f0",
          border: "2px solid #800000",
          boxShadow:
            "0 10px 15px -3px rgba(128,0,0,0.5), 0 4px 6px -2px rgba(128,0,0,0.3)",
        }}
      >
        <h2
          className="text-3xl font-extrabold mb-6 text-center font-serif"
          style={{
            color: "#800000",
            textShadow: "1px 1px 2px rgba(128,0,0,0.4)",
          }}
        >
          Formulir Pemesanan Layanan & Produk
        </h2>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-maroon">Nama Pelanggan</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full px-4 py-2 rounded-2xl border"
              style={{
                border: "1.5px solid #800000",
                backgroundColor: "#fff",
                color: "#800000",
              }}
              placeholder="Masukkan nama"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1 text-maroon">Jenis Pesanan</label>
            <select
              value={jenis}
              onChange={(e) => {
                setJenis(e.target.value);
                setItemDipilih("");
              }}
              className="w-full px-4 py-2 rounded-2xl"
              style={{
                border: "1.5px solid #800000",
                backgroundColor: "#fff",
                color: "#800000",
              }}
            >
              <option value="">-- Pilih Jenis --</option>
              <option value="layanan">Layanan</option>
              <option value="produk">Produk</option>
            </select>
          </div>

          {jenis && (
            <div className="mb-4">
              <label className="block font-semibold mb-1 text-maroon">Pilih {jenis}</label>
              <select
                value={itemDipilih}
                onChange={(e) => setItemDipilih(e.target.value)}
                className="w-full px-4 py-2 rounded-2xl"
                style={{
                  border: "1.5px solid #800000",
                  backgroundColor: "#fff",
                  color: "#800000",
                }}
              >
                <option value="">-- Pilih {jenis} --</option>
                {getItemList().map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nama} - Rp{item.harga.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="mb-4">
            <label className="block font-semibold mb-1 text-maroon">Catatan (Opsional)</label>
            <textarea
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className="w-full px-4 py-2 rounded-2xl"
              style={{
                border: "1.5px solid #800000",
                backgroundColor: "#fff",
                color: "#800000",
              }}
              placeholder="Contoh: kemasan besar"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl font-semibold transition active:scale-95"
            style={{
              backgroundColor: "#800000",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(128,0,0,0.5)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#990000")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#800000")}
          >
            Pesan Sekarang
          </button>
        </form>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-maroon">Histori Pemesanan</h3>
          {histori.length === 0 ? (
            <p className="text-maroon opacity-70 font-medium">
              Belum ada pemesanan.
            </p>
          ) : (
            <ul className="space-y-4">
              {histori.map((item, index) => (
                <li
                  key={index}
                  className="rounded-2xl p-4 shadow-inner"
                  style={{
                    backgroundColor: "#fff0f0",
                    border: "1.5px solid #800000",
                    color: "#800000",
                    boxShadow: "inset 0 0 10px rgba(128,0,0,0.15)",
                  }}
                >
                  <p><strong>Nama:</strong> {item.nama}</p>
                  <p><strong>Jenis:</strong> {item.jenis}</p>
                  <p><strong>{item.jenis === "layanan" ? "Layanan" : "Produk"}:</strong> {item.item}</p>
                  <p><strong>Harga:</strong> Rp{item.harga.toLocaleString()}</p>
                  <p><strong>Tanggal:</strong> {item.tanggal}</p>
                  {item.catatan && <p><strong>Catatan:</strong> {item.catatan}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <style>{`
        .text-maroon {
          color: #800000;
        }
      `}</style>
    </div>
  );
}
