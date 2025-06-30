// src/FaqContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from './supabase'; // Import instance Supabase Anda

const FaqContext = createContext();

export const useFaqs = () => useContext(FaqContext);

export const FaqProvider = ({ children }) => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true); // State untuk loading data
  const [error, setError] = useState(null); // State untuk error

  // --- Fungsi untuk mengambil FAQ dari Supabase ---
  const fetchFaqs = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('faqs') // Sesuaikan dengan nama tabel Anda
        .select('*')
        .order('created_at', { ascending: false }); // Urutkan berdasarkan yang terbaru

      if (error) {
        throw error;
      }
      setFaqs(data);
    } catch (err) {
      console.error("Error fetching FAQs:", err.message);
      setError("Gagal memuat FAQ. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  // Panggil fetchFaqs saat provider dimuat
  useEffect(() => {
    fetchFaqs();
  }, []);

  // --- Fungsi untuk menambah FAQ ke Supabase ---
  const addFaq = async (newFaqData) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('faqs')
        .insert([newFaqData]) // Masukkan objek data FAQ
        .select(); // Mengembalikan data yang baru ditambahkan

      if (error) {
        throw error;
      }
      setFaqs((prev) => [...data, ...prev]); // Tambahkan FAQ baru ke state lokal (di depan agar langsung terlihat)
    } catch (err) {
      console.error("Error adding FAQ:", err.message);
      throw new Error("Gagal menambahkan FAQ: " + err.message); // Lempar error untuk ditangani di komponen
    } finally {
      setLoading(false);
    }
  };

  // --- Fungsi untuk mengupdate FAQ di Supabase ---
  // Perhatikan: `updateFaq` di komponen Anda menggunakan `editingIndex`,
  // tapi Supabase membutuhkan `id` unik. Kita akan mengubahnya di AdminFAQ.
  const updateFaq = async (id, updatedFaqData) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('faqs')
        .update(updatedFaqData)
        .eq('id', id) // Update berdasarkan ID unik
        .select();

      if (error) {
        throw error;
      }
      setFaqs((prev) =>
        prev.map((faq) => (faq.id === id ? { ...faq, ...data[0] } : faq))
      );
    } catch (err) {
      console.error("Error updating FAQ:", err.message);
      throw new Error("Gagal memperbarui FAQ: " + err.message); // Lempar error
    } finally {
      setLoading(false);
    }
  };

  // --- Fungsi untuk menghapus FAQ dari Supabase ---
  // Perhatikan: `deleteFaq` di komponen Anda menggunakan `index`,
  // tapi Supabase membutuhkan `id` unik. Kita akan mengubahnya di AdminFAQ.
  const deleteFaq = async (id) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('faqs')
        .delete()
        .eq('id', id); // Hapus berdasarkan ID unik

      if (error) {
        throw error;
      }
      setFaqs((prev) => prev.filter((faq) => faq.id !== id)); // Hapus dari state lokal
    } catch (err) {
      console.error("Error deleting FAQ:", err.message);
      throw new Error("Gagal menghapus FAQ: " + err.message); // Lempar error
    } finally {
      setLoading(false);
    }
  };

  const value = {
    faqs,
    addFaq,
    updateFaq,
    deleteFaq,
    loading,
    error,
    fetchFaqs // Bisa diekspor jika butuh refresh manual
  };

  return (
    <FaqContext.Provider value={value}>
      {children}
    </FaqContext.Provider>
  );
};