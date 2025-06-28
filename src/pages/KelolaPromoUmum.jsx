import React, { useState, useEffect } from "react";
import { usePromos } from "../context/PromoContext";

export default function KelolaPromoUmum() {
  const { promos, setPromos } = usePromos();

  const [form, setForm] = useState({
    title: "",
    description: "",
    originalPrice: "",
    discountedPrice: "",
    image: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Perbarui image preview saat form.image berubah (untuk kasus edit)
    if (form.image) {
      setImagePreview(form.image);
    } else {
      setImagePreview(null);
    }
  }, [form.image]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl);
        setForm({ ...form, image: imageUrl });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      originalPrice: "",
      discountedPrice: "",
      image: "",
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
      id: Date.now(),
      ...form,
      type: "umum",
      active: true,
      originalPrice: parseInt(form.originalPrice),
      discountedPrice: parseInt(form.discountedPrice),
    };

    setPromos((prev) => [...prev, newPromo]);
    resetForm();
  };

  const handleEdit = (promo) => {
    setForm({
      title: promo.title,
      description: promo.description,
      originalPrice: promo.originalPrice.toString(),
      discountedPrice: promo.discountedPrice.toString(),
      image: promo.image,
    });
    setImagePreview(promo.image);
    setIsEditing(true);
    setEditId(promo.id);
  };

  const handleUpdate = () => {
    if (!form.title || !form.description || !form.originalPrice || !form.discountedPrice) {
      alert("Semua field wajib diisi!");
      return;
    }

    const updatedPromo = {
      id: editId,
      ...form,
      type: "umum",
      active: true,
      originalPrice: parseInt(form.originalPrice),
      discountedPrice: parseInt(form.discountedPrice),
    };

    setPromos((prev) =>
      prev.map((p) => (p.id === editId ? updatedPromo : p))
    );
    resetForm();
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus promo ini?")) {
      setPromos((prev) => prev.filter((p) => p.id !== id));
      if (editId === id) resetForm();
    }
  };

  const promoUmum = promos.filter((p) => p.type === "umum");

  return (
    <div
      className="min-h-screen flex items-center justify-center py-10 px-4"
      style={{ background: "linear-gradient(135deg, #800000 0%, #800000 100%)" }}
    >
      <div
        className="w-full max-w-4xl rounded-3xl p-8"
        style={{
          backgroundColor: "#fff0f0",
          border: "2px solid #800000",
          boxShadow:
            "0 10px 15px -3px rgba(128,0,0,0.5), 0 4px 6px -2px rgba(128,0,0,0.3)",
        }}
      >
        <h1 className="text-3xl font-extrabold mb-6 text-center font-serif text-maroon">
          Kelola Promo Umum
        </h1>

        {/* Form Tambah/Edit */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-maroon">
            {isEditing ? "Edit Promo" : "Tambah Promo"}
          </h2>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Judul Promo"
            className="w-full px-4 py-2 mb-3 rounded-2xl border border-maroon bg-white text-maroon"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Deskripsi"
            className="w-full px-4 py-2 mb-3 rounded-2xl border border-maroon bg-white text-maroon"
          />
          <div className="flex space-x-4 mb-3">
            <input
              type="number"
              name="originalPrice"
              value={form.originalPrice}
              onChange={handleChange}
              placeholder="Harga Awal"
              className="w-1/2 px-4 py-2 rounded-2xl border border-maroon bg-white text-maroon"
            />
            <input
              type="number"
              name="discountedPrice"
              value={form.discountedPrice}
              onChange={handleChange}
              placeholder="Harga Promo"
              className="w-1/2 px-4 py-2 rounded-2xl border border-maroon bg-white text-maroon"
            />
          </div>
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
              className="mb-2 w-32 h-32 object-cover rounded-lg border border-maroon"
            />
          )}
          <div className="space-x-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleUpdate}
                  className="w-full py-3 rounded-2xl font-semibold bg-yellow-600 text-white hover:bg-yellow-700 transition"
                >
                  Update Promo
                </button>
                <button
                  onClick={resetForm}
                  className="w-full mt-2 py-3 rounded-2xl font-semibold bg-gray-500 text-white hover:bg-gray-600 transition"
                >
                  Batal
                </button>
              </>
            ) : (
              <button
                onClick={handleAdd}
                className="w-full py-3 rounded-2xl font-semibold bg-maroon text-white hover:bg-red-700 transition"
              >
                Simpan Promo
              </button>
            )}
          </div>
        </div>

        {/* Daftar Promo */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-maroon">Daftar Promo Umum</h2>
          <div className="space-y-4">
            {promoUmum.length === 0 ? (
              <p className="text-maroon opacity-70 font-medium">
                Belum ada promo.
              </p>
            ) : (
              promoUmum.map((promo) => (
                <div
                  key={promo.id}
                  className="flex space-x-4 border rounded-2xl p-4 items-center shadow-inner border-maroon"
                >
                  {promo.image && (
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-24 h-24 object-cover rounded"
                    />
                  )}
                  <div className="flex-1 text-maroon">
                    <h3 className="text-lg font-bold">{promo.title}</h3>
                    <p className="text-sm text-gray-700">{promo.description}</p>
                    <p className="mt-1 text-gray-500 line-through">
                      Rp {promo.originalPrice.toLocaleString("id-ID")}
                    </p>
                    <p className="text-red-600 font-bold">
                      Rp {promo.discountedPrice.toLocaleString("id-ID")}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEdit(promo)}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(promo.id)}
                      className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
