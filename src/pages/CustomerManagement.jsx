import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function CustomerManagement() {
  const [customers, setCustomers] = useState([]); // Mulai dengan array kosong, data akan diambil dari Supabase
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", active: true });
  const [loading, setLoading] = useState(true); // State untuk menunjukkan proses loading data
  const [error, setError] = useState(null); // State untuk menangani error

  // --- Fungsi untuk mengambil data pelanggan dari Supabase ---
  const fetchCustomers = async () => {
    setLoading(true); // Set loading ke true saat memulai fetch
    setError(null); // Reset error
    try {
      const { data, error } = await supabase
        .from('customers') // Nama tabel Anda di Supabase
        .select('*') // Ambil semua kolom
        .order('id', { ascending: true }); // Urutkan berdasarkan ID

      if (error) {
        throw error; // Lempar error jika ada
      }
      setCustomers(data); // Update state customers dengan data dari Supabase
    } catch (err) {
      console.error("Error fetching customers:", err.message);
      setError("Gagal memuat data pelanggan. Silakan coba lagi."); // Set pesan error untuk user
    } finally {
      setLoading(false); // Set loading ke false setelah fetch selesai (berhasil atau gagal)
    }
  };

  // Panggil fetchCustomers saat komponen dimuat pertama kali
  useEffect(() => {
    fetchCustomers();
  }, []); // Array dependensi kosong berarti hanya berjalan sekali setelah render pertama

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // --- Fungsi untuk menambah pelanggan ke Supabase ---
  const handleAddCustomer = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Semua field wajib diisi!");
      return;
    }

    setLoading(true); // Set loading ke true saat operasi tambah
    try {
      // Masukkan data baru ke tabel 'customers'
      const { data, error } = await supabase
        .from('customers')
        .insert([formData]) // Objek formData cocok dengan struktur tabel
        .select(); // Penting: mengembalikan data yang baru ditambahkan (termasuk ID dari Supabase)

      if (error) {
        throw error;
      }
      // Tambahkan pelanggan baru ke state lokal (data yang dikembalikan dari Supabase)
      setCustomers((prev) => [...prev, ...data]);
      setFormData({ name: "", email: "", phone: "", active: true }); // Reset form
      setShowForm(false); // Sembunyikan form
    } catch (err) {
      console.error("Error adding customer:", err.message);
      alert("Gagal menambahkan pelanggan: " + err.message);
    } finally {
      setLoading(false); // Set loading ke false setelah operasi selesai
    }
  };

  // --- Fungsi untuk menghapus pelanggan dari Supabase ---
  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus pelanggan ini?")) {
      setLoading(true); // Set loading ke true saat operasi hapus
      try {
        // Hapus baris dari tabel 'customers' berdasarkan ID
        const { error } = await supabase
          .from('customers')
          .delete()
          .eq('id', id); // Kondisi: di mana kolom 'id' sama dengan ID yang diberikan

        if (error) {
          throw error;
        }
        // Perbarui state lokal dengan menghapus pelanggan yang sesuai
        setCustomers(customers.filter((c) => c.id !== id));
      } catch (err) {
        console.error("Error deleting customer:", err.message);
        alert("Gagal menghapus pelanggan: " + err.message);
      } finally {
        setLoading(false); // Set loading ke false setelah operasi selesai
      }
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#800000]">Manajemen Pelanggan</h1>

      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="mb-4 px-5 py-2 rounded shadow font-medium transition text-white bg-[#800000] hover:bg-[#a00000]"
      >
        {showForm ? "Batal Tambah Pelanggan" : "Tambah Pelanggan"}
      </button>

      {showForm && (
        <div className="mb-6 p-5 border border-[#800000] rounded-lg bg-[#fff6f6] shadow">
          <div className="mb-3">
            <label className="block font-semibold mb-1 text-[#800000]">Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#800000]"
              placeholder="Nama pelanggan"
            />
          </div>
          <div className="mb-3">
            <label className="block font-semibold mb-1 text-[#800000]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#800000]"
              placeholder="Email pelanggan"
            />
          </div>
          <div className="mb-3">
            <label className="block font-semibold mb-1 text-[#800000]">Telepon</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#800000]"
              placeholder="Nomor telepon"
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="active"
              checked={formData.active}
              onChange={handleInputChange}
              id="activeCheckbox"
              className="mr-2"
            />
            <label htmlFor="activeCheckbox" className="font-semibold text-[#800000]">
              Aktif
            </label>
          </div>
          <button
            onClick={handleAddCustomer}
            className="px-4 py-2 bg-[#800000] text-white rounded hover:bg-[#a00000] transition"
            disabled={loading} // Nonaktifkan tombol saat loading
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      )}

      {/* Menampilkan status loading atau error */}
      {loading && <p className="text-center text-gray-600 mb-4">Memuat data...</p>}
      {error && <p className="text-center text-red-600 mb-4">{error}</p>}

      {/* Tampilkan tabel hanya jika tidak sedang loading dan tidak ada error */}
      {!loading && !error && (
        <div className="overflow-x-auto bg-white rounded shadow border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#800000] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">Nama</th>
                <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">Telepon</th>
                <th className="px-6 py-3 text-center text-sm font-semibold tracking-wider">Status</th>
                <th className="px-6 py-3 text-center text-sm font-semibold tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.map((cust) => (
                <tr key={cust.id} className="hover:bg-[#fff0f0]">
                  <td className="px-6 py-4">{cust.name}</td>
                  <td className="px-6 py-4">{cust.email}</td>
                  <td className="px-6 py-4">{cust.phone}</td>
                  <td className="px-6 py-4 text-center">
                    {cust.active ? (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Aktif
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        Tidak Aktif
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center space-x-3">
                    <button
                      className="text-[#800000] hover:underline font-medium"
                      onClick={() => alert("Fitur Edit belum tersedia")}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline font-medium"
                      onClick={() => handleDelete(cust.id)}
                      disabled={loading} // Nonaktifkan tombol saat loading
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {customers.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    Tidak ada data pelanggan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}