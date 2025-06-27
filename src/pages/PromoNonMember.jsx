import React from 'react';

const PromoNonMember = () => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen font-sans">
      {/* Area dengan background image dan teks tanpa card */}
      <div
        className="relative pt-24 pb-24 px-8 text-center"
        style={{
          backgroundImage: 'url("/bg2 1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay tipis putih untuk efek terang */}
        <div className="absolute inset-0 bg-white opacity-40"></div>

        {/* Teks judul dan deskripsi langsung di atas gambar */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Our Special Offers
          </h2>
          <p className="text-base md:text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Unlock exclusive beauty experiences with our limited-time promotions. Discover your path to radiant confidence. Explore now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoNonMember;
