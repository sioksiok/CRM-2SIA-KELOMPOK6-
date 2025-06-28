import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Tambahkan totalTransaksi untuk menentukan level
const members = [
  { id: "M001", name: "Budi Santoso", phone: "081234567890", totalTransaksi: 1200000 },
  { id: "M002", name: "Siti Aminah", phone: "089876543210", totalTransaksi: 3200000 },
  { id: "M003", name: "Andi Wijaya", phone: "081299988877", totalTransaksi: 4500000 },
  { id: "M004", name: "Putri", phone: "0812345678", totalTransaksi: 6000000 },
];

// Fungsi untuk menentukan level berdasarkan transaksi
const getLevel = (amount) => {
  if (amount > 5500000) return "Platinum";
  if (amount > 4000000) return "Gold";
  if (amount > 2500000) return "Silver";
  if (amount > 1000000) return "Bronze";
  return "Non-member";
};

export default function CekStatusMember() {
  const [inputPhone, setInputPhone] = useState("");
  const [foundMember, setFoundMember] = useState(null);
  const navigate = useNavigate();

  const handleCheck = () => {
    const phone = inputPhone.trim();
    if (!phone) {
      alert("Masukkan nomor telepon terlebih dahulu.");
      return;
    }
    const result = members.find((m) => m.phone === phone);
    if (result) {
      setFoundMember(result);
    } else {
      alert("Nomor telepon tidak ditemukan.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: `linear-gradient(135deg, #800000 0%, #800000 100%)` }}>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border p-8"
        style={{
          borderColor: "#800000",
          boxShadow: "0 10px 15px -3px rgba(128,0,0,0.5), 0 4px 6px -2px rgba(128,0,0,0.3)",
        }}>
        <h2 className="text-3xl font-extrabold mb-8 text-center tracking-wide font-serif drop-shadow-md"
          style={{ color: "#800000" }}>
          Cek Status Member
        </h2>

        <input
          type="tel"
          value={inputPhone}
          onChange={(e) => setInputPhone(e.target.value)}
          placeholder="Masukkan Nomor Telepon (contoh: 081234567890)"
          className="w-full px-6 py-3 rounded-2xl focus:outline-none focus:ring-4 mb-8 transition font-medium shadow-sm"
          style={{
            border: "1.5px solid #800000",
            backgroundColor: "#fff0f0",
            color: "#800000",
            fontWeight: "500",
            boxShadow: "0 1px 3px rgba(128,0,0,0.3)",
            caretColor: "#800000",
          }}
        />

        <button
          onClick={handleCheck}
          className="w-full py-3 rounded-2xl transition font-semibold shadow-md active:scale-95"
          style={{
            backgroundColor: "#800000",
            color: "#fff",
            boxShadow: "0 4px 10px rgba(128,0,0,0.5)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#990000")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#800000")}
        >
          Cek Status
        </button>

        {foundMember && (
          <div className="mt-10 rounded-2xl p-6 shadow-inner font-sans"
            style={{
              backgroundColor: "#fff0f0",
              border: "1.5px solid #800000",
              color: "#800000",
              animation: "fadeIn 0.3s ease forwards",
            }}>
            <p className="text-xl mb-3 font-semibold">{foundMember.name}</p>
            <p className="text-base mb-1">Nomor Telepon: {foundMember.phone}</p>
            <p className="text-base mb-1">Total Transaksi: Rp {foundMember.totalTransaksi.toLocaleString()}</p>
            <p className="text-base mb-6 font-bold">Level Membership: {getLevel(foundMember.totalTransaksi)}</p>

            <div className="flex gap-2">
              <button
                onClick={() => navigate("/rekam-medis")}
                className="rounded-2xl transition font-semibold shadow-md px-4 py-2"
                style={{
                  backgroundColor: "#800000",
                  color: "#fff",
                  boxShadow: "0 4px 10px rgba(128,0,0,0.5)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#990000")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#800000")}
              >
                Lihat Rekam Medis
              </button>

              <button
                onClick={() => alert("Notifikasi promo dikirim ke " + foundMember.name)}
                className="rounded-2xl transition font-semibold shadow-md px-4 py-2"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  boxShadow: "0 4px 10px rgba(0,128,0,0.3)",
                }}
              >
                Kirim Promo
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input::placeholder {
          color: #800000;
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}
