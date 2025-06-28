// App.jsx (Tidak ada perubahan yang diperlukan pada kode ini)
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
import AdminFAQ from "./pages/AdminFAQ";
// import User from "./pages/User"; // Tidak ada rute untuk User di bawah ini, jika tidak dipakai, bisa dihapus

// Halaman User
import DashboardUser from "./pages/DashboardUser";
import FeedbackUser from "./pages/feedbackUser";
import PromoMember from "./pages/PromoMember";
import ForYou from "./pages/ForYou";
import PromoNonMember from "./pages/PromoNonMember"; // Sudah diimpor dengan benar

// Halaman Autentikasi
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import KelolaPromoUmum from "./pages/KelolaPromoUmum";

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
        <Route path="/kelola-promo-umum" element={<KelolaPromoUmum />} />
        <Route path="/aktivitas-pelanggan" element={<AktivitasPelanggan />} />
        <Route path="/admin-faq" element={<AdminFAQ />} />
      </Route>

      {/* Layout untuk User */}
      <Route element={<LayoutUser />}>
        <Route path="/dashboard-user" element={<DashboardUser />} />
        <Route path="/promo-member" element={<PromoMember />} />
        {/* Rute untuk Promo Umum (yang merender PromoNonMember) */}
        <Route path="/promo-umum" element={<PromoNonMember />} />
        <Route path="/foryou" element={<ForYou />} />
        <Route path="/feedback" element={<FeedbackUser />} />
        <Route path="/pusat-bantuan" element={<PusatBantuan />} />
        {/* Jika ada halaman User dari import di atas, tapi tidak ada rute di sini, bisa dihapus importnya */}
        {/* <Route path="/user-profile" element={<User />} /> */}
      </Route>

      {/* Autentikasi */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Rute Default/Root */}
      {/* Ini adalah halaman yang akan muncul pertama kali atau jika URL tidak cocok */}
      <Route path="/" element={<Navigate to="/signin" />} />

      {/* Redirect jika path tidak ditemukan (Catch-all route) */}
      {/* Pastikan tidak ada typo di link sidebar atau rute lainnya */}
      <Route path="*" element={<Navigate to="/signin" />} />
    </Routes>
  );
}

export default App;