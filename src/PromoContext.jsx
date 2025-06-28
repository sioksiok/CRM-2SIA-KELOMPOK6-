// PromoContext.jsx
import React, { createContext, useContext, useState } from "react";

const PromoContext = createContext();

export const usePromo = () => useContext(PromoContext);

export const PromoProvider = ({ children }) => {
  const [promoMember, setPromoMember] = useState([]);
  const [promoUmum, setPromoUmum] = useState([]);

  const addPromoMember = (promo) => {
    setPromoMember((prev) => [...prev, { id: prev.length + 1, ...promo }]);
  };

  const addPromoUmum = (promo) => {
    setPromoUmum((prev) => [...prev, { id: prev.length + 1, ...promo }]);
  };

  const deletePromoMember = (id) => {
    setPromoMember((prev) => prev.filter((p) => p.id !== id));
  };

  const deletePromoUmum = (id) => {
    setPromoUmum((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PromoContext.Provider
      value={{
        promoMember,
        promoUmum,
        addPromoMember,
        addPromoUmum,
        deletePromoMember,
        deletePromoUmum,
      }}
    >
      {children}
    </PromoContext.Provider>
  );
};
