import React, { useState } from 'react';

export default function AktivitasPelanggan() {
  const [activities, setActivities] = useState([]);
  const [form, setForm] = useState({
    nama: '',
    nomor: '',
    pesan: '',
    tanggal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = () => {
    if (!form.nama || !form.nomor || !form.pesan || !form.tanggal) {
      alert("Semua field harus diisi!");
      return;
    }
    const newActivity = { ...form, id: Date.now() };
    setActivities([...activities, newActivity]);
    setForm({ nama: '', nomor: '', pesan: '', tanggal: '' });
  };

  const generateWaLink = (nomor, pesan) => {
    return `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-[#800000] mb-4">
        Aktivitas Pelanggan (Reminder WhatsApp)
      </h1>

      <div className="bg-white p-4 rounded shadow mb-6 border border-[#800000]/20">
        <h2 className="text-lg font-semibold mb-3 text-[#800000]">Tambah Aktivitas</h2>
        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Nama Pelanggan"
          className="w-full p-2 mb-2 border rounded border-[#800000]/50"
        />
        <input
          type="text"
          name="nomor"
          value={form.nomor}
          onChange={handleChange}
          placeholder="Nomor WhatsApp (628xxx)"
          className="w-full p-2 mb-2 border rounded border-[#800000]/50"
        />
        <textarea
          name="pesan"
          value={form.pesan}
          onChange={handleChange}
          placeholder="Isi Pesan"
          className="w-full p-2 mb-2 border rounded border-[#800000]/50"
        />
        <input
          type="date"
          name="tanggal"
          value={form.tanggal}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded border-[#800000]/50"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-[#800000] text-white rounded hover:bg-[#660000]"
        >
          Tambah Aktivitas
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow border border-[#800000]/20">
        <h2 className="text-lg font-semibold mb-4 text-[#800000]">Daftar Aktivitas</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-[#f8f4f4]">
            <tr>
              <th className="p-2 text-left text-[#800000]">Nama</th>
              <th className="p-2 text-left text-[#800000]">Nomor WA</th>
              <th className="p-2 text-left text-[#800000]">Tanggal</th>
              <th className="p-2 text-left text-[#800000]">Pesan</th>
              <th className="p-2 text-center text-[#800000]">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((act) => (
              <tr key={act.id} className="border-t hover:bg-[#fdf3f3]">
                <td className="p-2">{act.nama}</td>
                <td className="p-2">{act.nomor}</td>
                <td className="p-2">{act.tanggal}</td>
                <td className="p-2">{act.pesan}</td>
                <td className="p-2 text-center">
                  <a
                    href={generateWaLink(act.nomor, act.pesan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#800000] font-semibold hover:underline"
                  >
                    Kirim WA
                  </a>
                </td>
              </tr>
            ))}
            {activities.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Belum ada aktivitas tercatat.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
