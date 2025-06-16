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
//import { BsPeople } from 'react-icons/bs'
import { FaHistory, FaNotesMedical, FaTags } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { name: 'Produk', icon: <Box />, path: '/produk' },
  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },
  { name: 'Pelanggan', icon: <Users />, path: '/customer' },
  { name: 'Penjualan', icon: <ShoppingCart />, path: '/penjualan' },
  { name: 'Form Daftar Member', icon: <UserPlus />, path: '/daftar-member' },
  { name: 'Promo Member', icon: <Users />, path: '/promo-member' },
  { name: 'Cek Status Member', icon: <User />, path: '/cek-status-member' },
  { name: 'Rekam Medis', icon: <FaNotesMedical />, path: '/rekam-medis' },
  { name: 'Promo Umum', icon: <FaTags/>, path: '/promo-umum' },
  { name: 'Riwayat Layanan', icon: <FaHistory />, path: '/riwayat-layanan' },
  

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
    <aside className="bg-[#800000] w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      <div className="text-xl font-bold mb-8 text-white">UMKM CRM</div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              isActive(item.path)
                ? 'bg-[#800000] text-white font-semibold'
                : 'text-white hover:bg-[#a63333]'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 text-xs font-semibold text-gray-300">AKUN</div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              isActive(item.path)
                ? 'bg-[#800000] text-white font-semibold'
                : 'text-white hover:bg-[#a63333]'
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

