import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import LayoutUser from "./components/LayoutUser"; // Ini adalah komponen yang seharusnya membungkus SidebarUser

// Halaman Admin
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import SalesManagement from "./pages/SalesManagement";
import ProductManagement from "./pages/Produk";
// import PromoMember from "./pages/PromoMember"; // PromoMember sudah ada di layout user, jadi tidak perlu di sini lagi jika memang untuk user
import CekStatusMember from "./pages/CekStatusMember";
import RekamMedis from "./pages/RekamMedis";
import Akun from "./pages/Akun";
import ManagePromoAdmin from "./pages/ManagePromoAdmin";
import AktivitasPelanggan from "./pages/AktivitasPelanggan";
import PemesananLayanan from "./pages/PemesananLayananProduk";
import PusatBantuan from "./pages/PusatBantuan"; // PusatBantuan sudah ada di layout user
import User from "./pages/User"; // Ini mungkin halaman user management untuk admin?

// Halaman User
import DashboardUser from "./pages/DashboardUser";
import FeedbackUser from "./pages/feedbackUser";
import PromoMember from "./pages/PromoMember"; // Pastikan ini adalah PromoMember versi user
import ForYou from "./pages/ForYou";
import PromoNonMember from "./pages/PromoNonMember"; // <-- IMPORT BARU UNTUK PROMO NON MEMBER
// Import PusatBantuan juga jika memang ada versi untuk user yang berbeda dari admin atau sama
// import PusatBantuanUser from "./pages/PusatBantuanUser"; // Jika ada versi user yang berbeda

// Halaman Autentikasi
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <Routes>
      {/* Layout Admin */}
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
        {/* Jika PusatBantuan ini untuk admin, biarkan di sini. Jika hanya untuk user, hapus. */}
        {/* <Route path="/pusat-bantuan-admin" element={<PusatBantuan />} /> */}
        {/* <Route path="/user-admin" element={<User />} /> // Jika ini halaman user management untuk admin */}
      </Route>

      {/* Layout User */}
      {/* Asumsi LayoutUser akan merender Sidebar di dalamnya */}
      <Route element={<LayoutUser />}>
        <Route path="/dashboard-user" element={<DashboardUser />} />
        <Route path="/promo-member" element={<PromoMember />} />
        <Route path="/foryou" element={<ForYou />} />
        <Route path="/feedback" element={<FeedbackUser />} />
        <Route path="/pusat-bantuan" element={<PusatBantuan />} /> {/* Asumsi PusatBantuan ini adalah versi user */}
        <Route path="/promo-non-member" element={<PromoNonMember/>} /> {/* <-- RUTE BARU */}
      </Route>

      {/* Halaman Autentikasi */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Redirect jika tidak ditemukan */}
      {/* Anda mungkin ingin mengarahkan ke dashboard user atau signin jika path tidak cocok */}
      <Route path="*" element={<Navigate to="/signin" />} />
    </Routes>
  );
}

export default App;