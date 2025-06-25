import {
  LayoutDashboard,
  Users,         // untuk pelanggan
  ShoppingCart,  // untuk penjualan
  Box,           // untuk produk
  BarChart2,     // untuk laporan
  Settings,      // untuk pengaturan akun
  User,
  LogIn,
  UserPlus,
  Gift,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { name: 'Produk', icon: <Box />, path: '/produk' },
  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },
  { name: 'Daftar Kontak Pelanggan', icon: <User/>, path: '/customer' },
  { name: 'Promo Member', icon: <Gift />, path: '/promo-member' },
  { name: 'Kelola Promo Pelanggan', icon: <User />, path: '/manage-promo-admin' },
  { name: 'Aktivitas Pelanggan', icon: <Users />, path: '/aktivitas-pelanggan' },
  { name: 'Segmentasi Pelanggan', icon: <User />, path: '/cek-status-member' },
  { name: 'Rekam Medis', icon: <FaNotesMedical />, path: '/rekam-medis' },
  { name: 'Pemesanan Layanan & Produk', icon: <ShoppingBagIcon />, path: '/pemesanan-layanan-produk' },
  { name: 'User', icon: <FaNotesMedical />, path: '/user' },
  { name: 'Pusat Bantuan & FAQ', icon: <FaHistory />, path: '/pusat-bantuan' },
]

const accountItems = [
  { name: 'Pengaturan Akun', icon: <Settings />, path: '/akun' },
  { name: 'Sign In', icon: <LogIn />, path: '/signin' },
  { name: 'Sign Up', icon: <UserPlus />, path: '/signup' },
]

const Sidebar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      <div className="text-xl font-bold mb-8 text-purple-700">UMKM CRM</div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? 'bg-purple-200 text-purple-800 font-semibold'
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? 'bg-purple-200 text-purple-800 font-semibold'
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar

