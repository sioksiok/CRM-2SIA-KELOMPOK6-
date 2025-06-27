import React from 'react';
import { User } from 'lucide-react'; // Ikon user

const PromoCard = ({ image, title, description }) => (
  <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden mb-6 p-4 hover:shadow-lg transition-shadow duration-300">
    <div className="md:w-1/3 flex justify-center items-center p-2">
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-full object-cover rounded-lg"
      />
    </div>
    <div className="md:w-2/3 p-4">
      <h3 className="text-xl font-bold text-[#800000] mb-1">{title}</h3>
      <p className="text-sm font-semibold text-[#6E6EBE] mb-2">General manager</p>
      <p className="text-gray-700 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </div>
);

const PromoNonMember = () => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen font-sans">
      <div
        className="relative pt-6 pb-20 px-8"
        style={{
          backgroundImage: 'url("/bg2 1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white opacity-40"></div>

        <div className="flex justify-between items-center mb-6 relative z-10">
          <p className="text-sm font-semibold text-gray-700">promo non member</p>
          <User className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#800000]" />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-[#800000] mb-4">Explore Our Special Offers</h2>
          <p className="text-gray-700 text-base max-w-2xl mx-auto leading-relaxed">
            Unlock exclusive beauty experiences with our limited-time promotions. Discover your path to radiant confidence. Explore now.
          </p>
        </div>
      </div>

      <div className="p-8 pt-0 space-y-6">
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
