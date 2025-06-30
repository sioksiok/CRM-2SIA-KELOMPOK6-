import React, { useState } from "react";

// 25 Dummy produk dengan gambar dari picsum.photos
const produkList = [
  {
    id: "P001",
    nama: "Sabun Wajah Aira",
    harga: 75000,
    gambar: "https://i.pinimg.com/736x/40/19/f0/4019f0ecc970788a2ec656f951db2e42.jpg",
  },
  {
    id: "P002",
    nama: "Toner Brightening",
    harga: 85000,
    gambar: "https://i.pinimg.com/736x/09/29/6d/09296d626de27a2f0df92865ab33a8c1.jpg",
  },
  {
    id: "P003",
    nama: "Serum Vitamin C",
    harga: 120000,
    gambar: "https://i.pinimg.com/736x/33/5d/38/335d38ef8060261040c8a4051619b0f1.jpg",
  },
  {
    id: "P004",
    nama: "Moisturizer Aira",
    harga: 95000,
    gambar: "https://i.pinimg.com/736x/11/4b/f3/114bf34a177d177890902907e21d3362.jpg",
  },
  {
    id: "P005",
    nama: "Sunscreen SPF 50",
    harga: 100000,
    gambar: "https://i.pinimg.com/736x/b0/39/e8/b039e86588b2cf8cf3c6aaf5fb573949.jpg",
  },
  {
    id: "P006",
    nama: "Facial Wash Gel",
    harga: 80000,
    gambar: "https://i.pinimg.com/736x/4b/36/2d/4b362d81423cb408279917951808c67a.jpg",
  },
  {
    id: "P007",
    nama: "Night Cream",
    harga: 110000,
    gambar: "https://i.pinimg.com/736x/93/9c/08/939c08535fe433ad3dbbf53f09a43891.jpg",
  },
  {
    id: "P008",
    nama: "Day Cream",
    harga: 105000,
    gambar: "https://i.pinimg.com/736x/1f/69/e2/1f69e2fbbf7b8ea8aadbbf20b94dca24.jpg",
  },
  {
    id: "P009",
    nama: "Eye Cream",
    harga: 115000,
    gambar: "https://i.pinimg.com/736x/0b/17/b7/0b17b7cfadab0c9b1e84ac4bc9d28e61.jpg",
  },
  {
    id: "P010",
    nama: "Masker Lumpur",
    harga: 70000,
    gambar: "https://i.pinimg.com/736x/07/e8/1a/07e81a1f8dff91ceb494b380919fe8a4.jpg",
  },
  {
    id: "P011",
    nama: "Acne Spot Gel",
    harga: 85000,
    gambar: "https://i.pinimg.com/736x/3d/04/db/3d04dbd2c521bea996167f33a4dcfc97.jpg",
  },
  {
    id: "P012",
    nama: "Cleansing Oil",
    harga: 90000,
    gambar: "https://i.pinimg.com/736x/f0/d5/52/f0d552399bb6d3f3507661265b8c6e6f.jpg",
  },
  {
    id: "P013",
    nama: "Exfoliating Toner",
    harga: 95000,
    gambar: "https://i.pinimg.com/736x/6b/75/08/6b7508153453f802a2e07b856b3393d5.jpg",
  },
  {
    id: "P014",
    nama: "Hydrating Essence",
    harga: 110000,
    gambar: "https://i.pinimg.com/736x/de/e7/0b/dee70bffb6937e87fc696b6d64065488.jpg",
  },
  {
    id: "P015",
    nama: "Lip Balm",
    harga: 50000,
    gambar: "https://i.pinimg.com/736x/ac/bb/68/acbb68716560a8f81333400da7f3cd6c.jpg",
  },
  {
    id: "P016",
    nama: "Face Mist",
    harga: 80000,
    gambar: "https://i.pinimg.com/736x/07/61/b1/0761b134524ef90a3be07aa01b97c3a7.jpg",
  },
  {
    id: "P017",
    nama: "Brightening Mask",
    harga: 88000,
    gambar: "https://i.pinimg.com/736x/23/7a/27/237a272d06428cde3ae3df09da5eb2be.jpg",
  },
  {
    id: "P018",
    nama: "Anti Aging Cream",
    harga: 130000,
    gambar: "https://i.pinimg.com/736x/84/82/d8/8482d86e4168ffd6a76f89a70e950cc0.jpg",
  },
  {
    id: "P019",
    nama: "Peeling Gel",
    harga: 78000,
    gambar: "https://i.pinimg.com/736x/68/89/c9/6889c92b837c0d0ca018398141e954e5.jpg",
  },
  {
    id: "P020",
    nama: "Whitening Lotion",
    harga: 95000,
    gambar: "https://i.pinimg.com/736x/82/57/42/82574229808eeabda99901a44eb7d014.jpg",
  },
  {
    id: "P021",
    nama: "Body Scrub",
    harga: 88000,
    gambar: "https://i.pinimg.com/736x/4d/4b/17/4d4b17f9fabcfbfe7d1d7614f17f0e10.jpg",
  },
  {
    id: "P022",
    nama: "Hair Tonic",
    harga: 99000,
    gambar: "https://i.pinimg.com/736x/cf/dc/98/cfdc987ab0088b531bb57e3de552f011.jpg",
  },
  {
    id: "P023",
    nama: "Foot Cream",
    harga: 70000,
    gambar: "https://i.pinimg.com/736x/63/28/b0/6328b0ce45d7ad04af913cd8aa1dee36.jpg",
  },
  {
    id: "P024",
    nama: "Hand Cream",
    harga: 68000,
    gambar: "https://i.pinimg.com/736x/75/bf/9c/75bf9c68757b8ae63885be0fecd5af95.jpg",
  },
  {
    id: "P025",
    nama: "Makeup Remover",
    harga: 85000,
    gambar: "https://i.pinimg.com/736x/f5/42/65/f5426567e2ea29f262fc284fc95a9d8c.jpg",
  },
];

export default function PemesananProduk() {
  const [nama, setNama] = useState("");
  const [produkDipilih, setProdukDipilih] = useState("");
  const [catatan, setCatatan] = useState("");
  const [histori, setHistori] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !produkDipilih) {
      alert("Lengkapi semua data terlebih dahulu.");
      return;
    }

    const item = produkList.find((i) => i.id === produkDipilih);
    const dataBaru = {
      nama,
      produk: item.nama,
      harga: item.harga,
      catatan,
      tanggal: new Date().toLocaleString(),
    };

    setHistori([dataBaru, ...histori]);
    setNama("");
    setProdukDipilih("");
    setCatatan("");
  };

  return (
    <div className="relative min-h-screen py-10 px-6 lg:px-20 overflow-hidden">
      {/* Background transparan */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
        style={{ backgroundImage: "url('/treatment.jpeg')" }}
      />

      {/* Konten utama */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow-lg font-serif tracking-wide">
          Katalog & Pemesanan Produk Aira
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Katalog Produk */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {produkList.map((item) => (
              <div key={item.id} className="text-white text-center">
                <img
                  src={item.gambar}
                  alt={item.nama}
                  className="w-full h-32 object-cover rounded-lg mb-2 shadow-md"
                />
                <h4 className="text-sm font-semibold drop-shadow">{item.nama}</h4>
                <p className="text-sm drop-shadow">Rp{item.harga.toLocaleString()}</p>
              </div>
            ))}
          </div>

          {/* Formulir Pemesanan */}
          <div className="bg-white bg-opacity-90 border border-[#800000] rounded-2xl shadow-lg p-6 h-fit">
            <h3 className="text-xl font-bold text-[#800000] mb-4 text-center">
              Form Pemesanan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold text-[#800000]">Nama</label>
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-[#800000]"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#800000]">Pilih Produk</label>
                <select
                  value={produkDipilih}
                  onChange={(e) => setProdukDipilih(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-[#800000]"
                >
                  <option value="">-- Pilih Produk --</option>
                  {produkList.map((item) => (
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
                  placeholder="Contoh: minta bubble wrap"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold bg-[#800000] text-white hover:bg-[#990000] transition"
              >
                Pesan Sekarang
              </button>
            </form>

            {/* Riwayat Pemesanan */}
            <div className="mt-6">
              <h4 className="text-md font-bold text-[#800000] mb-2 text-center">
                Riwayat Pemesanan
              </h4>
              {histori.length === 0 ? (
                <p className="text-[#800000] text-sm text-center">
                  Belum ada pemesanan.
                </p>
              ) : (
                <ul className="space-y-3 max-h-64 overflow-y-auto pr-1">
                  {histori.map((item, index) => (
                    <li
                      key={index}
                      className="p-3 rounded-xl border border-[#800000] bg-[#fff0f0] text-sm"
                    >
                      <p><strong>Nama:</strong> {item.nama}</p>
                      <p><strong>Produk:</strong> {item.produk}</p>
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
      </div>
    </div>
  );
}
