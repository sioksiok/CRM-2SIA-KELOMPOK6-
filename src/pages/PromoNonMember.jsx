import React from 'react';
import { User } from 'lucide-react'; // Import ikon User

// Anda bisa mengimpor gambar seperti ini jika berada di folder src/
// import backgroundImage from '../assets/images/bg2 1.png'; // Contoh jika gambar di src/assets/images/
// ATAU, jika gambar di public/ (seperti kasus Anda), kita akan gunakan path langsung.

const PromoCard = ({ image, title, description }) => (
  <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-6 p-4">
    <div className="md:w-1/3 flex justify-center items-center p-2">
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-full object-cover rounded-lg"
      />
    </div>
    <div className="md:w-2/3 p-4">
      <h3 className="text-xl font-semibold text-[#800000] mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">General manager</p>
      <p className="text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const PromoNonMember = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      {/* Header di atas konten utama */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-gray-700">promo non member</p>
        </div>
        <div className="flex items-center">
          <User className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#800000]" />
        </div>
      </div>

      {/* Bagian utama Explore Our Special Offers */}
      <div
        className="bg-white rounded-lg shadow-lg p-6 mb-8 text-center relative" // Tambahkan 'relative' untuk background-image
        style={{
          // Mengatur gambar latar belakang
          // Pastikan path ini benar sesuai lokasi 'bg2 1.png' di folder public Anda
          backgroundImage: 'url("/bg2 1.png")',
          backgroundSize: 'cover', // Agar gambar mencakup seluruh area
          backgroundPosition: 'center', // Agar gambar di tengah
          backgroundRepeat: 'no-repeat', // Agar gambar tidak berulang
        }}
      >
        {/* Overlay untuk memberikan efek samar pada gambar latar belakang */}
        <div className="absolute inset-0 bg-white opacity-70 rounded-lg"></div> {/* Sesuaikan opacity untuk tingkat kesamaran */}

        <div className="relative z-10"> {/* Konten utama di atas overlay */}
          <h2 className="text-3xl font-bold text-[#800000] mb-4">Explore Our Special Offers</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Unlock exclusive beauty experiences with our limited-time promotions. Discover your path to radiant confidence. Explore now.
          </p>
        </div>
      </div>

      {/* Daftar Promo */}
      <div className="space-y-6">
        <PromoCard
          image="/laser.jpeg" // Path yang benar jika 'laser.jpeg' ada langsung di 'public/'
          title="Laser Proyellow"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        />
        <PromoCard
          image="/DnaSalmon.jpeg" // Path yang benar jika 'DnaSalmon.jpeg' ada langsung di 'public/'
          title="DNA Salmon"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        />
      </div>
    </div>
  );
};

export default PromoNonMember;