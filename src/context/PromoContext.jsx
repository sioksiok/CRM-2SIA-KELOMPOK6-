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

  return (
    <PromoContext.Provider value={{ promos, loading, error }}>
      {children}
    </PromoContext.Provider>
  );
};

export const usePromos = () => {
  return useContext(PromoContext);
};
