import React from 'react';
import {
  Home,
  Megaphone,
  Heart,
  MessageCircleMore,
  MessageCircleQuestion,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', icon: Home, path: '/dashboard-user' },
  { name: 'For You', icon: Heart, path: '/foryou' },
  { name: 'Feedback', icon: MessageCircleMore, path: '/feedback' },
  { name: 'Promo Member', icon: Megaphone, path: '/promo-member' },
  { name: 'Promo Umum', icon: Megaphone, path: '/promo-umum' },
  { name: 'Pusat Bantuan', icon: MessageCircleQuestion, path: '/pusat-bantuan' },
];

const SidebarUser = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-[#F9F3F3] w-64 h-screen px-4 py-6 hidden md:block overflow-hidden">
      {/* Logo Aira Clinic */}
      <div className="flex items-center gap-2 mb-10 ml-2">
        <img src="/logoaira.png" alt="Aira Clinic Logo" className="w-10 h-10" />
        <div className="text-2xl font-bold text-[#800000]">Aira Clinic</div>
      </div>

      {/* Navigasi */}
      <nav className="space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={`${item.name}-${index}`}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition ${
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

export default SidebarUser;
