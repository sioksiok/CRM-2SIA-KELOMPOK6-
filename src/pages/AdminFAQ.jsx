
import React, { useState, useEffect } from "react";
import { useFaqs } from "../FaqContext.jsx";

export default function AdminFAQ() {
  // Ambil state dan fungsi dari Context, termasuk loading dan error
  const { faqs, addFaq, updateFaq, deleteFaq, loading, error } = useFaqs();

  const [editingFaqId, setEditingFaqId] = useState(null); // Ubah dari editingIndex ke editingFaqId
  const [formData, setFormData] = useState({
    kategori: "",
    pertanyaan: "",
    jawaban: "",
  });
  const [submitting, setSubmitting] = useState(false); // State untuk tombol submit

  // Saat mode edit, isi form dengan data FAQ yang diedit
  useEffect(() => {
    if (editingFaqId !== null) {
      // Cari FAQ berdasarkan ID, bukan index
      const faqToEdit = faqs.find(faq => faq.id === editingFaqId);
      if (faqToEdit) {
        setFormData(faqToEdit);
      }
    } else {
      setFormData({ kategori: "", pertanyaan: "", jawaban: "" }); // Reset form saat tidak dalam mode edit
    }
  }, [editingFaqId, faqs]); // Tambahkan faqs sebagai dependency untuk memastikan data terbaru

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Ubah handleSubmit menjadi async
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.kategori || !formData.pertanyaan || !formData.jawaban) {
      alert("Semua bidang harus diisi!");
      return;
    }

    setSubmitting(true); // Mulai loading
    try {
      if (editingFaqId !== null) {
        await updateFaq(editingFaqId, formData); // Panggil updateFaq dengan ID
      } else {
        await addFaq(formData); // Panggil addFaq
      }
      setFormData({ kategori: "", pertanyaan: "", jawaban: "" }); // Reset form setelah submit
      setEditingFaqId(null); // Reset mode edit
    } catch (err) {
      alert(err.message); // Tampilkan pesan error dari konteks
    } finally {
      setSubmitting(false); // Selesai loading
    }
  };

  // Ubah handleEdit agar menggunakan ID
  const handleEdit = (faqId) => {
    setEditingFaqId(faqId);
  };

  // Ubah handleDelete agar menggunakan ID
  const handleDelete = async (faqId) => {
    if (window.confirm("Yakin ingin menghapus FAQ ini?")) {
      setSubmitting(true); // Set loading juga untuk hapus
      try {
        await deleteFaq(faqId); // Panggil deleteFaq dengan ID
        if (editingFaqId === faqId) {
          // Jika FAQ yang dihapus sedang diedit, reset form
          setEditingFaqId(null);
          setFormData({ kategori: "", pertanyaan: "", jawaban: "" });
        }
      } catch (err) {
        alert(err.message); // Tampilkan pesan error
      } finally {
        setSubmitting(false);
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingFaqId(null);
    setFormData({ kategori: "", pertanyaan: "", jawaban: "" });
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
            className="w-full px-4 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#800000]/50"
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
            <option value="Informasi Umum">Informasi Umum</option> {/* Contoh kategori baru */}
          </select>

          <input
            type="text"
            name="pertanyaan"
            placeholder="Pertanyaan"
            value={formData.pertanyaan}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#800000]/50"
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
            className="w-full px-4 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#800000]/50"
            style={{
              border: "1.5px solid #800000",
              backgroundColor: "#fff",
              color: "#800000",
            }}
            required
            rows="4" // Tambahkan baris agar lebih nyaman
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
            disabled={submitting || loading} // Nonaktifkan saat submit atau loading data
          >
            {submitting ? "Memproses..." : (editingFaqId !== null ? "Simpan Perubahan" : "Tambah FAQ")}
          </button>
          {editingFaqId !== null && (
            <button
              type="button" // Penting: type="button" agar tidak mensubmit form
              onClick={handleCancelEdit}
              className="w-full py-3 rounded-2xl font-semibold transition active:scale-95 mt-2"
              style={{
                backgroundColor: "#555",
                color: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#777")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#555")
              }
              disabled={submitting || loading}
            >
              Batal Edit
            </button>
          )}
        </form>

        <div className="space-y-4">
          {loading && <p className="text-center text-[#800000] my-4">Memuat FAQ...</p>}
          {error && <p className="text-center text-red-600 my-4">{error}</p>}
          {!loading && !error && faqs.length === 0 && (
            <p className="text-center text-gray-500 py-4">Belum ada FAQ tercatat.</p>
          )}
          {!loading && !error && faqs.map((faq) => ( // Iterasi langsung menggunakan ID dari Supabase
            <div
              key={faq.id} // Gunakan faq.id sebagai key
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
                  onClick={() => handleEdit(faq.id)} // Kirim faq.id ke handleEdit
                  className="px-3 py-1 rounded-2xl font-semibold transition active:scale-95"
                  style={{
                    backgroundColor: "#FFD700",
                    color: "#800000",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  }}
                  disabled={submitting || loading}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(faq.id)} // Kirim faq.id ke handleDelete
                  className="px-3 py-1 rounded-2xl font-semibold transition active:scale-95"
                  style={{
                    backgroundColor: "#990000",
                    color: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  }}
                  disabled={submitting || loading}
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