import { useState } from "react";

export default function AccountSettings() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert(`Profil disimpan: ${name} (${email})`);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Password baru dan konfirmasi tidak sama!");
      return;
    }
    alert("Password berhasil diubah!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        background: "linear-gradient(135deg, #800000 0%, #a52a2a 100%)",
      }}
    >
      <div className="max-w-5xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center text-white drop-shadow-md">
          Pengaturan Akun Admin
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profil Card */}
          <div className="bg-white border border-maroon rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-maroon mb-4">Informasi Profil</h2>
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Lengkap"
                className="w-full px-4 py-3 border border-maroon rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-3 border border-maroon rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              />
              <button
                type="submit"
                className="w-full bg-maroon text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Simpan Profil
              </button>
            </form>
          </div>

          {/* Password Card */}
          <div className="bg-white border border-maroon rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-maroon mb-4">Ganti Password</h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Password Saat Ini"
                className="w-full px-4 py-3 border border-maroon rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Password Baru"
                className="w-full px-4 py-3 border border-maroon rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Konfirmasi Password Baru"
                className="w-full px-4 py-3 border border-maroon rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              />
              <button
                type="submit"
                className="w-full bg-maroon text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Ganti Password
              </button>
            </form>
          </div>
        </div>

        {/* Notifikasi Card */}
        <div className="mt-10 bg-white border border-maroon rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-maroon mb-4">Preferensi Notifikasi</h2>
          <div className="space-y-3 text-maroon font-medium">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={emailNotif}
                onChange={() => setEmailNotif(!emailNotif)}
                className="w-5 h-5 accent-maroon"
              />
              <span>Terima notifikasi via Email</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={smsNotif}
                onChange={() => setSmsNotif(!smsNotif)}
                className="w-5 h-5 accent-maroon"
              />
              <span>Terima notifikasi via WA</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
