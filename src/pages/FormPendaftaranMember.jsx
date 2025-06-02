import React, { useState } from 'react';

const FormPendaftaranMember = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    alamat: '',
    levelMember: '',
    tanggalBergabung: '',
  });

  const [members, setMembers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMembers([...members, { ...formData, id: Date.now() }]);
    alert('Pendaftaran berhasil!');
    setFormData({
      nama: '',
      email: '',
      telepon: '',
      alamat: '',
      levelMember: '',
      tanggalBergabung: '',
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Yakin ingin menghapus member ini?')) {
      setMembers(members.filter((m) => m.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4B0000] to-[#800000] py-10 px-4">
      <div className="container mx-auto max-w-screen-lg">
        <div className="bg-white shadow-2xl rounded-2xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6 text-[#800000] text-center">
            Formulir Pendaftaran Member
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Nama</label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#800000]"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#800000]"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Telepon</label>
              <input
                type="tel"
                name="telepon"
                value={formData.telepon}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#800000]"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Alamat</label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#800000]"
              ></textarea>
            </div>
            <div>
              <label className="block font-medium mb-1">Level Member</label>
              <select
                name="levelMember"
                value={formData.levelMember}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#800000]"
                required
              >
                <option value="">-- Pilih Level --</option>
                <option value="Bronze">Bronze</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Tanggal Bergabung</label>
              <input
                type="date"
                name="tanggalBergabung"
                value={formData.tanggalBergabung}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#800000]"
                required
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#800000] text-white font-semibold py-3 rounded-xl hover:bg-[#990000] transition"
              >
                Daftar
              </button>
            </div>
          </form>
        </div>

        {/* TABEL MEMBER */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-x-auto">
          <h3 className="text-2xl font-semibold p-6 border-b border-gray-200 text-[#800000]">
            Daftar Member Terdaftar
          </h3>
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Nama</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Telepon</th>
                <th className="px-6 py-3">Alamat</th>
                <th className="px-6 py-3">Level</th>
                <th className="px-6 py-3">Tanggal</th>
                <th className="px-6 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {members.length > 0 ? (
                members.map((member) => (
                  <tr key={member.id}>
                    <td className="px-6 py-4">{member.nama}</td>
                    <td className="px-6 py-4">{member.email}</td>
                    <td className="px-6 py-4">{member.telepon}</td>
                    <td className="px-6 py-4">{member.alamat}</td>
                    <td className="px-6 py-4">{member.levelMember}</td>
                    <td className="px-6 py-4">{member.tanggalBergabung}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDelete(member.id)}
                        className="text-red-600 hover:underline font-medium"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-500">
                    Belum ada member yang terdaftar.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FormPendaftaranMember;