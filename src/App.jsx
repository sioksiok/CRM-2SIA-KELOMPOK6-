import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import LayoutUser from "./components/LayoutUser";

// Halaman Admin
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import SalesManagement from "./pages/SalesManagement";
import ProductManagement from "./pages/Produk";
import CekStatusMember from "./pages/CekStatusMember";
import RekamMedis from "./pages/RekamMedis";
import Akun from "./pages/Akun";
import ManagePromoAdmin from "./pages/ManagePromoAdmin";
import AktivitasPelanggan from "./pages/AktivitasPelanggan";
import PemesananLayanan from "./pages/PemesananLayananProduk";
import PusatBantuan from "./pages/PusatBantuan"; // dipakai juga oleh user
import User from "./pages/User";

// Halaman User
import DashboardUser from "./pages/DashboardUser";
import FeedbackUser from "./pages/feedbackUser";
import PromoMember from "./pages/PromoMember";
import ForYou from "./pages/ForYou";
import PromoNonMember from "./pages/PromoNonMember"; // Akan kita tampilkan sebagai "Promo Umum"

// Halaman Autentikasi
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      {/* Layout untuk Admin */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<CustomerManagement />} />
        <Route path="/penjualan" element={<SalesManagement />} />
        <Route path="/produk" element={<ProductManagement />} />
        <Route path="/cek-status-member" element={<CekStatusMember />} />
        <Route path="/rekam-medis" element={<RekamMedis />} />
        <Route path="/pemesanan-layanan-produk" element={<PemesananLayanan />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/manage-promo-admin" element={<ManagePromoAdmin />} />
        <Route path="/aktivitas-pelanggan" element={<AktivitasPelanggan />} />
      </Route>

      {/* Layout untuk User */}
      <Route element={<LayoutUser />}>
        <Route path="/dashboard-user" element={<DashboardUser />} />
        <Route path="/promo-member" element={<PromoMember />} />
        <Route path="/promo-umum" element={<PromoNonMember />} /> {/* Ubah dari /promo-non-member */}
        <Route path="/foryou" element={<ForYou />} />
        <Route path="/feedback" element={<FeedbackUser />} />
        <Route path="/pusat-bantuan" element={<PusatBantuan />} />
      </Route>

      {/* Autentikasi */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Redirect jika path tidak ditemukan */}
      <Route path="*" element={<Navigate to="/signin" />} />
    </Routes>
  );
}

export default App;
