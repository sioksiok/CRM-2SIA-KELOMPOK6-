
import React, { useState } from "react";
import { usePromos } from "../context/PromoContext";
import { useNavigate } from "react-router-dom"; 

export default function ManagePromoAdmin() {
  const { promos, addPromo, deletePromo } = usePromos();
  const navigate = useNavigate(); 

  const [form, setForm] = useState({
    title: "",
    level: "Bronze",
    description: "",
    originalPrice: "",
    discountedPrice: "",
    active: true,
    image: "",
    type: "member",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

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

  const resetForm = () => {
    setForm({
      title: "",
      level: "Bronze",
      description: "",
      originalPrice: "",
      discountedPrice: "",
      active: true,
      image: "",
      type: "member",
    });
    setImagePreview(null);
    setIsEditing(false);
    setEditId(null);
  };

  const handleAdd = () => {
    if (!form.title || !form.description || !form.originalPrice || !form.discountedPrice) {
      alert("Semua field wajib diisi!");
      return;
    }

    const newPromo = {
      ...form,
      id: Date.now(),
      originalPrice: parseInt(form.originalPrice),
      discountedPrice: parseInt(form.discountedPrice),
    };

    addPromo(newPromo);
    resetForm();
  };

  const handleEdit = (promo) => {
    setForm({
      title: promo.title,
      level: promo.level,
      description: promo.description,
      originalPrice: promo.originalPrice,
      discountedPrice: promo.discountedPrice,
      active: promo.active,
      image: promo.image,
      type: promo.type || "member",
    });
    setImagePreview(promo.image || null);
    setEditId(promo.id);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    if (!form.title || !form.description || !form.originalPrice || !form.discountedPrice) {
      alert("Semua field wajib diisi!");
      return;
    }

    const updatedPromo = {
      ...form,
      id: editId,
      originalPrice: parseInt(form.originalPrice),
      discountedPrice: parseInt(form.discountedPrice),
    };

    deletePromo(editId);
    addPromo(updatedPromo);
    resetForm();
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus promo ini?")) {
      deletePromo(id);
    }
  };

  const memberPromos = promos.filter((p) => p.type === "member");

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-red-800">Kelola Promo Member</h1>
        <button
          onClick={() => navigate("/kelola-promo-umum")}
          className="px-4 py-2 rounded-2xl font-semibold transition active:scale-95"
          style={{
            backgroundColor: "#800000",
            color: "#fff",
            boxShadow: "0 4px 10px rgba(128,0,0,0.5)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#990000")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#800000")}
        >
          Kelola Promo Umum
        </button>
      </div>

      {/* Form Tambah/Edit Promo */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-3 text-red-800">
          {isEditing ? "Edit Promo Member" : "Tambah Promo Baru (Member)"}
        </h2>
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
        />
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
        <input type="file" accept="image/*" onChange={handleChange} className="mb-2" />
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="mb-2 w-32 h-32 object-cover rounded" />
        )}
        <label className="flex items-center mb-2">
          <input type="checkbox" name="active" checked={form.active} onChange={handleChange} className="mr-2" />
          Aktif
        </label>
        <div className="space-x-2">
          {isEditing ? (
            <>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
              >
                Update Promo
              </button>
              <button
                onClick={resetForm}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Batal
              </button>
            </>
          ) : (
            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-900"
            >
              Simpan Promo
            </button>
          )}
        </div>
      </div>

      {/* Tabel Promo */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4 text-red-800">Daftar Promo Member</h2>
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
            {memberPromos.map((promo) => (
              <tr key={promo.id} className="border-t hover:bg-gray-50">
                <td className="p-2">
                  {promo.image ? (
                    <img src={promo.image} alt={promo.title} className="w-16 h-16 object-cover rounded" />
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
                <td className="p-2 text-center space-x-2">
                  <button
                    onClick={() => handleDelete(promo.id)}
                    className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
                  >
                    Hapus
                  </button>
                  <button
                    onClick={() => handleEdit(promo)}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
            {memberPromos.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  Belum ada promo member yang ditambahkan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
