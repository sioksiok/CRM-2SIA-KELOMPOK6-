import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Dashboard from "./pages/Dashboard";
import SalesManagement from "./pages/SalesManagement";
import CekStatusMember from "./pages/CekStatusMember";
import RekamMedis from "./pages/rekamMedis";
import PromoUmum from "./pages/PromoUmum";
import RiwayatLayanan from "./pages/RiwayatLayanan";

import Akun from "./pages/Akun";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      {/* Routes yang menggunakan layout utama (sidebar, header, dll) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/penjualan" element={<SalesManagement />} />
        <Route path="/cek-status-member" element={<CekStatusMember />} />
        <Route path="/rekam-medis" element={<RekamMedis />} />
        <Route path="/promo-umum" element={<PromoUmum />} />
        <Route path="/riwayat-layanan" element={<RiwayatLayanan />} />
        <Route path="/akun" element={<Akun />} />
      </Route>

      {/* Routes tanpa layout (full screen, tanpa sidebar) */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
