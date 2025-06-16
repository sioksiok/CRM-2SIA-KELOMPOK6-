import { Routes,Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import PromoMember from "./pages/PromoMember";
import ManagePromoAdmin from "./pages/ManagePromoAdmin";
import AktivitasPelanggan from "./pages/AktivitasPelanggan";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
         <Route path="/customer" element={<CustomerManagement />} />
         <Route path="/promo-member" element={<PromoMember />} />
         <Route path="/manage-promo-admin" element={<ManagePromoAdmin />} />
         <Route path="/aktivitas-pelanggan" element={<AktivitasPelanggan />} />
      </Route>
    </Routes>
  );
}

export default App;
