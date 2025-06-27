import React from 'react';

const PromoCard = ({ image, title, description }) => (
  <div className="flex flex-col md:flex-row bg-white rounded-lg shadow border border-gray-200 mb-8 p-4 hover:shadow-md transition-shadow duration-300">
    {/* Gambar promo */}
    <div className="md:w-[200px] md:mr-6 flex justify-center items-center">
      <img
        src={image}
        alt={title}
        className="rounded-md w-full h-40 object-cover"
      />
    </div>

    {/* Konten promo */}
    <div className="flex-1 mt-4 md:mt-0">
      <h3 className="text-lg font-bold text-[#1E1B4B] mb-1">{title}</h3>
      <p className="text-sm font-medium text-[#6C63FF] mb-2">General manager</p>
      <p className="text-sm text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const PromoNonMember = () => {
  return (
    <div className="flex-1 bg-white min-h-screen font-sans">
      {/* Hero section */}
      <div
        className="relative py-16 px-6 text-center"
        style={{
          backgroundImage: 'url("/bg2 1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Our Special Offers
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Unlock exclusive beauty experiences with our limited-time promotions. Discover your path to radiant confidence. Explore now.
          </p>
        </div>
      </div>

      {/* Daftar promo */}
      <div className="px-6 py-10 max-w-4xl mx-auto">
        <PromoCard
          image="/laser.jpeg"
          title="Laser Proyellow"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        />
        <PromoCard
          image="/DnaSalmon.jpeg"
          title="DNA Salmon"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        />
      </div>
    </div>
  );
};

export default PromoNonMember;
