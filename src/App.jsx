import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

// Halaman-halaman utama
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import SalesManagement from "./pages/SalesManagement";
import ProductManagement from "./pages/Produk";
import PromoMember from "./pages/PromoMember";
import CekStatusMember from "./pages/CekStatusMember";
<<<<<<< HEAD
=======
import RekamMedis from "./pages/rekamMedis";
import Akun from "./pages/Akun";
import ManagePromoAdmin from "./pages/ManagePromoAdmin";
import AktivitasPelanggan from "./pages/AktivitasPelanggan";
import PemesananLayanan from "./pages/PemesananLayananProduk";
import PusatBantuan from "./pages/PusatBantuan";
import User from "./pages/User";

>>>>>>> KELOMPOK6/putri
import Akun from "./pages/Akun";
import ManagePromoAdmin from "./pages/ManagePromoAdmin";
import AktivitasPelanggan from "./pages/AktivitasPelanggan";
import PemesananLayanan from "./pages/PemesananLayananProduk";
<<<<<<< HEAD
import PusatBantuan from "./pages/PusatBantuan";
import RekamMedis from "./pages/RekamMedis";
import User from "./pages/List User";

// Auth pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp"; 
=======
>>>>>>> KELOMPOK6/putri

function App() {
  return (
    <Routes>
      {/* Routes dengan layout utama */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer" element={<CustomerManagement />} />
        <Route path="/penjualan" element={<SalesManagement />} />
        <Route path="/produk" element={<ProductManagement />} />
        <Route path="/promo-member" element={<PromoMember />} />
        <Route path="/cek-status-member" element={<CekStatusMember />} />
        <Route path="/rekam-medis" element={<RekamMedis/>} />
        <Route path="/pusat-bantuan" element={<PusatBantuan />} />
        <Route path="/pemesanan-layanan-produk" element={<PemesananLayanan />} />
        <Route path="/akun" element={<Akun />} />
<<<<<<< HEAD
        <Route path="/manage-promo-admin" element={<ManagePromoAdmin />} />
        <Route path="/aktivitas-pelanggan" element={<AktivitasPelanggan />} />
        <Route path="/user" element={<User />} />
=======
        <Route path="/user" element={<User />} />
        <Route path="/manage-promo-admin" element={<ManagePromoAdmin />} />
        <Route path="/aktivitas-pelanggan" element={<AktivitasPelanggan />} />
>>>>>>> KELOMPOK6/putri
      </Route>

      {/* Routes tanpa layout */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
