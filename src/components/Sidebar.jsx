import {
  LayoutDashboard,
  Users,
  Box,
  BarChart2,
  Settings,
  User,
  LogIn,
  UserPlus,
  ShoppingBagIcon,
  Gift,
} from 'lucide-react'
import { FaHistory, FaNotesMedical } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { name: 'Daftar Kontak Pelanggan', icon: <User />, path: '/customer' },
  { name: 'Aktivitas Pelanggan', icon: <Users />, path: '/aktivitas-pelanggan' },
  { name: 'Segmentasi Pelanggan', icon: <User />, path: '/cek-status-member' },
  { name: 'Kelola Promo Pelanggan', icon: <Gift />, path: '/manage-promo-admin' }, // Changed icon to Gift based on image context (Promo)
  { name: 'Pemesanan Layanan & Produk', icon: <ShoppingBagIcon />, path: '/pemesanan-layanan-produk' },
  { name: 'Pusat Bantuan & FAQ', icon: <FaHistory />, path: '/pusat-bantuan' },
  { name: 'Dashboard User', icon: <FaHistory />, path: '/dashboard-user' },
]

const Sidebar = () => {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <aside className="bg-[#F9F3F3] w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      <div className="flex items-center gap-2 mb-8 ml-2"> {/* Added flex and gap for icon and text */}
        <img src="/public/logoaira.png" alt="Aira Clinic Logo" className="w-12 h-12" /> {/* Placeholder for logo */}
        <div className="text-2xl font-bold text-[#800000]">
          Aira Skin Clinic
        </div>
      </div>

      <nav className="space-y-1"> {/* Adjusted spacing */}
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
    </aside>
  )
}

export default Sidebar