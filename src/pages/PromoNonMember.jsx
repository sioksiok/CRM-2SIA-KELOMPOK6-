import React from 'react';

const PromoCard = ({ image, title, description, originalPrice, discountedPrice }) => {
  const discount = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-6 p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="md:w-1/3 flex justify-center items-center p-2">
        <img
          src={image}
          alt={title}
          className="w-full h-48 md:h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:w-2/3 p-4">
        <h3 className="text-xl font-bold text-[#800000] mb-1">{title}</h3>
        <p className="text-sm font-semibold text-[#CFCFE5] mb-2">General manager</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-3">{description}</p>

        <div className="flex items-center gap-4 mt-2">
          <p className="text-gray-500 line-through text-sm">
            Rp {originalPrice.toLocaleString("id-ID")}
          </p>
          <p className="text-red-600 font-bold text-lg">
            Rp {discountedPrice.toLocaleString("id-ID")}
          </p>
          <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        </div>
      </div>
    </div>
  );
};

const PromoNonMember = () => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen font-sans">

      {/* Hero Section */}
      <div
        className="relative pt-12 pb-20 px-8 text-center"
        style={{
          backgroundImage: 'url("/bg2 1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white opacity-40"></div>
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Our Special Offers
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Unlock exclusive beauty experiences with our limited-time promotions. Discover your path to radiant confidence. Explore now.
          </p>
        </div>
      </div>

      {/* Promo List */}
      <div className="p-8 pt-6 space-y-6">
        <PromoCard
          image="/laser.jpeg"
          title="Laser Proyellow"
          description="Laser Proyellow membantu mengatasi masalah pigmentasi dan peremajaan kulit."
          originalPrice={850000}
          discountedPrice={595000}
        />
        <PromoCard
          image="/DnaSalmon.jpeg"
          title="DNA Salmon"
          description="DNA Salmon mendorong regenerasi sel kulit dan memperbaiki tekstur wajah secara alami."
          originalPrice={1050000}
          discountedPrice={725000}
        />
      </div>
    </div>
  );
};

export default PromoNonMember;
