import React from 'react';
import { Star, LayoutTemplate, Box } from 'lucide-react';

const DashboardUser = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1 p-4 w-full h-full relative">
        <div
          className="relative rounded-xl shadow-lg p-8 w-full h-full flex flex-col justify-between overflow-hidden"
          style={{
            backgroundImage: "url('/public/red-texture-background.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#8B0000'
          }}
        >
          <div className="absolute inset-0 bg-[#8B0000] opacity-80 z-0"></div>

          <div className="absolute inset-x-0 bottom-0 flex justify-center items-end z-10 h-full">
            <img
              src="/public/siluettegirl.png"
              alt="Silhouette of a person"
              className="h-[95%] w-auto object-contain invert"
            />
          </div>

          <div className="relative z-20 flex flex-col h-full w-full">
            <div className="flex justify-between items-start flex-grow">
              <div className="text-white w-1/2 md:w-[40%] pr-8 flex flex-col justify-start pt-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                  Reveal Your Radiance with Our Expert Care
                </h1>
                <p className="text-base sm:text-lg mb-8">
                  Experience world-class treatments designed to enhance your unique beauty.
                </p>
              </div>

              <div className="text-white w-1/2 md:w-[25%] flex flex-col items-end text-right space-y-4 pt-4">
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

            <div className="flex justify-between items-end w-full mt-auto pb-4">
              <div className="text-white w-1/2">
                <div className="flex items-center mb-2">
                  <LayoutTemplate className="w-6 h-6 mr-2" />
                  <div className="flex-1 border-t border-white border-opacity-50"></div>
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">1,200+</p>
                <p className="text-base sm:text-lg">
                  Unlock the secret to lasting beauty with advanced treatments tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>

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