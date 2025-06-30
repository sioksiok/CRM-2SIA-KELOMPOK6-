import React from 'react';

const ForYou = () => {
  const menuItems = [
    {
      label: 'Facial Treatments',
      img: 'https://evamuliaclinic.com/wp-content/uploads/2024/10/gold-facial-cost-procedure-how-to-do.jpg',
    },
    {
      label: 'Anti Aging',
      img: 'https://media.suara.com/pictures/1600x840/2025/04/18/90658-ilustrasi-produk-somethinc-untuk-antiaging.jpg',
    },
    {
      label: 'Laser Hair',
      img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322090/woman-having-laser-hair-removal-on-her-armpit.jpg',
    },
    {
      label: 'Acne & Scars',
      img: 'https://assets.clevelandclinic.org/transform/809e108c-5471-44ef-bddf-96789d2ce937/acneScarringRid-467307287-770x533-1_jpg',
    },
  ];

  const productRecs = [
    {
      title: 'Brightening Serum',
      img: 'https://i.pinimg.com/736x/f9/d9/a8/f9d9a88287a31aecb48112317bd0ac08.jpg',
      desc: 'Mengandung Vitamin C dan Niacinamide untuk meratakan warna kulit dan mengurangi noda hitam.',
    },
    {
      title: 'Hydrating Toner',
      img: 'https://i.pinimg.com/736x/e9/44/08/e944084bc535a39e6aaa5fb9ef0ad2dd.jpg',
      desc: 'Memberikan kelembapan maksimal dan menenangkan kulit iritasi.',
    },
    {
      title: 'Sunscreen Gel SPF 50',
      img: 'https://i.pinimg.com/736x/45/6f/1e/456f1e5a4039b6d5199f104997694238.jpg',
      desc: 'Melindungi kulit dari sinar UV tanpa rasa lengket dan whitecast.',
    },
    {
      title: 'Night Repair Cream',
      img: 'https://i.pinimg.com/736x/0b/f8/43/0bf8433aea856b65cf9ca59faa8ba8ce.jpg',
      desc: 'Krim malam yang membantu regenerasi kulit saat tidur, membuat wajah tampak segar di pagi hari.',
    },
    {
      title: 'Peeling Gel',
      img: 'https://i.pinimg.com/736x/22/b6/00/22b600cfcf1129ac7c7f3879b8656904.jpg',
      desc: 'Mengangkat sel kulit mati dengan lembut dan membantu kulit tampak lebih cerah.',
    },
    {
      title: 'Aloe Vera Soothing Gel',
      img: 'https://i.pinimg.com/736x/d0/9b/a9/d09ba98736754930dd700dd08d9f0ab6.jpg',
      desc: 'Gel serbaguna dengan ekstrak aloe vera untuk melembapkan dan meredakan iritasi.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-white py-10 px-6 lg:px-20">
      {/* Hero Section dengan background */}
      <section className="relative z-10 pb-24">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dk0z4ums3/image/upload/v1736156465/attached_image/ketahui-hal-hal-yang-berkaitan-dengan-perawatan-kulit.jpg)",
          }}
        />

        {/* Konten utama */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-black drop-shadow-md tracking-wide text-center mb-2 font-serif">
            Our Recommendation for You
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Kami menyarankan Treatment dan Product yang mungkin anda suka
          </p>

          <div className="flex flex-col lg:flex-row justify-center gap-10 max-w-7xl mx-auto">
            {/* Sidebar Menu */}
            <div className="flex flex-col space-y-4">
              {menuItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-[#6A1B1A] text-white rounded-xl px-4 py-3 w-60 shadow-md hover:bg-[#8B2C2B] transition"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Main Recommendation */}
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full lg:w-[70%] flex flex-col lg:flex-row items-center gap-8 border border-gray-200">
              <img
                src="/acneseries.png"
                alt="Acne Expert Series"
                className="w-full lg:w-1/2 rounded-xl object-contain"
              />
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-3">Acne Expert Series</h3>
                <p className="text-gray-700 mb-4">
                  Indulge in our customized facial treatments that cater to your unique skin type and concerns.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Deep Cleansing</li>
                  <li>Exfoliation</li>
                  <li>Improves Circulation</li>
                  <li>Hydration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Recommendation Section */}
      <section className="relative z-10 max-w-7xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-[#5D2020] text-center mb-8">Recommended Skincare Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {productRecs.map((product, idx) => (
            <div
              key={idx}
              className="bg-[#FDF4F4] border border-[#E6CCCC] rounded-xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
              <p className="text-sm text-gray-700">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ForYou;
