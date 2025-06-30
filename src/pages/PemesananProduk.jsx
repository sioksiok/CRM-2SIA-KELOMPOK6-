
import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function PemesananProduk() {
  const [nama, setNama] = useState("");
  const [produkDipilih, setProdukDipilih] = useState("");
  const [catatan, setCatatan] = useState("");
  const [histori, setHistori] = useState([]);
  const [produkList, setProdukList] = useState([]); // State untuk daftar produk dari Supabase
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil daftar produk dari Supabase
  useEffect(() => {
    async function getProduk() {
      setLoading(true);
      const { data, error } = await supabase
        .from("produk") // Nama tabel produk Anda
        .select("id, nama, harga, gambar");

      if (error) {
        console.error("Error fetching produk:", error.message);
        setError("Gagal memuat daftar produk.");
      } else {
        setProdukList(data);
      }
      setLoading(false);
    }

    getProduk();
  }, []); // [] berarti efek ini hanya berjalan sekali saat komponen dimuat

  // Fungsi untuk mengambil riwayat pemesanan produk dari Supabase
  useEffect(() => {
    async function getHistoriPemesananProduk() {
      setLoading(true);
      const { data, error } = await supabase
        .from("pemesanan_produk") // Nama tabel pemesanan produk Anda
        .select("nama_pelanggan, nama_produk, harga_produk, catatan, tanggal_pemesanan")
        .order("tanggal_pemesanan", { ascending: false }); // Urutkan dari yang terbaru

      if (error) {
        console.error("Error fetching histori produk:", error.message);
        setError("Gagal memuat riwayat pemesanan produk.");
      } else {
        // Sesuaikan nama field agar cocok dengan struktur histori Anda sebelumnya
        const formattedHistori = data.map(item => ({
          nama: item.nama_pelanggan,
          produk: item.nama_produk,
          harga: item.harga_produk,
          catatan: item.catatan,
          tanggal: new Date(item.tanggal_pemesanan).toLocaleString(),
        }));
        setHistori(formattedHistori);
      }
      setLoading(false);
    }

    getHistoriPemesananProduk();
  }, []); // [] berarti efek ini hanya berjalan sekali saat komponen dimuat

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama || !produkDipilih) {
      alert("Lengkapi semua data terlebih dahulu.");
      return;
    }

    const item = produkList.find((i) => i.id === produkDipilih);
    if (!item) {
      alert("Produk tidak ditemukan.");
      return;
    }

    // Data yang akan disimpan ke Supabase
    const dataBaru = {
      nama_pelanggan: nama,
      id_produk: item.id, // ID produk dari tabel produk
      nama_produk: item.nama, // Nama produk (denormalized)
      harga_produk: item.harga, // Harga produk (denormalized)
      catatan: catatan,
      // tanggal_pemesanan akan diisi otomatis oleh default value di Supabase
    };

    setLoading(true);
    const { error } = await supabase
      .from("pemesanan_produk") // Nama tabel pemesanan produk Anda
      .insert([dataBaru]);

    if (error) {
      console.error("Error inserting data:", error.message);
      setError("Gagal menyimpan pemesanan produk.");
    } else {
      alert("Pemesanan produk berhasil!");
      // Setelah berhasil menyimpan, ambil ulang riwayat untuk memperbarui tampilan
      const { data: updatedHistori, error: historiError } = await supabase
        .from("pemesanan_produk")
        .select("nama_pelanggan, nama_produk, harga_produk, catatan, tanggal_pemesanan")
        .order("tanggal_pemesanan", { ascending: false });

      if (historiError) {
        console.error("Error fetching updated histori:", historiError.message);
        setError("Gagal memperbarui riwayat pemesanan.");
      } else {
        const formattedUpdatedHistori = updatedHistori.map(item => ({
          nama: item.nama_pelanggan,
          produk: item.nama_produk,
          harga: item.harga_produk,
          catatan: item.catatan,
          tanggal: new Date(item.tanggal_pemesanan).toLocaleString(),
        }));
        setHistori(formattedUpdatedHistori);
      }

      // Reset form
      setNama("");
      setProdukDipilih("");
      setCatatan("");
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fce8e8]">
        Memuat data produk dan riwayat pemesanan...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 bg-[#fce8e8]">
        Terjadi kesalahan: {error}
      </div>
    );
  }

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
                disabled={loading} // Nonaktifkan tombol saat loading
              >
                {loading ? "Memproses..." : "Pesan Sekarang"}
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
                      key={index} // Idealnya gunakan ID unik dari Supabase sebagai key
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