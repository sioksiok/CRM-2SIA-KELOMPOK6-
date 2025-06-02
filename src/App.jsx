import { Routes,Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import SalesManagement from "./pages/SalesManagement";
import ProductManagement from "./pages/Produk";

import FormPendaftaranMember from "./pages/FormPendaftaranMember";
import PromoMember from "./pages/PromoMember";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
         <Route path="/customer" element={<CustomerManagement />} />
        <Route path="/penjualan" element={<SalesManagement />} />
        <Route path="/Produk" element={<ProductManagement />} />
         <Route path="/daftar-member" element={<FormPendaftaranMember />} />
         <Route path="/promo-member" element={<PromoMember />} />
      </Route>
    </Routes>
  );
}

export default App;
