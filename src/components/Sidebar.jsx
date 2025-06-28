import {
  LayoutDashboard,
  Users,
  Box,
  Gift,
  User,
  ShoppingBagIcon,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Daftar Kontak Pelanggan', icon: User, path: '/customer' },
  { name: 'Aktivitas Pelanggan', icon: Users, path: '/aktivitas-pelanggan' },
  { name: 'Segmentasi Pelanggan', icon: User, path: '/cek-status-member' },
  { name: 'Kelola Promo Pelanggan', icon: Gift, path: '/manage-promo-admin' },
  { name: 'Pemesanan Layanan & Produk', icon: ShoppingBagIcon, path: '/pemesanan-layanan-produk' },
  { name: 'Admin FAQ', icon: Box, path: '/admin-faq' },
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-[#F9F3F3] w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      {/* Logo dan Judul */}
      <div className="flex items-center gap-2 mb-8 ml-2">
        <img src="/logoaira.png" alt="Aira Clinic Logo" className="w-10 h-10" />
        <div className="text-2xl font-bold text-[#800000]">Aira Skin Clinic</div>
      </div>

      {/* Menu Navigasi */}
      <nav className="space-y-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={`${item.name}-${index}`}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive(item.path)
                  ? 'bg-[#EBDADA] text-[#800000] font-semibold'
                  : 'text-[#800000] hover:bg-[#EBDADA]'
              }`}
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <Icon className="text-[#800000]" />
              </span>
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
