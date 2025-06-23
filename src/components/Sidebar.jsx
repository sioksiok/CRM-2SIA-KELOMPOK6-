import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Box,
  BarChart2,
  Settings,
  User,
  LogIn,
  UserPlus,
  Gift,
  ShoppingBagIcon,
} from 'lucide-react'
import { FaHistory, FaNotesMedical, FaTags } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { name: 'Produk', icon: <Box />, path: '/produk' },
  { name: 'Promo Member', icon: <Users />, path: '/promo-member' },
  { name: 'Daftar Kontak Pelanggan', icon: <User/>, path: '/customer' },
  { name: 'Kelola Promo Pelanggan', icon: <User />, path: '/manage-promo-admin' },
  { name: 'Aktivitas Pelanggan', icon: <Users />, path: '/aktivitas-pelanggan' },
  { name: 'Segmentasi Pelanggan', icon: <User />, path: '/cek-status-member' },
  { name: 'Rekam Medis', icon: <FaNotesMedical />, path: '/rekam-medis' },
<<<<<<< HEAD
  { name: 'User', icon: <FaNotesMedical />, path: '/user' },
  { name: 'Pemesanan Layanan & Produk', icon: <ShoppingBagIcon />, path: '/pemesanan-layanan-produk' },
  { name: 'Pusat Bantuan & FAQ', icon: <FaHistory />, path: '/pusat-bantuan' },
<<<<<<< HEAD
  { name: 'User', icon: <User />, path: '/user' },
  
=======
>>>>>>> KELOMPOK6/putri
  
=======
  { name: 'Pemesanan Layanan & Produk', icon: <ShoppingBagIcon />, path: '/pemesanan-layanan-produk' },
  { name: 'Pusat Bantuan & FAQ', icon: <FaHistory />, path: '/pusat-bantuan' },
  { name: 'User', icon: <User />, path: '/user' },
>>>>>>> KELOMPOK6/adelin
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
    <aside className="bg-[#F9F3F3] w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      <div className="text-xl font-bold mb-8 text-[#800000]">UMKM CRM</div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              isActive(item.path)
                ? 'bg-[#EBDADA] text-[#800000] font-semibold'
                : 'text-[#800000] hover:bg-[#EBDADA]'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 text-xs font-semibold text-[#800000]">AKUN</div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              isActive(item.path)
                ? 'bg-[#EBDADA] text-[#800000] font-semibold'
                : 'text-[#800000] hover:bg-[#EBDADA]'
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
