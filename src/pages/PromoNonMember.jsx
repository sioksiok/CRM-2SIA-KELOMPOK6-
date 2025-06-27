import React from 'react';

const PromoCard = ({ image, title, description }) => (
  <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm overflow-hidden mb-8 p-4 md:p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100">
    {/* Bagian gambar */}
    <div className="md:w-1/3 flex items-center md:pl-0 pl-2">
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-full object-cover rounded-lg"
      />
    </div>

    {/* Bagian teks */}
    <div className="md:w-2/3 p-4">
      <h3 className="text-xl font-bold text-[#1E1B4B] mb-1">{title}</h3>
      <p className="text-sm font-semibold text-[#6C63FF] mb-2">General manager</p>
      <p className="text-gray-600 text-sm leading-relaxed">
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
        className="relative pt-16 pb-20 px-4 md:px-6 text-center"
        style={{
          backgroundImage: 'url("/bg2 1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white opacity-40"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Our Special Offers
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Unlock exclusive beauty experiences with our limited-time promotions. Discover your path to radiant confidence. Explore now.
          </p>
        </div>
      </div>

      {/* Promo Cards */}
      <div className="px-4 md:px-8 py-10 max-w-6xl mx-auto">
        <PromoCard
          image="/laser.jpeg"
          title="Laser Proyellow"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        />
        <PromoCard
          image="/DnaSalmon.jpeg"
          title="DNA Salmon"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        />
      </div>
    </div>
  );
};

export default PromoNonMember;
