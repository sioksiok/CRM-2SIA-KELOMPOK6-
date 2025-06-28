import React, { useState } from "react";
import { usePromo } from "../PromoContext";

export default function KelolaPromoUmum() {
  const { promoUmum, addPromoUmum } = usePromo();

  const [form, setForm] = useState({
    title: "",
    description: "",
    originalPrice: "",
    discountedPrice: "",
    image: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

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
      id: Date.now(),
      ...form,
      originalPrice: parseInt(form.originalPrice),
      discountedPrice: parseInt(form.discountedPrice),
    };

    addPromoUmum(newPromo); // disimpan ke context global

    setForm({
      title: "",
      description: "",
      originalPrice: "",
      discountedPrice: "",
      image: "",
    });
    setImagePreview(null);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-10 px-4"
      style={{
        background: "linear-gradient(135deg, #800000 0%, #800000 100%)",
      }}
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
        <h1
          className="text-3xl font-extrabold mb-6 text-center font-serif"
          style={{
            color: "#800000",
            textShadow: "1px 1px 2px rgba(128,0,0,0.4)",
          }}
        >
          Kelola Promo Umum
        </h1>

        {/* Form Tambah */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-maroon">Tambah Promo</h2>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Judul Promo"
            className="w-full px-4 py-2 mb-3 rounded-2xl border"
            style={{
              border: "1.5px solid #800000",
              backgroundColor: "#fff",
              color: "#800000",
            }}
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Deskripsi"
            className="w-full px-4 py-2 mb-3 rounded-2xl"
            style={{
              border: "1.5px solid #800000",
              backgroundColor: "#fff",
              color: "#800000",
            }}
          />
          <div className="flex space-x-4 mb-3">
            <input
              type="number"
              name="originalPrice"
              value={form.originalPrice}
              onChange={handleChange}
              placeholder="Harga Awal"
              className="w-1/2 px-4 py-2 rounded-2xl border"
              style={{
                border: "1.5px solid #800000",
                backgroundColor: "#fff",
                color: "#800000",
              }}
            />
            <input
              type="number"
              name="discountedPrice"
              value={form.discountedPrice}
              onChange={handleChange}
              placeholder="Harga Promo"
              className="w-1/2 px-4 py-2 rounded-2xl border"
              style={{
                border: "1.5px solid #800000",
                backgroundColor: "#fff",
                color: "#800000",
              }}
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
          <button
            onClick={handleAdd}
            className="w-full py-3 rounded-2xl font-semibold transition active:scale-95"
            style={{
              backgroundColor: "#800000",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(128,0,0,0.5)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#990000")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#800000")
            }
          >
            Simpan Promo
          </button>
        </div>

        {/* Daftar Promo */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-maroon">
            Daftar Promo Umum
          </h2>
          <div className="space-y-4">
            {promoUmum.length === 0 ? (
              <p className="text-maroon opacity-70 font-medium">
                Belum ada promo.
              </p>
            ) : (
              promoUmum.map((promo) => (
                <div
                  key={promo.id}
                  className="flex space-x-4 border rounded-2xl p-4 items-center shadow-inner"
                  style={{
                    backgroundColor: "#fff",
                    border: "1.5px solid #800000",
                    boxShadow: "inset 0 0 10px rgba(128,0,0,0.1)",
                  }}
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
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
