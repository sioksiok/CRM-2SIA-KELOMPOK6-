import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabase';

const PromoContext = createContext();

export const PromoProvider = ({ children }) => {
  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPromos = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('promos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setPromos(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPromos();
  }, []);

  // Tambahkan promo ke state lokal
  const addPromo = (newPromo) => {
    setPromos((prev) => [newPromo, ...prev]);
  };

  // Hapus promo dari state lokal
  const deletePromo = (id) => {
    setPromos((prev) => prev.filter((p) => p.id !== id));
  };

  // Update promo berdasarkan id
  const updatePromo = (updatedPromo) => {
    setPromos((prev) =>
      prev.map((promo) =>
        promo.id === updatedPromo.id ? updatedPromo : promo
      )
    );
  };

  return (
    <PromoContext.Provider
      value={{
        promos,
        loading,
        error,
        addPromo,
        deletePromo,
        updatePromo, // <- penting!
      }}
    >
      {children}
    </PromoContext.Provider>
  );
};

export const usePromos = () => useContext(PromoContext);
