
import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function PemesananLayanan() {
  const [nama, setNama] = useState("");
  const [layananDipilih, setLayananDipilih] = useState("");
  const [catatan, setCatatan] = useState("");
  const [histori, setHistori] = useState([]);
  const [layananList, setLayananList] = useState([]); // State untuk daftar layanan dari Supabase
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil daftar layanan dari Supabase
  useEffect(() => {
    async function getLayanan() {
      setLoading(true);
      const { data, error } = await supabase
        .from("layanan") // Nama tabel layanan Anda
        .select("id, nama, harga");

      if (error) {
        console.error("Error fetching layanan:", error.message);
        setError("Gagal memuat daftar layanan.");
      } else {
        setLayananList(data);
      }
      setLoading(false);
    }

    getLayanan();
  }, []); // [] berarti efek ini hanya berjalan sekali saat komponen dimuat

  // Fungsi untuk mengambil riwayat pemesanan dari Supabase
  useEffect(() => {
    async function getHistoriPemesanan() {
      setLoading(true);
      const { data, error } = await supabase
        .from("pemesanan") // Nama tabel pemesanan Anda
        .select("nama_pelanggan, nama_layanan, harga_layanan, catatan, tanggal_pemesanan")
        .order("tanggal_pemesanan", { ascending: false }); // Urutkan dari yang terbaru

      if (error) {
        console.error("Error fetching histori:", error.message);
        setError("Gagal memuat riwayat pemesanan.");
      } else {
        // Sesuaikan nama field agar cocok dengan struktur histori Anda sebelumnya
        const formattedHistori = data.map(item => ({
          nama: item.nama_pelanggan,
          layanan: item.nama_layanan,
          harga: item.harga_layanan,
          catatan: item.catatan,
          tanggal: new Date(item.tanggal_pemesanan).toLocaleString(),
        }));
        setHistori(formattedHistori);
      }
      setLoading(false);
    }

    getHistoriPemesanan();
  }, []); // [] berarti efek ini hanya berjalan sekali saat komponen dimuat

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama || !layananDipilih) {
      alert("Lengkapi semua data terlebih dahulu.");
      return;
    }

    const item = layananList.find((i) => i.id === layananDipilih);
    if (!item) {
      alert("Layanan tidak ditemukan.");
      return;
    }

    // Data yang akan disimpan ke Supabase
    const dataBaru = {
      nama_pelanggan: nama,
      id_layanan: item.id, // ID layanan dari tabel layanan
      nama_layanan: item.nama, // Nama layanan (denormalized)
      harga_layanan: item.harga, // Harga layanan (denormalized)
      catatan: catatan,
      // tanggal_pemesanan akan diisi otomatis oleh default value di Supabase
    };

    setLoading(true);
    const { error } = await supabase
      .from("pemesanan") // Nama tabel pemesanan Anda
      .insert([dataBaru]);

    if (error) {
      console.error("Error inserting data:", error.message);
      setError("Gagal menyimpan pemesanan.");
    } else {
      alert("Pemesanan berhasil!");
      // Setelah berhasil menyimpan, ambil ulang riwayat untuk memperbarui tampilan
      const { data: updatedHistori, error: historiError } = await supabase
        .from("pemesanan")
        .select("nama_pelanggan, nama_layanan, harga_layanan, catatan, tanggal_pemesanan")
        .order("tanggal_pemesanan", { ascending: false });

      if (historiError) {
        console.error("Error fetching updated histori:", historiError.message);
        setError("Gagal memperbarui riwayat pemesanan.");
      } else {
        const formattedUpdatedHistori = updatedHistori.map(item => ({
          nama: item.nama_pelanggan,
          layanan: item.nama_layanan,
          harga: item.harga_layanan,
          catatan: item.catatan,
          tanggal: new Date(item.tanggal_pemesanan).toLocaleString(),
        }));
        setHistori(formattedUpdatedHistori);
      }

      // Reset form
      setNama("");
      setLayananDipilih("");
      setCatatan("");
    }
    setLoading(false);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Memuat...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

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
            disabled={loading} // Nonaktifkan tombol saat loading
          >
            {loading ? "Memproses..." : "Pesan Layanan"}
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
                  key={index} // Gunakan index sebagai key, atau lebih baik lagi jika ada ID unik dari Supabase
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