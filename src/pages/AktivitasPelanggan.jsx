import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';

export default function AktivitasPelanggan() {
  const [activities, setActivities] = useState([]);
  const [form, setForm] = useState({
    nama: '',
    nomor: '',
    pesan: '',
    tanggal: ''
  });
  const [loading, setLoading] = useState(true); // State untuk loading data
  const [error, setError] = useState(null); // State untuk error

  // --- Fungsi untuk mengambil data aktivitas dari Supabase ---
  const fetchActivities = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('customer_activities') // Nama tabel Anda
        .select('*')
        .order('tanggal', { ascending: false }); // Urutkan berdasarkan tanggal terbaru

      if (error) {
        throw error;
      }
      setActivities(data);
    } catch (err) {
      console.error("Error fetching activities:", err.message);
      setError("Gagal memuat data aktivitas. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  // Panggil fetchActivities saat komponen dimuat
  useEffect(() => {
    fetchActivities();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // --- Fungsi untuk menambah aktivitas ke Supabase ---
  const handleAdd = async () => {
    if (!form.nama || !form.nomor || !form.pesan || !form.tanggal) {
      alert("Semua field harus diisi!");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('customer_activities')
        .insert([form]) // Masukkan objek form langsung
        .select(); // Mengembalikan data yang baru ditambahkan

      if (error) {
        throw error;
      }
      // Tambahkan aktivitas baru ke state lokal
      setActivities((prev) => [...data, ...prev]); // Tambahkan di depan agar yang terbaru muncul di atas
      setForm({ nama: '', nomor: '', pesan: '', tanggal: '' }); // Reset form
    } catch (err) {
      console.error("Error adding activity:", err.message);
      alert("Gagal menambahkan aktivitas: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // --- Fungsi untuk menghapus aktivitas dari Supabase ---
  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus aktivitas ini?")) {
      setLoading(true);
      try {
        const { error } = await supabase
          .from('customer_activities')
          .delete()
          .eq('id', id); // Hapus baris di mana 'id' sama dengan 'id' yang diberikan

        if (error) {
          throw error;
        }
        // Hapus aktivitas dari state lokal
        setActivities(activities.filter((act) => act.id !== id));
      } catch (err) {
        console.error("Error deleting activity:", err.message);
        alert("Gagal menghapus aktivitas: " + err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const generateWaLink = (nomor, pesan) => {
    // Nomor WhatsApp biasanya harus dimulai dengan kode negara, contoh 628xxx
    // Pastikan input user sudah dalam format yang benar (misal: 62812...)
    return `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-[#800000] mb-4">
        Aktivitas Pelanggan (Reminder WhatsApp)
      </h1>

      <div className="bg-white p-4 rounded shadow mb-6 border border-[#800000]/20">
        <h2 className="text-lg font-semibold mb-3 text-[#800000]">Tambah Aktivitas</h2>
        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Nama Pelanggan"
          className="w-full p-2 mb-2 border rounded border-[#800000]/50 focus:outline-none focus:ring-2 focus:ring-[#800000]"
        />
        <input
          type="text"
          name="nomor"
          value={form.nomor}
          onChange={handleChange}
          placeholder="Nomor WhatsApp (contoh: 6281234567890)"
          className="w-full p-2 mb-2 border rounded border-[#800000]/50 focus:outline-none focus:ring-2 focus:ring-[#800000]"
        />
        <textarea
          name="pesan"
          value={form.pesan}
          onChange={handleChange}
          placeholder="Isi Pesan"
          className="w-full p-2 mb-2 border rounded border-[#800000]/50 focus:outline-none focus:ring-2 focus:ring-[#800000]"
          rows="3" // Berikan beberapa baris untuk textarea
        />
        <input
          type="date"
          name="tanggal"
          value={form.tanggal}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded border-[#800000]/50 focus:outline-none focus:ring-2 focus:ring-[#800000]"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-[#800000] text-white rounded hover:bg-[#660000] transition"
          disabled={loading} // Nonaktifkan tombol saat loading
        >
          {loading ? "Menyimpan..." : "Tambah Aktivitas"}
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow border border-[#800000]/20">
        <h2 className="text-lg font-semibold mb-4 text-[#800000]">Daftar Aktivitas</h2>
        {/* Menampilkan status loading atau error */}
        {loading && <p className="text-center text-gray-600 my-4">Memuat data aktivitas...</p>}
        {error && <p className="text-center text-red-600 my-4">{error}</p>}

        {/* Tampilkan tabel hanya jika tidak sedang loading dan tidak ada error */}
        {!loading && !error && (
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-[#f8f4f4]">
              <tr>
                <th className="p-2 text-left text-[#800000]">Nama</th>
                <th className="p-2 text-left text-[#800000]">Nomor WA</th>
                <th className="p-2 text-left text-[#800000]">Tanggal</th>
                <th className="p-2 text-left text-[#800000]">Pesan</th>
                <th className="p-2 text-center text-[#800000]">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((act) => (
                <tr key={act.id} className="border-t hover:bg-[#fdf3f3]">
                  <td className="p-2">{act.nama}</td>
                  <td className="p-2">{act.nomor}</td>
                  <td className="p-2">{act.tanggal}</td>
                  <td className="p-2">{act.pesan}</td>
                  <td className="p-2 text-center space-x-2">
                    <a
                      href={generateWaLink(act.nomor, act.pesan)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#800000] font-semibold hover:underline"
                    >
                      Kirim WA
                    </a>
                    <button
                      onClick={() => handleDelete(act.id)}
                      className="text-red-600 font-semibold hover:underline ml-2"
                      disabled={loading} // Nonaktifkan tombol saat loading
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {activities.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    Belum ada aktivitas tercatat.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}