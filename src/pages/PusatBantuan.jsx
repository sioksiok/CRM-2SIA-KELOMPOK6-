import React, { useState } from "react";

const faqList = [
  {
    kategori: "Perawatan Kulit",
    pertanyaan: "Apa itu facial dan manfaatnya?",
    jawaban:
      "Facial adalah perawatan kulit wajah untuk membersihkan pori-pori, mengangkat sel kulit mati, dan meremajakan kulit.",
  },
  {
    kategori: "Perawatan Kulit",
    pertanyaan: "Berapa kali sebaiknya melakukan facial?",
    jawaban:
      "Facial disarankan dilakukan 1-2 kali dalam sebulan tergantung jenis kulit dan kebutuhan.",
  },
  {
    kategori: "Panduan Layanan",
    pertanyaan: "Bagaimana cara melakukan pemesanan layanan di Aira Skin?",
    jawaban:
      "Anda dapat memesan layanan melalui aplikasi dengan mengisi formulir pemesanan dan memilih jadwal.",
  },
  {
    kategori: "Panduan Layanan",
    pertanyaan: "Apakah saya perlu registrasi untuk melakukan perawatan?",
    jawaban:
      "Ya, Anda harus mendaftar terlebih dahulu sebagai pelanggan agar kami dapat mencatat riwayat perawatan Anda.",
  },
];

export default function PusatBantuan() {
  const [selectedKategori, setSelectedKategori] = useState("Semua");

  const filterFaq = () => {
    if (selectedKategori === "Semua") return faqList;
    return faqList.filter((faq) => faq.kategori === selectedKategori);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        background: `linear-gradient(135deg, #800000 0%, #800000 100%)`,
      }}
    >
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-maroon">
          Pusat Bantuan & FAQ
        </h2>

        <div className="mb-6 flex justify-center">
          <select
            className="border border-maroon text-maroon px-4 py-2 rounded-xl shadow-sm focus:outline-none"
            value={selectedKategori}
            onChange={(e) => setSelectedKategori(e.target.value)}
            style={{
              backgroundColor: "#fff",
              caretColor: "#800000",
            }}
          >
            <option value="Semua">Semua Kategori</option>
            <option value="Perawatan Kulit">Perawatan Kulit</option>
            <option value="Panduan Layanan">Panduan Layanan</option>
          </select>
        </div>

        <div className="space-y-4">
          {filterFaq().map((faq, index) => (
            <div
              key={index}
              className="border p-5 rounded-xl bg-[#fff0f0] shadow"
              style={{
                borderColor: "#800000",
              }}
            >
              <p className="font-semibold text-lg text-maroon">
                {faq.pertanyaan}
              </p>
              <p className="text-gray-800 mt-2">{faq.jawaban}</p>
              <span className="text-sm italic text-maroon mt-2 inline-block">
                Kategori: {faq.kategori}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .text-maroon {
          color: #800000;
        }
        .border-maroon {
          border-color: #800000;
        }
      `}</style>
    </div>
  );
}
