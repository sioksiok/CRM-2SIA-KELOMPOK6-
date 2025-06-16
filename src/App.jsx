import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import SalesManagement from "./pages/SalesManagement";
import ProductManagement from "./pages/Produk";

import FormPendaftaranMember from "./pages/FormPendaftaranMember";
import PromoMember from "./pages/PromoMember";
import CekStatusMember from "./pages/CekStatusMember";
import RekamMedis from "./pages/rekamMedis";

import Akun from "./pages/Akun";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PromoMember from "./pages/PromoMember";
import ManagePromoAdmin from "./pages/ManagePromoAdmin";
import AktivitasPelanggan from "./pages/AktivitasPelanggan";
import PemesananLayanan from "./pages/PemesananLayananProduk";
import PusatBantuan from "./pages/PusatBantuan";

function App() {
  return (
    <Routes>
      {/* Routes yang menggunakan layout utama (sidebar, header, dll) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
         <Route path="/customer" element={<CustomerManagement />} />
        <Route path="/penjualan" element={<SalesManagement />} />
        <Route path="/Produk" element={<ProductManagement />} />
         <Route path="/daftar-member" element={<FormPendaftaranMember />} />
         <Route path="/promo-member" element={<PromoMember />} />
        <Route path="/cek-status-member" element={<CekStatusMember />} />
        <Route path="/rekam-medis" element={<RekamMedis />} />
        <Route path="/pusat-bantuan" element={<PusatBantuan />} />
        <Route path="/pemesanan-layanan-produk" element={<PemesananLayanan />} />
        <Route path="/akun" element={<Akun />} />
         <Route path="/promo-member" element={<PromoMember />} />
         <Route path="/manage-promo-admin" element={<ManagePromoAdmin />} />
         <Route path="/aktivitas-pelanggan" element={<AktivitasPelanggan />} />
      </Route>

      {/* Routes tanpa layout (full screen, tanpa sidebar) */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
