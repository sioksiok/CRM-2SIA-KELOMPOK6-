import {
  Home, // Untuk Dashboard
  Megaphone, // Untuk Promo
  Heart, // Untuk For You
  MessageCircleMore, // Untuk Feedback
  MessageCircleQuestion, // Untuk FAQ
  // Hapus ikon yang tidak terpakai dari sini:
  // LayoutDashboard, Users, Box, BarChart2, Settings, User, LogIn, UserPlus, ShoppingBagIcon, Gift
} from 'lucide-react';
import { FaHistory } from 'react-icons/fa';
// Hapus import dari react-icons/fa jika tidak ada ikon Fa yang digunakan lagi:
// import { FaHistory, FaNotesMedical } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', icon: <Home />, path: '/dashboard-user' }, // Ikon rumah untuk Dashboard User
  { name: 'For You', icon: <Heart />, path: '/foryou' }, // Ikon hati untuk For You
  { name: 'Feedback', icon: <MessageCircleMore />, path: '/feedback' }, // Ikon pesan/awan untuk Feedback
  { name: 'Promo Member', icon: <Megaphone/>, path: '/promo-member' },
  // Tambahkan item menu untuk Promo Non Member di sini:
  { name: 'Promo Non Member', icon: <Megaphone/>, path: '/promo-non-member' }, // Menggunakan ikon Megaphone yang sama
  { name: 'Pusat Bantuan & FAQ', icon: <FaHistory />, path: '/pusat-bantuan' },
  // Item menu lain yang tidak ada di gambar dihapus
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-[#F9F3F3] w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      <div className="flex items-center gap-2 mb-8 ml-2">
        {/* Placeholder untuk logo Aira Clinic */}
        {/* Pastikan '/public/logoaira.png' adalah path yang benar ke logo Anda */}
        <img src="/public/logoaira.png" alt="Aira Clinic Logo" className="w-10 h-10" />
        <div className="text-2xl font-bold text-[#800000]">
          Aira Clinic {/* Nama klinik sesuai gambar */}
        </div>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              isActive(item.path)
                ? 'bg-[#EBDADA] text-[#800000] font-semibold' // Warna aktif sesuai gambar
                : 'text-[#800000] hover:bg-[#EBDADA]' // Warna non-aktif sesuai gambar
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;