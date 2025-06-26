import React from 'react';
import { Star, MessageSquareText } from 'lucide-react';

const DashboardUser = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background utama (gambar lokal) */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/bgdashboarduser.jpg')",
        }}
      />

      {/* Overlay maroon semi-transparan */}
      <div className="absolute inset-0 bg-[#5D2020] opacity-90 z-0" />

  {/* Awan kanan atas (lebih besar tapi masih proporsional) */}
<img
  src="/cloud1.png"
  alt="Cloud 1"
  className="absolute top-6 right-24 w-40 opacity-70 z-10"
/>
<img
  src="/cloud2.png"
  alt="Cloud 2"
  className="absolute top-16 right-8 w-36 opacity-70 z-10"
/>



      {/* Konten utama */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Kiri - Headline */}
        <div className="text-white max-w-md lg:max-w-lg space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight font-serif">
            Reveal Your<br />
            Radiance with<br />
            Our Expert<br />
            Care
          </h1>
          <p className="text-lg">
            Experience world-class treatments designed to enhance your unique beauty.
          </p>
        </div>

        {/* Tengah - Siluet dan bulat maroon */}
        <div className="relative w-72 h-[600px] md:w-80 md:h-[650px] bg-[#3b0a0a] rounded-[100px] overflow-hidden shadow-lg">
          <img
            src="/public/shiluette.png"
            alt="Silhouette"
            className="absolute top-[48%] left-1/2 w-[130%] h-auto -translate-x-1/2 -translate-y-1/2 opacity-50 filter brightness-[9999%] saturate-0"
          />
        </div>

        {/* Kanan - Statistik & Rating */}
        <div className="text-white max-w-sm space-y-6 text-right">
          <div>
            <p className="text-3xl font-bold">+73.K</p>
            <p className="text-lg">Happy Clients</p>
          </div>
          <p className="text-base">
            Our team of experts is dedicated to providing you with personalized solutions for radiant, healthy skin.
          </p>

          <div className="flex justify-end items-center space-x-4">
            <span className="flex items-center gap-1 border border-white px-3 py-1 rounded-full text-sm font-semibold">
              4.8 <Star className="w-4 h-4 fill-white" />
            </span>
            <button className="border border-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-white hover:text-[#5D2020] transition">
              Guest Testimonials
            </button>
          </div>

          <div className="pt-4 border-t border-white/40">
            <div className="flex justify-end items-center gap-2 text-white">
              <MessageSquareText className="w-5 h-5" />
              <div>
                <p className="text-2xl font-extrabold">1,200+</p>
                <p className="text-sm">
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
