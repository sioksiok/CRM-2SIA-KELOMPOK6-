import {
  Home, // Dashboard
  Megaphone, // Promo
  Heart, // For You
  MessageCircleMore, // Feedback
} from 'lucide-react';
import { FaHistory } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', icon: <Home />, path: '/dashboard-user' },
  { name: 'For You', icon: <Heart />, path: '/foryou' },
  { name: 'Feedback', icon: <MessageCircleMore />, path: '/feedback' },
  { name: 'Promo Member', icon: <Megaphone />, path: '/promo-member' },
  { name: 'Promo Umum', icon: <Megaphone />, path: '/promo-non-member' },
  { name: 'Pusat Bantuan & FAQ', icon: <FaHistory />, path: '/pusat-bantuan' },
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-[#F9F3F3] w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      {/* Logo Aira Clinic */}
      <div className="flex items-center gap-2 mb-8 ml-2">
        <img src="/logoaira.png" alt="Aira Clinic Logo" className="w-10 h-10" />
        <div className="text-2xl font-bold text-[#800000]">Aira Clinic</div>
      </div>

      {/* Navigasi */}
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
    </aside>
  );
};

export default Sidebar;
