import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Dashboard from "./pages/Dashboard";
import CekStatusMember from "./pages/CekStatusMember";
import RekamMedis from "./pages/rekamMedis";

import Akun from "./pages/Akun";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PemesananLayanan from "./pages/PemesananLayananProduk";
import PusatBantuan from "./pages/PusatBantuan";

function App() {
  return (
    <Routes>
      {/* Routes yang menggunakan layout utama (sidebar, header, dll) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cek-status-member" element={<CekStatusMember />} />
        <Route path="/rekam-medis" element={<RekamMedis />} />
        <Route path="/pusat-bantuan" element={<PusatBantuan />} />
        <Route path="/pemesanan-layanan-produk" element={<PemesananLayanan />} />
        <Route path="/akun" element={<Akun />} />
      </Route>

      {/* Routes tanpa layout (full screen, tanpa sidebar) */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
