import React, { useState } from "react";

const initialFaqs = [
  {
    kategori: "Perawatan Kulit",
    pertanyaan: "Apa itu facial dan manfaatnya?",
    jawaban: "Facial adalah perawatan kulit wajah untuk membersihkan pori-pori, mengangkat sel kulit mati, dan meremajakan kulit.",
  },
  {
    kategori: "Panduan Layanan",
    pertanyaan: "Bagaimana cara melakukan pemesanan layanan di Aira Skin?",
    jawaban: "Anda dapat memesan layanan melalui aplikasi dengan mengisi formulir pemesanan dan memilih jadwal.",
  },
];

export default function AdminFAQ() {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    kategori: "",
    pertanyaan: "",
    jawaban: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedFaqs = [...faqs];
      updatedFaqs[editingIndex] = formData;
      setFaqs(updatedFaqs);
      setEditingIndex(null);
    } else {
      setFaqs([...faqs, formData]);
    }
    setFormData({ kategori: "", pertanyaan: "", jawaban: "" });
  };

  const handleEdit = (index) => {
    setFormData(faqs[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = faqs.filter((_, i) => i !== index);
    setFaqs(filtered);
    if (editingIndex === index) {
      setEditingIndex(null);
      setFormData({ kategori: "", pertanyaan: "", jawaban: "" });
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Manajemen FAQ - Admin</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <select
          name="kategori"
          value={formData.kategori}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Pilih Kategori</option>
          <option value="Perawatan Kulit">Perawatan Kulit</option>
          <option value="Panduan Layanan">Panduan Layanan</option>
        </select>

        <input
          type="text"
          name="pertanyaan"
          placeholder="Pertanyaan"
          value={formData.pertanyaan}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="jawaban"
          placeholder="Jawaban"
          value={formData.jawaban}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-maroon text-white px-6 py-2 rounded hover:bg-[#822828]"
        >
          {editingIndex !== null ? "Simpan Perubahan" : "Tambah FAQ"}
        </button>
      </form>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-sm bg-white"
          >
            <p className="font-bold text-maroon">{faq.pertanyaan}</p>
            <p className="text-sm text-gray-700">{faq.jawaban}</p>
            <p className="text-xs italic text-gray-500">
              Kategori: {faq.kategori}
            </p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
