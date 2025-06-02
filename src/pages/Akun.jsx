import { useState } from "react";

export default function AccountSettings() {
  // State profil
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");

  // State password
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State notifikasi
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
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#800000", fontFamily: "'Poppins', sans-serif" }}
    >
      <div
        className="max-w-3xl w-full rounded-3xl p-10 shadow-2xl"
        style={{
          backgroundColor: "#fff0f0",
          border: "3px solid #660000",
          boxShadow: "0 12px 30px rgba(128, 0, 0, 0.5)",
        }}
      >
        <h1
          className="text-4xl font-extrabold mb-10 text-center tracking-wide"
          style={{ color: "#800000", textShadow: "1px 1px 3px rgba(102,0,0,0.7)" }}
        >
          Pengaturan Akun
        </h1>

        {/* Form Profil */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "#800000", letterSpacing: "0.05em" }}
          >
            Profil
          </h2>
          <form onSubmit={handleProfileSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl border text-lg font-medium placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-maroon"
              style={{
                borderColor: "#800000",
                backgroundColor: "#fff5f5",
                color: "#800000",
                transition: "all 0.3s ease",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl border text-lg font-medium placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-maroon"
              style={{
                borderColor: "#800000",
                backgroundColor: "#fff5f5",
                color: "#800000",
                transition: "all 0.3s ease",
              }}
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white tracking-wide shadow-md transition hover:bg-[#990000] active:scale-95"
              style={{ backgroundColor: "#800000" }}
            >
              Simpan Profil
            </button>
          </form>
        </section>

        {/* Form Ganti Password */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "#800000", letterSpacing: "0.05em" }}
          >
            Ganti Password
          </h2>
          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <input
              type="password"
              placeholder="Password Saat Ini"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl border text-lg font-medium placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-maroon"
              style={{
                borderColor: "#800000",
                backgroundColor: "#fff5f5",
                color: "#800000",
                transition: "all 0.3s ease",
              }}
            />
            <input
              type="password"
              placeholder="Password Baru"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl border text-lg font-medium placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-maroon"
              style={{
                borderColor: "#800000",
                backgroundColor: "#fff5f5",
                color: "#800000",
                transition: "all 0.3s ease",
              }}
            />
            <input
              type="password"
              placeholder="Konfirmasi Password Baru"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl border text-lg font-medium placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-maroon"
              style={{
                borderColor: "#800000",
                backgroundColor: "#fff5f5",
                color: "#800000",
                transition: "all 0.3s ease",
              }}
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white tracking-wide shadow-md transition hover:bg-[#990000] active:scale-95"
              style={{ backgroundColor: "#800000" }}
            >
              Ganti Password
            </button>
          </form>
        </section>

        {/* Preferensi Notifikasi */}
        <section>
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "#800000", letterSpacing: "0.05em" }}
          >
            Preferensi Notifikasi
          </h2>
          <div className="flex flex-col gap-5 text-lg font-medium" style={{ color: "#800000" }}>
            <label className="flex items-center gap-4 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={emailNotif}
                onChange={() => setEmailNotif(!emailNotif)}
                className="w-6 h-6 rounded border-2 border-maroon checked:bg-maroon transition"
                style={{ borderColor: "#800000" }}
              />
              Terima notifikasi via Email
            </label>
            <label className="flex items-center gap-4 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={smsNotif}
                onChange={() => setSmsNotif(!smsNotif)}
                className="w-6 h-6 rounded border-2 border-maroon checked:bg-maroon transition"
                style={{ borderColor: "#800000" }}
              />
              Terima notifikasi via SMS
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
