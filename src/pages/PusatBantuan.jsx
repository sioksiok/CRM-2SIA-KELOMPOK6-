import React, { useState } from "react";
import { Mail, CalendarCheck, Truck, XCircle, DollarSign, Tag } from "lucide-react";

const faqList = [
  {
    kategori: "Perawatan Kulit",
    pertanyaan: "Apa itu facial dan manfaatnya?",
    jawaban:
      "Facial adalah perawatan kulit wajah untuk membersihkan pori-pori, mengangkat sel kulit mati, dan meremajakan kulit.",
    icon: <Mail className="w-6 h-6 text-maroon" />,
  },
  {
    kategori: "Perawatan Kulit",
    pertanyaan: "Berapa kali sebaiknya melakukan facial?",
    jawaban:
      "Facial disarankan dilakukan 1-2 kali dalam sebulan tergantung jenis kulit dan kebutuhan.",
    icon: <CalendarCheck className="w-6 h-6 text-maroon" />,
  },
  {
    kategori: "Panduan Layanan",
    pertanyaan: "Bagaimana cara melakukan pemesanan layanan di Aira Skin?",
    jawaban:
      "Anda dapat memesan layanan melalui aplikasi dengan mengisi formulir pemesanan dan memilih jadwal.",
    icon: <Truck className="w-6 h-6 text-maroon" />,
  },
  {
    kategori: "Panduan Layanan",
    pertanyaan: "Apakah saya perlu registrasi untuk melakukan perawatan?",
    jawaban:
      "Ya, Anda harus mendaftar terlebih dahulu sebagai pelanggan agar kami dapat mencatat riwayat perawatan Anda.",
    icon: <XCircle className="w-6 h-6 text-maroon" />,
  },
  {
    kategori: "Panduan Layanan",
    pertanyaan: "Apa itu Instant Refunds?",
    jawaban:
      "Refund instan diberikan setelah produk dikembalikan dengan sukses dan diperiksa oleh staf kami.",
    icon: <DollarSign className="w-6 h-6 text-maroon" />,
  },
  {
    kategori: "Panduan Layanan",
    pertanyaan: "Bagaimana cara menggunakan kupon pada pesanan saya?",
    jawaban:
      "Kupon dapat diterapkan saat checkout. Kupon aktif akan terlihat di menu 'My Coupons'.",
    icon: <Tag className="w-6 h-6 text-maroon" />,
  },
];

export default function PusatBantuan() {
  const [selectedKategori, setSelectedKategori] = useState("Semua");

  const filterFaq = () => {
    if (selectedKategori === "Semua") return faqList;
    return faqList.filter((faq) => faq.kategori === selectedKategori);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <img
        src="/treatment.jpeg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      {/* Maroon Overlay */}
      <div className="absolute inset-0 bg-[#5D2020] opacity-70 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center py-14 px-4">
        {/* Heading */}
        <div className="text-center text-white mb-10">
          <h1 className="text-4xl font-bold mb-2">Ask us anything</h1>
          <p className="text-lg">Have any questions? We're here to assist you.</p>
        </div>

        {/* Select Kategori */}
        <div className="mb-8">
          <select
  className="border border-white bg-white text-maroon px-4 py-2 rounded-xl focus:outline-none"
  style={{
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    color: "#800000",
  }}
            value={selectedKategori}
            onChange={(e) => setSelectedKategori(e.target.value)}
          >
            <option value="Semua">Semua Kategori</option>
            <option value="Perawatan Kulit">Perawatan Kulit</option>
            <option value="Panduan Layanan">Panduan Layanan</option>
          </select>
        </div>

        {/* FAQ Cards */}
        <div className="bg-white rounded-3xl p-10 w-full max-w-6xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterFaq().map((faq, index) => (
              <div
                key={index}
                className="bg-[#fff0f0] p-6 rounded-xl border border-maroon shadow-sm hover:shadow-md transition"
              >
                <div className="mb-3">{faq.icon}</div>
                <p className="font-semibold text-lg text-maroon">{faq.pertanyaan}</p>
                <p className="text-gray-800 mt-2">{faq.jawaban}</p>
                <span className="text-sm italic text-maroon mt-2 inline-block">
                  Kategori: {faq.kategori}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Help */}
          <div className="mt-10 bg-[#f4f4e7] p-6 rounded-xl flex flex-col md:flex-row items-center justify-between">
            <p className="text-maroon font-medium mb-4 md:mb-0">
              Still have questions? Can’t find the answer you’re looking for? Please chat to our friendly team.
            </p>
            <button className="bg-maroon text-white px-6 py-2 rounded-full font-semibold hover:bg-[#822828] transition">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
