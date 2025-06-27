import React from 'react';
import {
  Home, // Untuk Dashboard
  Megaphone, // Untuk Promo
  Heart, // Untuk For You
  MessageCircleMore, // Untuk Feedback
  MessageCircleQuestion, // Untuk FAQ
} from 'lucide-react';
import { FaHistory } from 'react-icons/fa'; // Tetap import jika FaHistory digunakan di tempat lain, tapi tidak di FAQ menu item

import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  // Pastikan properti 'icon' menyimpan komponen ikon itu sendiri (misal: Home), bukan hasil rendernya (<Home />)
  { name: 'Dashboard', icon: Home, path: '/dashboard-user' },
  { name: 'For You', icon: Heart, path: '/foryou' },
  { name: 'Feedback', icon: MessageCircleMore, path: '/feedback' },
  { name: 'Promo Member', icon: Megaphone, path: '/promo-member' },
  // Ini adalah item menu "Promo Umum" yang Anda maksud, dengan path yang sesuai
  { name: 'Promo Umum', icon: Megaphone, path: '/promo-umum' },
  // Mengubah nama dan ikon agar sesuai dengan gambar untuk FAQ
  { name: 'FAQ', icon: MessageCircleQuestion, path: '/faq' }, // Menggunakan MessageCircleQuestion dan path /faq
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-[#F9F3F3] w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      {/* Logo Aira Clinic */}
      {/* mb-10 untuk memberikan jarak lebih dari logo ke menu item*/}
      <div className="flex items-center gap-2 mb-10 ml-2">
        {/* Path logo, pastikan 'logoaira.png' ada langsung di folder public/*/}
        <img src="/logoaira.png" alt="Aira Clinic Logo" className="w-10 h-10" />
        <div className="text-2xl font-bold text-[#800000]">Aira Clinic</div>
      </div>

      {/* Navigasi */}
      {/* space-y-2 untuk jarak antar item menu yang lebih lapang*/}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          // Ambil komponen ikon dari item (misal: Home, Megaphone)
          const IconComponent = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              // py-3 untuk padding vertikal item menu yang lebih besar
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition ${
                isActive(item.path)
                  ? 'bg-[#EBDADA] text-[#800000] font-semibold' // Warna aktif sesuai gambar
                  : 'text-[#800000] hover:bg-[#EBDADA]' // Warna non-aktif sesuai gambar
              }`}
            >
              {/* Render komponen ikon di sini. Pastikan ikon memiliki warna yang sama dengan teks */}
              <span className="w-5 h-5 flex items-center justify-center">
                {/* Menggunakan IconComponent langsung, dan memastikan warna teks terapkan */}
                {IconComponent && <IconComponent className="text-[#800000]" />}
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