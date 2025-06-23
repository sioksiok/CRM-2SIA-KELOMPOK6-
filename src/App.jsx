import { Routes,Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import PromoMember from "./pages/PromoMember";
import ManagePromoAdmin from "./pages/ManagePromoAdmin";
import AktivitasPelanggan from "./pages/AktivitasPelanggan";
import PemesananLayanan from "./pages/PemesananLayananProduk";
import PusatBantuan from "./pages/PusatBantuan";
import User from "./pages/User";

// Auth pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
         <Route path="/customer" element={<CustomerManagement />} />
         <Route path="/promo-member" element={<PromoMember />} />
         <Route path="/manage-promo-admin" element={<ManagePromoAdmin />} />
         <Route path="/aktivitas-pelanggan" element={<AktivitasPelanggan />} />
        <Route path="/customer" element={<CustomerManagement />} />
        <Route path="/penjualan" element={<SalesManagement />} />
        <Route path="/produk" element={<ProductManagement />} />
        <Route path="/promo-member" element={<PromoMember />} />
        <Route path="/cek-status-member" element={<CekStatusMember />} />
        <Route path="/rekam-medis" element={<RekamMedis />} />
        <Route path="/pusat-bantuan" element={<PusatBantuan />} />
        <Route path="/pemesanan-layanan-produk" element={<PemesananLayanan />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/user" element={<User />} />
        <Route path="/manage-promo-admin" element={<ManagePromoAdmin />} />
        <Route path="/aktivitas-pelanggan" element={<AktivitasPelanggan />} />
      </Route>
    </Routes>
  );
}

export default App;
