
import React, { useState, useEffect } from "react";
import { useFaqs } from "../FaqContext"; // Sesuaikan path jika FaqContext.js ada di folder lain

export default function AdminFAQ() {
  // Ambil state dan fungsi dari Context
  const { faqs, addFaq, updateFaq, deleteFaq } = useFaqs();

  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    kategori: "",
    pertanyaan: "",
    jawaban: "",
  });

  // Saat mode edit, isi form dengan data FAQ yang diedit
  useEffect(() => {
    if (editingIndex !== null) {
      setFormData(faqs[editingIndex]);
    } else {
      setFormData({ kategori: "", pertanyaan: "", jawaban: "" }); // Reset form saat tidak dalam mode edit
    }
  }, [editingIndex, faqs]); // Tambahkan faqs sebagai dependency untuk memastikan data terbaru

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      updateFaq(editingIndex, formData); // Gunakan fungsi update dari Context
      setEditingIndex(null);
    } else {
      addFaq(formData); // Gunakan fungsi add dari Context
    }
    setFormData({ kategori: "", pertanyaan: "", jawaban: "" }); // Reset form setelah submit
  };

  const handleEdit = (index) => {
    setFormData(faqs[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    deleteFaq(index); // Gunakan fungsi delete dari Context
    if (editingIndex === index) {
      setEditingIndex(null);
      setFormData({ kategori: "", pertanyaan: "", jawaban: "" });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        background: `linear-gradient(135deg, #800000 0%, #800000 100%)`,
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
          Manajemen FAQ - Admin
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 mb-10">
          <select
            name="kategori"
            value={formData.kategori}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-2xl"
            style={{
              border: "1.5px solid #800000",
              backgroundColor: "#fff",
              color: "#800000",
            }}
            required
          >
            <option value="">Pilih Kategori</option>
            <option value="Perawatan Kulit">Perawatan Kulit</option>
            <option value="Panduan Layanan">Panduan Layanan</option>
            {/* Tambahkan kategori lain jika diperlukan */}
          </select>

          <input
            type="text"
            name="pertanyaan"
            placeholder="Pertanyaan"
            value={formData.pertanyaan}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-2xl"
            style={{
              border: "1.5px solid #800000",
              backgroundColor: "#fff",
              color: "#800000",
            }}
            required
          />

          <textarea
            name="jawaban"
            placeholder="Jawaban"
            value={formData.jawaban}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-2xl"
            style={{
              border: "1.5px solid #800000",
              backgroundColor: "#fff",
              color: "#800000",
            }}
            required
          />

          <button
            type="submit"
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
            {editingIndex !== null ? "Simpan Perubahan" : "Tambah FAQ"}
          </button>
        </form>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 shadow-inner"
              style={{
                backgroundColor: "#fff",
                border: "1.5px solid #800000",
                color: "#800000",
              }}
            >
              <p className="font-bold">{faq.pertanyaan}</p>
              <p className="text-sm">{faq.jawaban}</p>
              <p className="text-xs italic">Kategori: {faq.kategori}</p>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="px-3 py-1 rounded-2xl font-semibold transition active:scale-95"
                  style={{
                    backgroundColor: "#FFD700",
                    color: "#800000",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-3 py-1 rounded-2xl font-semibold transition active:scale-95"
                  style={{
                    backgroundColor: "#990000",
                    color: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  }}
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}