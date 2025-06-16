import React, { useState } from "react";

const initialCustomers = [
  { id: 1, name: "Budi Santoso", email: "budi@mail.com", phone: "081234567890", active: true },
  { id: 2, name: "Siti Aminah", email: "siti@mail.com", phone: "089876543210", active: false },
  { id: 3, name: "Andi Wijaya", email: "andi@mail.com", phone: "081299988877", active: true },
];

export default function CustomerManagement() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", active: true });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddCustomer = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Semua field wajib diisi!");
      return;
    }
    const newCustomer = {
      id: customers.length + 1,
      ...formData,
    };
    setCustomers([...customers, newCustomer]);
    setFormData({ name: "", email: "", phone: "", active: true });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus pelanggan ini?")) {
      setCustomers(customers.filter((c) => c.id !== id));
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
            <label htmlFor="activeCheckbox" className="font-semibold text-[#800000]">Aktif</label>
          </div>
          <button
            onClick={handleAddCustomer}
            className="px-4 py-2 bg-[#800000] text-white rounded hover:bg-[#a00000] transition"
          >
            Simpan
          </button>
        </div>
      )}

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
    </div>
  );
}
