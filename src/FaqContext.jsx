
import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Buat Context
const FaqContext = createContext();

// Fungsi untuk mendapatkan FAQ awal dari Local Storage atau data default
const getInitialFaqs = () => {
  const storedFaqs = localStorage.getItem('faqs');
  try {
    return storedFaqs ? JSON.parse(storedFaqs) : [
      {
        kategori: "Perawatan Kulit",
        pertanyaan: "Apa itu facial dan manfaatnya?",
        jawaban:
          "Facial adalah perawatan kulit wajah untuk membersihkan pori-pori, mengangkat sel kulit mati, dan meremajakan kulit.",
      },
      {
        kategori: "Panduan Layanan",
        pertanyaan: "Bagaimana cara melakukan pemesanan layanan di Aira Skin?",
        jawaban:
          "Anda dapat memesan layanan melalui aplikasi dengan mengisi formulir pemesanan dan memilih jadwal.",
      },
    ];
  } catch (e) {
    console.error("Error parsing FAQs from localStorage:", e);
    return []; // Kembalikan array kosong jika ada error parsing
  }
};

// 2. Buat FaqProvider Component
export const FaqProvider = ({ children }) => {
  const [faqs, setFaqs] = useState(getInitialFaqs);

  // Efek samping untuk menyimpan FAQ ke Local Storage setiap kali 'faqs' berubah
  useEffect(() => {
    try {
      localStorage.setItem('faqs', JSON.stringify(faqs));
    } catch (e) {
      console.error("Error saving FAQs to localStorage:", e);
    }
  }, [faqs]);

  // Fungsi untuk menambah FAQ
  const addFaq = (newFaq) => {
    setFaqs((prevFaqs) => [...prevFaqs, newFaq]);
  };

  // Fungsi untuk memperbarui FAQ
  const updateFaq = (index, updatedFaq) => {
    setFaqs((prevFaqs) => {
      const newFaqs = [...prevFaqs];
      newFaqs[index] = updatedFaq;
      return newFaqs;
    });
  };

  // Fungsi untuk menghapus FAQ
  const deleteFaq = (index) => {
    setFaqs((prevFaqs) => prevFaqs.filter((_, i) => i !== index));
  };

  // Sediakan state dan fungsi melalui Context.Provider
  return (
    <FaqContext.Provider value={{ faqs, addFaq, updateFaq, deleteFaq, setFaqs }}>
      {children}
    </FaqContext.Provider>
  );
};

// 3. Buat Custom Hook untuk Menggunakan Context
export const useFaqs = () => useContext(FaqContext);