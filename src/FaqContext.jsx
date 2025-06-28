import React, { createContext, useContext, useState, useEffect } from "react";

// Buat Context
const FaqContext = createContext();

// Provider
export const FaqProvider = ({ children }) => {
  const [faqs, setFaqs] = useState([]);

  // 🔁 Ambil data dari localStorage saat komponen pertama kali dimount
  useEffect(() => {
    const savedFaqs = localStorage.getItem("faqs");
    if (savedFaqs) {
      setFaqs(JSON.parse(savedFaqs));
    }
  }, []);

  // 💾 Simpan data ke localStorage setiap kali `faqs` berubah
  useEffect(() => {
    localStorage.setItem("faqs", JSON.stringify(faqs));
  }, [faqs]);

  // Tambah FAQ
  const addFaq = (faq) => {
    setFaqs([...faqs, faq]);
  };

  // Update FAQ
  const updateFaq = (index, updatedFaq) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index] = updatedFaq;
    setFaqs(updatedFaqs);
  };

  // Hapus FAQ
  const deleteFaq = (index) => {
    const updatedFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(updatedFaqs);
  };

  return (
    <FaqContext.Provider value={{ faqs, addFaq, updateFaq, deleteFaq }}>
      {children}
    </FaqContext.Provider>
  );
};

// Hook custom
export const useFaqs = () => useContext(FaqContext);
