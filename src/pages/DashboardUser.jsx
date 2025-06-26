import React from 'react';
import { Star } from 'lucide-react';

const DashboardUser = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-0 m-0">
      <main className="flex-1 p-6 overflow-hidden w-full h-full"> {/* overflow-hidden untuk menjaga konten tetap dalam batas */}
        {/* Bagian Hero */}
        <div className="relative bg-[#8B0000] rounded-xl shadow-lg p-8 w-full h-full flex flex-col justify-between overflow-hidden">
          {/* Background overlay untuk opacity jika ada gambar latar belakang */}
          <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('/path/to/your/hero-background-image.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>

          {/* Konten utama di atas latar belakang */}
          <div className="relative z-10 flex flex-col h-full w-full">

            {/* Baris atas: Teks Kiri, Silhouette Tengah, Metrik Kanan Atas */}
            <div className="flex flex-grow justify-between items-start">
              {/* Konten Teks Kiri */}
              <div className="text-white w-[40%] pr-8 flex flex-col justify-start pt-4"> {/* Menyesuaikan lebar */}
                <h1 className="text-5xl font-extrabold leading-tight mb-4">
                  Reveal Your Radiance with Our Expert Care
                </h1>
                <p className="text-lg mb-8">
                  Experience world-class treatments designed to enhance your unique beauty.
                </p>
              </div>

              {/* Silhouette di tengah */}
              <div className="flex-1 flex justify-center items-center h-full absolute inset-0"> {/* Menggunakan absolute untuk menempatkan di tengah */}
                <img
                  src="/public/siluettegirl.png" // Pastikan Anda memiliki gambar ini di folder public
                  alt="Silhouette of a person"
                  className="h-full object-contain relative z-20" // Menyesuaikan tinggi dan memastikan di atas overlay
                  style={{ maxHeight: '90%', width: 'auto' }} // Mengatur ukuran agar sesuai visual gambar
                />
              </div>

              {/* Metrik Kanan Atas dan Testimonial */}
              <div className="text-white w-[25%] flex flex-col items-end text-right space-y-4 pt-4 relative z-10"> {/* Menyesuaikan lebar */}
                {/* Cloud-like shapes */}
                <div className="flex flex-col space-y-2 items-end">
                    <div className="bg-white bg-opacity-30 rounded-full w-14 h-14 flex items-center justify-center"></div>
                    <div className="bg-white bg-opacity-30 rounded-full w-14 h-14 flex items-center justify-center"></div>
                </div>
                <div className="mt-4">
                  <p className="text-4xl font-bold">+73.K</p>
                  <p className="text-lg">Happy Clients</p>
                </div>
                <p className="text-base mt-4">
                  Our team of experts is dedicated to providing you with personalized
                  solutions for radiant, healthy skin.
                </p>
                <div className="flex items-center space-x-2 mt-4 self-end">
                  <span className="text-lg font-semibold flex items-center gap-1">4.8 <Star className="w-4 h-4 fill-current text-white" /></span>
                  <button className="bg-white text-[#8B0000] px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                    Guest Testimonials
                  </button>
                </div>
              </div>
            </div>

            {/* Baris bawah: Metrik Kiri Bawah & Kotak Kanan Bawah */}
            <div className="flex justify-between items-end w-full mt-auto pb-4"> {/* Menyesuaikan padding bawah */}
              <div className="text-white w-1/2"> {/* Menyesuaikan lebar */}
                <p className="text-5xl font-extrabold">1,200+</p>
                <p className="text-lg">
                  Unlock the secret to lasting beauty with advanced treatments tailored to your needs.
                </p>
              </div>
              <div className="flex space-x-4">
                <div className="w-32 h-20 bg-white bg-opacity-20 rounded-lg"></div>
                <div className="w-32 h-20 bg-white bg-opacity-20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardUser;
