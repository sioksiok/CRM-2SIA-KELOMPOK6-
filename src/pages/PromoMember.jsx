import React from "react";

const promoMember = [
  {
    id: 1,
    judul: "Advanced Yellow Laser",
    kategoriMember: "Gold",
    hargaAwal: 250000,
    hargaPromo: 175000,
    deskripsi:
      "Explore the therapeutic benefits of hand massages and how they can alleviate tension and stress. Learn simple techniques to treat your hands to some well-deserved TLC.",
    gambar:
      "https://cdn0-production-images-kly.akamaized.net/TFXhZ5fAer2iNHyJIk_EA9-oW44=/500x281/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3447308/original/076990400_1620103503-photo-1570172619644-dfd03ed5d881.jpeg",
  },
  {
    id: 2,
    judul: "Ultimate Eye Peel",
    kategoriMember: "Silver",
    hargaAwal: 200000,
    hargaPromo: 145000,
    deskripsi:
      "Dive into the world of hair treatment and discover effective ways to revitalize and maintain your hair’s natural beauty. From deep conditioning to scalp massage, we’ll guide you to the perfect hair care routine.",
    gambar:
      "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/ZbontmHR7NPLXxj_Q36GA/original/085539400_1639129436-Prosedur_Radiofrequency_Setrika_Wajah_untuk_Perawatan_Kulit.jpg",
  },
  {
    id: 3,
    judul: "CO2 Acne Scar",
    kategoriMember: "Platinum",
    hargaAwal: 300000,
    hargaPromo: 210000,
    deskripsi:
      "Embark on a journey of relaxation and rejuvenation with body massages. Uncover the physical and mental benefits of this timeless practice, from relieving muscle tension to reducing stress.",
    gambar:
      "https://i0.wp.com/zaloraadmin.wpcomstaging.com/wp-content/uploads/2023/11/treatment-wajah.png?resize=1200%2C620&ssl=1",
  },
  {
    id: 4,
    judul: "Acne Injection",
    kategoriMember: "Gold & Platinum",
    hargaAwal: 220000,
    hargaPromo: 150000,
    deskripsi:
      "Dive into the world of facial massages and the rejuvenating effects of eye masks. Discover how these skincare rituals can enhance your natural beauty, reduce puffiness.",
    gambar:
      "https://blog.atome.id/wp-content/uploads/2021/11/Simak-10-Perawatan-Kulit-Wajah-Yang-Populer-Dan-Kekinian.jpg",
  },
];

export default function PromoMember() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-center text-gray-800 mb-3">
        Our Special Offers for Members
      </h1>
      <p className="text-center text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-12">
        Unlock exclusive beauty experiences with our limited-time promotions.
        Discover your path to radiant confidence. Explore now.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Kolom Kiri: 3 Card vertikal */}
        <div className="flex flex-col space-y-6">
          {promoMember.slice(0, 3).map((promo) => (
            <div
              key={promo.id}
              className="bg-white border border-gray-300 rounded-md shadow-md overflow-hidden flex"
            >
              <img
                src={promo.gambar}
                alt={promo.judul}
                className="w-1/3 object-cover h-full"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-md font-semibold text-gray-800 mb-1">
                    {promo.judul}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1">
                    {promo.deskripsi}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-indigo-600 font-medium mb-1">
                    Member Level: {promo.kategoriMember}
                  </p>
                  <p className="text-sm text-gray-500 line-through">
                    Rp {promo.hargaAwal.toLocaleString("id-ID")}
                  </p>
                  <p className="text-base text-pink-600 font-bold">
                    Rp {promo.hargaPromo.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kolom Kanan: Card panjang */}
        <div className="row-span-3 bg-white border border-gray-300 rounded-md shadow-md overflow-hidden flex flex-col">
          <img
            src={promoMember[3].gambar}
            alt={promoMember[3].judul}
            className="h-72 w-full object-cover"
          />
          <div className="p-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {promoMember[3].judul}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {promoMember[3].deskripsi}
              </p>
            </div>
            <div>
              <p className="text-sm text-indigo-600 font-medium mb-1">
                Member Level: {promoMember[3].kategoriMember}
              </p>
              <p className="text-sm text-gray-500 line-through">
                Rp {promoMember[3].hargaAwal.toLocaleString("id-ID")}
              </p>
              <p className="text-lg text-pink-600 font-bold">
                Rp {promoMember[3].hargaPromo.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
