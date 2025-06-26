

import React from 'react';
import { Star, MessageSquareText } from 'lucide-react'; // Pastikan Anda sudah menginstal lucide-react

const DashboardUser = () => {
  return (
    // Container utama dashboard
    <div className="min-h-screen relative overflow-hidden font-sans">
      {/* Background utama (gambar lokal) */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/bgdashboarduser.jpg')", // Pastikan path benar
          backgroundAttachment: 'fixed', // Efek paralaks ringan saat scroll
        }}
      />

      {/* Overlay maroon semi-transparan dengan gradasi untuk kedalaman */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5D2020] to-[#3b0a0a] opacity-95 z-0" />

      {/* Awan yang lebih dinamis dan terdistribusi */}
      <img
        src="/cloud1.png" // Pastikan path benar
        alt="Cloud 1"
        className="absolute top-10 right-32 w-48 opacity-60 z-10 animate-fade-in-up" // Animasi muncul
        style={{ animationDelay: '0.2s' }}
      />
      <img
        src="/cloud2.png" // Pastikan path benar
        alt="Cloud 2"
        className="absolute top-24 right-10 w-40 opacity-60 z-10 animate-fade-in-up" // Animasi muncul
        style={{ animationDelay: '0.4s' }}
      />
      {/* Awan tambahan untuk kedalaman visual */}
      <img
        src="/cloud1.png" // Pastikan path benar
        alt="Cloud 3"
        className="absolute bottom-20 left-20 w-32 opacity-50 z-10 animate-fade-in-up"
        style={{ animationDelay: '0.6s' }}
      />

      {/* Konten utama dashboard */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Bagian Kiri - Headline */}
        <div className="text-white max-w-md lg:max-w-lg space-y-7 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight font-serif drop-shadow-lg animate-fade-in-left">
            Reveal Your<br />
            Radiance with<br />
            Our Expert<br />
            Care
          </h1>
          <p className="text-lg text-gray-200 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
            Experience world-class treatments designed to enhance your unique beauty.
          </p>
        </div>

        {/* Bagian Tengah - Siluet dan Bulat Maroon yang lebih artistik */}
        <div className="relative w-80 h-[650px] md:w-96 md:h-[700px] bg-[#3b0a0a] rounded-[100px] overflow-hidden shadow-2xl border-4 border-white/20 transform hover:scale-105 transition-transform duration-300">
          <img
            src="/shiluette.png" // Pastikan path benar
            alt="Silhouette"
            // Posisi dan ukuran disesuaikan agar pas di dalam bentuk bulat
            className="absolute top-[50%] left-1/2 w-[140%] h-auto -translate-x-1/2 -translate-y-1/2 opacity-60 filter brightness-[9999%] saturate-0 animate-pulse-slow"
          />
        </div>

        {/* Bagian Kanan - Statistik & Rating */}
        <div className="text-white max-w-sm space-y-8 text-center lg:text-right">
          <div className="animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <p className="text-4xl font-extrabold text-amber-300">+73.K</p> {/* Angka klien bahagia */}
            <p className="text-xl text-gray-200">Happy Clients</p>
          </div>
          <p className="text-base text-gray-300 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            Our team of experts is dedicated to providing you with personalized solutions for radiant, healthy skin.
          </p>

          <div className="flex justify-center lg:justify-end items-center space-x-4 animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
            <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-white shadow-md">
              4.8 <Star className="w-5 h-5 fill-amber-300" /> {/* Ikon bintang dengan warna aksen */}
            </span>
            <button className="bg-white text-[#5D2020] px-5 py-2 rounded-full text-base font-semibold hover:bg-amber-300 hover:text-[#3b0a0a] transition-all duration-300 shadow-lg">
              Guest Testimonials
            </button>
          </div>

          <div className="pt-6 border-t border-white/30 animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-3 text-white">
              <MessageSquareText className="w-6 h-6 text-amber-300" /> {/* Ikon pesan dengan warna aksen */}
              <div>
                <p className="text-3xl font-extrabold text-amber-300">1,200+</p> {/* Angka pesan/informasi */}
                <p className="text-sm text-gray-300">
                  Unlock the secret to lasting beauty with advanced treatments tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;