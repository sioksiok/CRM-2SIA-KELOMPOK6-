 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const members = [
  { id: "M001", name: "Budi Santoso", phone: "081234567890" },
  { id: "M002", name: "Siti Aminah", phone: "089876543210" },
  { id: "M003", name: "Andi Wijaya", phone: "081299988877" },
  { id: "M003", name: "Putri", phone: "0812345678" },
];

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
      alert("Nomor telepon tidak ditemukan. Dialihkan ke halaman pendaftaran.");
      navigate("/pendaftaran");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: `linear-gradient(135deg, #800000 0%, #800000 50%, #800000 100%)`,
      }}
    >
      <div
        className="w-full max-w-md bg-white rounded-3xl shadow-xl border p-8
                  transform transition-transform hover:scale-105 duration-300"
        style={{
          borderColor: "#800000",
          boxShadow: "0 10px 15px -3px rgba(128,0,0,0.5), 0 4px 6px -2px rgba(128,0,0,0.3)",
        }}
      >
        <h2
          className="text-3xl font-extrabold mb-8 text-center tracking-wide font-serif drop-shadow-md"
          style={{ color: "#800000" }}
        >
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
            "::placeholder": { color: "#800000" }, 
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
          <div
            className="mt-10 rounded-2xl p-6 shadow-inner font-sans"
            style={{
              backgroundColor: "#fff0f0",
              border: "1.5px solid #800000",
              color: "#800000",
              animation: "fadeIn 0.3s ease forwards",
            }}
          >
            <p className="text-xl mb-3 font-semibold">{foundMember.name}</p>
            <p className="text-base mb-6">Nomor Telepon: {foundMember.phone}</p>
            <button
              onClick={() => navigate("/rekam-medis")}
              className="rounded-2xl transition font-semibold shadow-md"
              style={{
                backgroundColor: "#800000",
                color: "#fff",
                padding: "0.5rem 1.5rem",
                boxShadow: "0 4px 10px rgba(128,0,0,0.5)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#990000")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#800000")}
            >
              Lihat Riwayat Rekam Medis
            </button>
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
