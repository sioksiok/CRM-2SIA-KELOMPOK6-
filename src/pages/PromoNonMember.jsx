import React from 'react';
import { User } from 'lucide-react'; // Import ikon User

const PromoCard = ({ image, title, description }) => (
  <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-6 p-4">
    <div className="md:w-1/3 flex justify-center items-center p-2">
      {/* Gambar promo - Pastikan path ini benar sesuai lokasi di public/ */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-full object-cover rounded-lg"
      />
    </div>
    <div className="md:w-2/3 p-4">
      <h3 className="text-xl font-semibold text-[#800000] mb-1">{title}</h3>
      {/* Revisi Warna Teks "General manager" sesuai gambar */}
      <p className="text-sm text-[#D8BFD8] mb-3">General manager</p>
      <p className="text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const PromoNonMember = () => {
  return (
    // Bagian ini adalah konten utama yang akan dirender di dalam LayoutUser
    // LayoutUser akan menyediakan Sidebar dan struktur flex dasar
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      {/* Header di atas konten utama */}
      {/* Berisi teks "promo non member" di kiri dan ikon user di kanan */}
      <div className="flex justify-between items-center mb-6">
        {/* Konten kiri: "promo non member" */}
        <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-gray-700">promo non member</p>
        </div>

        {/* Konten kanan: Ikon user */}
        <div className="flex items-center">
          <User className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#800000]" />
        </div>
      </div>

      {/* Bagian utama "Explore Our Special Offers" dengan gambar latar belakang samar */}
      <div
        className="bg-white rounded-lg shadow-lg p-6 mb-8 text-center relative"
        style={{
          // Path gambar latar belakang, pastikan 'bg2 1.png' ada langsung di folder public/
          backgroundImage: 'url("/bg2 1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay putih dengan opacity untuk efek gambar latar belakang samar */}
        <div className="absolute inset-0 bg-white opacity-70 rounded-lg"></div>

        {/* Konten teks berada di atas overlay */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-[#800000] mb-4">Explore Our Special Offers</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Unlock exclusive beauty experiences with our limited-time promotions. Discover your path to radiant confidence. Explore now.
          </p>
        </div>
      </div>

      {/* Daftar Kartu Promo */}
      <div className="space-y-6">
        <PromoCard
          // Path gambar promo, pastikan 'laser.jpeg' ada langsung di folder public/
          image="/laser.jpeg"
          title="Laser Proyellow"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        />
        <PromoCard
          // Path gambar promo, pastikan 'DnaSalmon.jpeg' ada langsung di folder public/
          image="/DnaSalmon.jpeg"
          title="DNA Salmon"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        />
        {/* Tambahkan PromoCard lain jika ada promo tambahan */}
      </div>
    </div>
  );
};

export default PromoNonMember;