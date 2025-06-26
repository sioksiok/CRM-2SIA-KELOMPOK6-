import React from 'react';
import { Star, LayoutTemplate, Box } from 'lucide-react'; // Menambahkan ikon LayoutTemplate/Box untuk placeholder

const DashboardUser = () => {
  return (
    // Container utama untuk keseluruhan halaman
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Anda yang sudah ada di luar komponen ini akan berada di sini */}

      {/*
        Main content area:
        - flex-1: Memastikan `main` akan mengisi sisa ruang vertikal yang tersedia setelah header Anda.
        - p-4: Padding di sekitar area merah.
        - w-full h-full: Memastikan `main` mengambil tinggi penuh yang tersedia.
        - relative: Penting agar elemen yang diposisikan absolute di dalamnya (seperti kotak di kanan bawah) bisa berfungsi.
      */}
      <main className="flex-1 p-4 w-full h-full relative">
        {/*
          Bagian Hero (Area Merah):
          - relative: Untuk penempatan elemen absolut di dalamnya.
          - rounded-xl shadow-lg: Sudut membulat dan bayangan.
          - w-full h-full: Memastikan hero section mengisi 100% tinggi dari parent `main`.
          - overflow-hidden: Penting agar siluet yang mungkin sedikit keluar tidak menyebabkan scroll.
          - background-image: Menggunakan style inline untuk background bertekstur.
            GANTI '/public/red-texture-background.png' dengan path gambar tekstur merah Anda!
        */}
        <div
          className="relative rounded-xl shadow-lg p-8 w-full h-full flex flex-col justify-between overflow-hidden"
          style={{
            backgroundImage: "url('/public/red-texture-background.png')", // GANTI DENGAN PATH GAMBAR TEKSTUR ANDA
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#8B0000' // Warna dasar jika gambar tidak load
          }}
        >
          {/*
            Overlay untuk menjaga warna merah dominan di atas tekstur.
            Sesuaikan opacity jika tekstur terlalu terang/gelap.
          */}
          <div className="absolute inset-0 bg-[#8B0000] opacity-80 z-0"></div>

          {/*
            Silhouette Container:
            - absolute inset-x-0 bottom-0: Memposisikan di tengah horizontal dan menempel di bagian bawah hero section.
            - flex justify-center items-end: Menyelaraskan gambar siluet di tengah dan menempel di bawah.
            - z-10: Memastikan siluet berada di atas background overlay.
            - h-full: Memberikan tinggi penuh dari kontainer hero untuk siluet.
          */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center items-end z-10 h-full">
            {/*
              Gambar Siluet:
              - src="/public/siluettegirl.png": Pastikan path ke gambar Anda benar.
              - h-[95%]: Membuat siluet sangat besar, mengisi 95% tinggi dari kontainer induknya.
              - w-auto: Mempertahankan aspek rasio gambar.
              - object-contain: Memastikan seluruh gambar siluet terlihat.
              - invert: **Penting!** Mengubah warna siluet dari hitam (asumsi) menjadi putih, sesuai `image_b72e1a.png`.
              - Ini akan diletakkan di atas background tekstur.
            */}
            <img
              src="/public/siluettegirl.png" // PASTIKAN PATH GAMBAR INI BENAR!
              alt="Silhouette of a person"
              className="h-[95%] w-auto object-contain invert" // 'invert' untuk siluet putih
            />
          </div>

          {/* Konten utama di atas latar belakang dan siluet */}
          {/* relative z-20 agar konten ini selalu di atas siluet dan overlay background */}
          <div className="relative z-20 flex flex-col h-full w-full">

            {/* Baris atas: Teks Kiri dan Metrik Kanan Atas */}
            <div className="flex justify-between items-start flex-grow">
              {/* Konten Teks Kiri */}
              <div className="text-white w-1/2 md:w-[40%] pr-8 flex flex-col justify-start pt-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                  Reveal Your Radiance with Our Expert Care
                </h1>
                <p className="text-base sm:text-lg mb-8">
                  Experience world-class treatments designed to enhance your unique beauty.
                </p>
              </div>

              {/* Metrik Kanan Atas dan Testimonial */}
              <div className="text-white w-1/2 md:w-[25%] flex flex-col items-end text-right space-y-4 pt-4">
                {/* Cloud-like shapes (sekarang solid putih) */}
                <div className="flex flex-col space-y-2 items-end">
                    <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center"></div>
                    <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center"></div>
                </div>
                <div className="mt-4">
                  <p className="text-3xl sm:text-4xl font-bold">+73.K</p>
                  <p className="text-base sm:text-lg">Happy Clients</p>
                </div>
                <p className="text-sm sm:text-base mt-4">
                  Our team of experts is dedicated to providing you with personalized
                  solutions for radiant, healthy skin.
                </p>
                <div className="flex items-center space-x-2 mt-4 self-end">
                  <span className="text-base sm:text-lg font-semibold flex items-center gap-1">4.8 <Star className="w-4 h-4 fill-current text-white" /></span>
                  <button className="bg-white text-[#8B0000] px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                    Guest Testimonials
                  </button>
                </div>
              </div>
            </div>

            {/* Baris bawah: Metrik Kiri Bawah & Kotak Kanan Bawah (dipindahkan keluar div merah) */}
            <div className="flex justify-between items-end w-full mt-auto pb-4">
              <div className="text-white w-1/2">
                {/* Ikon dan Garis Horizontal Baru */}
                <div className="flex items-center mb-2">
                  <LayoutTemplate className="w-6 h-6 mr-2" /> {/* Placeholder ikon, ganti dengan ikon yang tepat */}
                  <div className="flex-1 border-t border-white border-opacity-50"></div> {/* Garis horizontal */}
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">1,200+</p>
                <p className="text-base sm:text-lg">
                  Unlock the secret to lasting beauty with advanced treatments tailored to your needs.
                </p>
              </div>
              {/* Kotak-kotak kanan bawah akan dipindahkan keluar dari div ini */}
            </div>
          </div>
        </div>

        {/*
          Kotak-kotak di kanan bawah (DIPINDAHKAN KELUAR DARI DIV MERAH):
          - absolute: Diposisikan relatif terhadap parent `main`.
          - -bottom-10 right-8: Mengatur posisi agar sedikit keluar dari bawah area merah. Sesuaikan nilai ini.
          - z-30: Memastikan kotak berada di atas elemen lain jika ada tumpang tindih.
        */}
        <div className="absolute -bottom-10 right-8 flex space-x-4 z-30">
          <div className="w-32 h-20 bg-white rounded-lg shadow">
              <div className="flex items-center justify-center h-full"></div>
          </div>
          <div className="w-32 h-20 bg-white rounded-lg shadow">
              <div className="flex items-center justify-center h-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardUser;