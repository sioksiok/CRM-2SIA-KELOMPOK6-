import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import LayoutUser from "./components/LayoutUser";

// Import FaqProvider
import { FaqProvider } from "./FaqContext.jsx";

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
import PusatBantuan from "./pages/PusatBantuan";
import AdminFAQ from "./pages/AdminFAQ";
import KelolaPromoUmum from "./pages/KelolaPromoUmum";

// Halaman User
import DashboardUser from "./pages/DashboardUser";
import FeedbackUser from "./pages/feedbackUser";
import PromoMember from "./pages/PromoMember";
import ForYou from "./pages/ForYou";
import PromoNonMember from "./pages/PromoNonMember";

// Halaman Autentikasi
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// Halaman Pemesanan (BARU)
import PemesananProduk from "./pages/PemesananProduk";
import PemesananLayanan from "./pages/PemesananLayanan";

function App() {
  return (
    <FaqProvider>
      <Routes>
        {/* Layout untuk Admin */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer" element={<CustomerManagement />} />
          <Route path="/penjualan" element={<SalesManagement />} />
          <Route path="/produk" element={<ProductManagement />} />
          <Route path="/cek-status-member" element={<CekStatusMember />} />
          <Route path="/rekam-medis" element={<RekamMedis />} />
          <Route path="/akun" element={<Akun />} />
          <Route path="/manage-promo-admin" element={<ManagePromoAdmin />} />
          <Route path="/kelola-promo-umum" element={<KelolaPromoUmum />} />
          <Route path="/aktivitas-pelanggan" element={<AktivitasPelanggan />} />
          <Route path="/admin-faq" element={<AdminFAQ />} />

          {/* Rute baru untuk Pemesanan Layanan */}
          <Route path="/pemesanan-layanan" element={<PemesananLayanan />} />
        </Route>

        {/* Layout untuk User */}
        <Route element={<LayoutUser />}>
          <Route path="/dashboard-user" element={<DashboardUser />} />
          <Route path="/promo-member" element={<PromoMember />} />
          <Route path="/promo-umum" element={<PromoNonMember />} />
          <Route path="/foryou" element={<ForYou />} />
          <Route path="/feedback" element={<FeedbackUser />} />
          <Route path="/pusat-bantuan" element={<PusatBantuan />} />

          {/* Rute baru untuk Pemesanan Produk */}
          <Route path="/pemesanan-produk" element={<PemesananProduk />} />
        </Route>

        {/* Autentikasi */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Rute Default/Root */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Redirect jika path tidak ditemukan */}
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </FaqProvider>
  );
}

export default App;
