import React, { useState } from "react";

const initialPromos = [
  {
    id: 1,
    title: "Diskon 10% untuk Member Silver",
    level: "Silver",
    description: "Dapatkan diskon 10% untuk semua layanan facial.",
    originalPrice: 150000,
    discountedPrice: 135000,
    active: true,
    image: "", // Tidak ada gambar awal
  },
  {
    id: 2,
    title: "Gratis Konsultasi Member Gold",
    level: "Gold",
    description: "Konsultasi dokter gratis untuk semua layanan.",
    originalPrice: 100000,
    discountedPrice: 0,
    active: true,
    image: "", // Tidak ada gambar awal
  },
];

export default function ManagePromoAdmin() {
  const [promos, setPromos] = useState(initialPromos);
  const [form, setForm] = useState({
    title: "",
    level: "Bronze",
    description: "",
    originalPrice: "",
    discountedPrice: "",
    active: true,
    image: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl);
        setForm({ ...form, image: imageUrl });
      }
    } else {
      setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    }
  };

  const handleAdd = () => {
    if (
      !form.title ||
      !form.description ||
      !form.originalPrice ||
      !form.discountedPrice
    ) {
      alert("Semua field wajib diisi!");
      return;
    }

    const newPromo = {
      id: promos.length + 1,
      ...form,
      originalPrice: parseInt(form.originalPrice),
      discountedPrice: parseInt(form.discountedPrice),
    };

    setPromos([...promos, newPromo]);

    setForm({
      title: "",
      level: "Bronze",
      description: "",
      originalPrice: "",
      discountedPrice: "",
      active: true,
      image: "",
    });

    setImagePreview(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus promo ini?")) {
      setPromos(promos.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-red-800">Kelola Promo Member</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-3 text-red-800">Tambah Promo Baru</h2>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Judul Promo"
          className="w-full p-2 mb-2 border rounded"
        />
        <select
          name="level"
          value={form.level}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        >
          <option value="Bronze">Bronze</option>
          <option value="Silver">Silver</option>
          <option value="Gold">Gold</option>
          <option value="Platinum">Platinum</option>
        </select>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Deskripsi Promo"
          className="w-full p-2 mb-2 border rounded"
        ></textarea>
        <div className="flex space-x-4 mb-2">
          <input
            type="number"
            name="originalPrice"
            value={form.originalPrice}
            onChange={handleChange}
            placeholder="Harga Awal (Rp)"
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="number"
            name="discountedPrice"
            value={form.discountedPrice}
            onChange={handleChange}
            placeholder="Harga Diskon (Rp)"
            className="w-1/2 p-2 border rounded"
          />
        </div>

        {/* Input gambar */}
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="mb-2"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mb-2 w-32 h-32 object-cover rounded"
          />
        )}

        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            name="active"
            checked={form.active}
            onChange={handleChange}
            className="mr-2"
          />
          Aktif
        </label>
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-900"
        >
          Simpan Promo
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4 text-red-800">Daftar Promo</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Gambar</th>
              <th className="p-2 text-left">Judul</th>
              <th className="p-2 text-left">Level</th>
              <th className="p-2 text-left">Deskripsi</th>
              <th className="p-2 text-right">Harga Awal</th>
              <th className="p-2 text-right">Harga Promo</th>
              <th className="p-2 text-center">Status</th>
              <th className="p-2 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {promos.map((promo) => (
              <tr key={promo.id} className="border-t hover:bg-gray-50">
                <td className="p-2">
                  {promo.image ? (
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm italic">Tidak ada</span>
                  )}
                </td>
                <td className="p-2">{promo.title}</td>
                <td className="p-2">{promo.level}</td>
                <td className="p-2">{promo.description}</td>
                <td className="p-2 text-right line-through text-gray-500">
                  Rp {promo.originalPrice.toLocaleString("id-ID")}
                </td>
                <td className="p-2 text-right font-bold text-pink-600">
                  Rp {promo.discountedPrice.toLocaleString("id-ID")}
                </td>
                <td className="p-2 text-center">
                  {promo.active ? (
                    <span className="text-green-600 font-semibold">Aktif</span>
                  ) : (
                    <span className="text-red-500 font-semibold">Tidak Aktif</span>
                  )}
                </td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => handleDelete(promo.id)}
                    className="text-red-600 hover:underline"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {promos.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  Belum ada promo yang ditambahkan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
