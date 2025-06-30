import React from 'react';
import { Star, MessageSquareText } from 'lucide-react';

const DashboardUser = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Background */}
      <div
        className="absolute inset-0 h-[900px] bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/bgdashboarduser.jpg')" }}
      />
      <div className="absolute top-0 left-0 w-full h-[900px] bg-[#5D2020]/90 z-[1]" />

      {/* Awan */}
      <img src="/cloud1.png" alt="Cloud 1" className="absolute top-6 right-24 w-40 opacity-70 z-10" />
      <img src="/cloud2.png" alt="Cloud 2" className="absolute top-16 right-8 w-36 opacity-70 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Kiri - Teks */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight font-serif">
            Reveal Your<br />Radiance with<br />Our Expert<br />Care
          </h1>
          <p className="text-lg">
            Experience world-class treatments designed to enhance your unique beauty.
          </p>
        </div>

        {/* Tengah - Siluet */}
        <div className="relative mx-auto w-72 h-[600px] md:w-80 md:h-[650px] bg-[#3b0a0a] rounded-[100px] overflow-hidden shadow-lg">
          <img
            src="/shiluette.png"
            alt="Silhouette"
            className="absolute top-1/2 left-1/2 w-[130%] -translate-x-1/2 -translate-y-1/2 opacity-50 filter brightness-[9999%] saturate-0"
          />
        </div>

        {/* Kanan - Statistik */}
        <div className="text-white space-y-6 text-right">
          <div>
            <p className="text-3xl font-bold">+73.K</p>
            <p className="text-lg">Happy Clients</p>
          </div>
          <p className="text-base">
            Our team of experts is dedicated to providing you with personalized solutions for radiant, healthy skin.
          </p>
          <div className="flex justify-end items-center space-x-4">
            <span className="flex items-center gap-1 border border-white px-3 py-1 rounded-full text-sm font-semibold">
              4.8 <Star className="w-4 h-4 fill-white" />
            </span>
            <button className="border border-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-white hover:text-[#5D2020] transition">
              Guest Testimonials
            </button>
          </div>
          <div className="pt-4 border-t border-white/40">
            <div className="flex justify-end items-center gap-2 text-white">
              <MessageSquareText className="w-5 h-5" />
              <div className="text-right">
                <p className="text-2xl font-extrabold">1,200+</p>
                <p className="text-sm">
                  Unlock the secret to lasting beauty with advanced treatments tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer agar tidak tertutup background absolute */}
      <div className="pt-[100px]" />

      {/* Section: Popular Doctors */}
      <section className="bg-white py-20 px-6 text-[#5D2020] relative z-20">
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          <h2 className="text-3xl font-bold">Popular Doctors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Dr. Ayu Maharani",
                specialty: "Facial Rejuvenation",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DQXHopc1NrFPAxwAHB8rnjI4zaT5zEMKRg&s",
              },
              {
                name: "Dr. Rina Anjani",
                specialty: "Laser Therapy",
                img: "https://www.kavacare.id/assets/uploads/2025/01/Dr.-Lee-Hock-Keong-Top-Dokter-Spesialis-Bedah-Saraf-di-Island-Hospital.png",
              },
              {
                name: "Dr. Sari Wulandari",
                specialty: "Body Sculpting",
                img: "https://media.zcreators.id/crop/photo/indizone/2022/08/23/qEsbd4E/sosok-helena-dokter-cantik-yang-top-riview-bintang-5-kerap-dicurhati-pasien-hal-sensitif32.jpg",
              },
            ].map((doctor, index) => (
              <div key={index} className="bg-[#fef2f2] rounded-xl shadow-md p-6 space-y-3">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-[#5D2020]"
                />
                <h4 className="font-semibold text-lg">{doctor.name}</h4>
                <p className="text-sm text-[#5D2020]/80">{doctor.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Room Comfort */}
      <section className="bg-[#5D2020] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Exceptional Room Comfort</h2>
            <p className="text-white/90">
              Setiap ruangan kami dirancang dengan sentuhan elegan, pencahayaan alami, dan aroma terapi yang menenangkan agar Anda merasa nyaman selama perawatan berlangsung.
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2">
              <li>Privasi maksimal</li>
              <li>Pendingin ruangan & musik relaksasi</li>
              <li>Tempat tidur premium & kebersihan terjaga</li>
            </ul>
          </div>
          <div>
            <img
              src="https://asset-2.tstatic.net/medan/foto/bank/images/AiraSkin-Clinic.jpg"
              alt="Comfort Room"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section: Social Media */}
      <section className="bg-[#fef2f2] text-[#5D2020] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold">Connect with Aira Skin Clinic</h2>
          <p className="text-[#5D2020]/80">Follow us for the latest updates, promos, and beauty tips.</p>
          <div className="flex justify-center items-center gap-10 mt-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/airaskinclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                alt="Instagram"
                className="w-12 h-12"
              />
              <span className="text-sm mt-2 font-medium">Instagram</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                className="w-12 h-12"
              />
              <span className="text-sm mt-2 font-medium">WhatsApp</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/airaskinclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt="Facebook"
                className="w-12 h-12"
              />
              <span className="text-sm mt-2 font-medium">Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardUser;
