import React, { useState } from "react";
import { usePromo } from "../PromoContext";

export default function ManagePromoAdmin() {
  const { promoMember, addPromoMember, deletePromoMember } = usePromo();
  const [form, setForm] = useState({
    title: "",
    level: "Bronze",
    description: "",
    originalPrice: "",
    discountedPrice: "",
    active: true,
    image: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl);
        setForm({ ...form, image: imageUrl });
      }
    } else {
      setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    }
  };

  const handleAdd = () => {
    if (!form.title || !form.description || !form.originalPrice || !form.discountedPrice) {
      alert("Semua field wajib diisi!");
      return;
    }

    const newPromo = {
      id: Date.now(),
      ...form,
      originalPrice: parseInt(form.originalPrice),
      discountedPrice: parseInt(form.discountedPrice),
    };

    addPromoMember(newPromo);
    setForm({
      title: "",
      level: "Bronze",
      description: "",
      originalPrice: "",
      discountedPrice: "",
      active: true,
      image: "",
    });
    setImagePreview(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus promo ini?")) {
      deletePromoMember(id);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-red-800 mb-4">Kelola Promo Member</h1>
      {/* Form */}
      {/* ...sama seperti sebelumnya */}

      {/* Tabel Promo */}
      <table>
        <tbody>
          {promoMember.map((promo) => (
            <tr key={promo.id}>
              <td>{promo.title}</td>
              <td><button onClick={() => handleDelete(promo.id)}>Hapus</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}