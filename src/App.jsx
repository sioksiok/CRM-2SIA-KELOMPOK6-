import { Routes,Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import SalesManagement from "./pages/SalesManagement";
import ProductManagement from "./pages/Produk";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
         <Route path="/customer" element={<CustomerManagement />} />
        <Route path="/penjualan" element={<SalesManagement />} />
        <Route path="/Produk" element={<ProductManagement />} />
      </Route>
    </Routes>
  );
}

export default App;
