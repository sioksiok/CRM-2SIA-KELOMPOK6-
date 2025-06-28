import React from 'react';
// Tidak perlu mengimpor User karena tidak ada di gambar ini

const PromoCard = ({ image, title, description }) => (
  <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-6 p-4 hover:shadow-lg transition-shadow duration-300">
    <div className="md:w-1/3 flex justify-center items-center p-2">
      <img
        src={image} // Path gambar promo, contoh: /laser.jpeg
        alt={title}
        className="w-full h-48 md:h-full object-cover rounded-lg"
      />
    </div>
    <div className="md:w-2/3 p-4">
      {/* Warna judul PromoCard sesuai dengan warna merah di gambar */}
      <h3 className="text-xl font-bold text-[#800000] mb-1">{title}</h3>
      {/* Warna "General manager" disesuaikan ke ungu muda pucat yang akurat */}
      <p className="text-sm font-semibold text-[#CFCFE5] mb-2">General manager</p>
      <p className="text-gray-700 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const PromoNonMember = () => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen font-sans">

      {/* Area Hero dengan Background Gambar yang meluas */}
      <div
        className="relative pt-12 pb-20 px-8 text-center" // Padding disesuaikan
        style={{
          backgroundImage: 'url("/bg2 1.png")', // Pastikan path ini benar dari folder public/
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay putih dengan opacity untuk efek samar pada gambar */}
        <div className="absolute inset-0 bg-white opacity-40"></div>

        {/* Konten Hero */}
        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Warna judul hero disesuaikan menjadi gray-800 sesuai gambar */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Our Special Offers
          </h2>
          {/* Warna deskripsi hero disesuaikan menjadi gray-800 sesuai gambar */}
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Unlock exclusive beauty experiences with our limited-time promotions. Discover your path to radiant confidence. Explore now.
          </p>
        </div>
      </div>

      {/* List Promo */}
      <div className="p-8 pt-6 space-y-6">
        <PromoCard
          image="/laser.jpeg" // Path gambar promo, pastikan benar dari folder public/
          title="Laser Proyellow"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        />
        <PromoCard
          image="/DnaSalmon.jpeg" // Path gambar promo, pastikan benar dari folder public/
          title="DNA Salmon"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        />
      </div>
    </div>
  );
};

export default PromoNonMember;