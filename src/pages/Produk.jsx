import React, { useState, useEffect } from "react";
import { supabase } from "../supabase"; // Pastikan path ini benar sesuai lokasi supabase.js

function formatCurrency(num) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(num);
}

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    stock: "",
    price: "",
    active: true,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil data produk dari Supabase
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("product").select("*");
      if (error) {
        throw error;
      }
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
      setError("Gagal memuat produk. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  // Panggil fetchProducts saat komponen pertama kali di-mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddProduct = async () => {
    if (!formData.name || !formData.category || !formData.stock || !formData.price) {
      alert("Semua kolom harus diisi");
      return;
    }

    try {
      const newProduct = {
        name: formData.name,
        category: formData.category,
        stock: parseInt(formData.stock),
        price: parseFloat(formData.price),
        active: formData.active,
      };

      const { data, error } = await supabase.from("product").insert([newProduct]).select();

      if (error) {
        throw error;
      }

      setProducts([...products, ...data]); // Tambahkan produk baru ke state
      setFormData({ name: "", category: "", stock: "", price: "", active: true });
      setShowForm(false);
      alert("Produk berhasil ditambahkan!");
    } catch (error) {
      console.error("Error adding product:", error.message);
      alert("Gagal menambahkan produk: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus produk ini?")) {
      try {
        const { error } = await supabase.from("product").delete().eq("id", id);

        if (error) {
          throw error;
        }

        setProducts(products.filter((p) => p.id !== id));
        alert("Produk berhasil dihapus!");
      } catch (error) {
        console.error("Error deleting product:", error.message);
        alert("Gagal menghapus produk: " + error.message);
      }
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Manajemen Produk</h1>

      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        {showForm ? "Batal Tambah Produk" : "Tambah Produk"}
      </button>

      {showForm && (
        <div className="mb-6 p-4 border border-gray-300 rounded bg-white shadow-sm">
          <div className="mb-2">
            <label className="block mb-1 font-medium">Nama Produk</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-indigo-400 focus:outline-none"
              placeholder="Masukkan nama produk"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Kategori</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-indigo-400 focus:outline-none"
              placeholder="Contoh: Kosmetik"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Stok</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-indigo-400 focus:outline-none"
              min="0"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Harga</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-indigo-400 focus:outline-none"
              min="0"
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="active"
                checked={formData.active}
                onChange={handleChange}
                className="mr-2"
              />
              Aktif
            </label>
          </div>

          <button
            onClick={handleAddProduct}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Simpan Produk
          </button>
        </div>
      )}

      {loading ? (
        <p className="text-center text-gray-600">Memuat produk...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kategori</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Stok</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Harga</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4 text-right">{product.stock}</td>
                  <td className="px-6 py-4 text-right">{formatCurrency(product.price)}</td>
                  <td className="px-6 py-4 text-center">
                    {product.active ? (
                      <span className="inline-block px-2 py-1 text-xs text-green-800 bg-green-100 rounded">
                        Aktif
                      </span>
                    ) : (
                      <span className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-200 rounded">
                        Nonaktif
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center space-x-2">
                    <button
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={() => alert("Fitur Edit belum tersedia")}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(product.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    Tidak ada produk tersedia.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}