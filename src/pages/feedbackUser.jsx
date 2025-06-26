

import React from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const FeedbackUser = () => {
  // Data dummy untuk feedback
  const feedbacks = [
    {
      id: 1,
      text: "I've been going here for months, and my skin has never looked better. The staff is amazing!",
      author: "Sarah Martinez",
      email: "sarah.gmail.com",
    },
    {
      id: 2,
      text: "The treatments are top-notch, and the clinic atmosphere is so relaxing. Highly recommend!",
      author: "Marcusius",
      email: "marcusius@gmail.com",
    },
    {
      id: 3,
      text: "My skin has never looked better after visiting Aira Clinic. Truly professional and caring staff.",
      author: "Sally Fernandez",
      email: "sally@gmail.com",
    },
    {
      id: 4,
      text: "Exceptional service and results! I'm so happy with my glowing skin now.",
      author: "Jessica Lee",
      email: "jessica@gmail.com",
    },
     {
      id: 5,
      text: "A fantastic experience from start to finish. My go-to place for all my skin care needs.",
      author: "David Chen",
      email: "david@gmail.com",
    },
  ];

  // State untuk mengontrol carousel (jika ingin fungsional)
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const feedbackContainerRef = React.useRef(null);

  const scrollLeft = () => {
    if (feedbackContainerRef.current) {
      feedbackContainerRef.current.scrollBy({
        left: -feedbackContainerRef.current.offsetWidth / 1.2, // Scroll by a portion of width
        behavior: 'smooth',
      });
      setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    }
  };

  const scrollRight = () => {
    if (feedbackContainerRef.current) {
      feedbackContainerRef.current.scrollBy({
        left: feedbackContainerRef.current.offsetWidth / 1.2, // Scroll by a portion of width
        behavior: 'smooth',
      });
      setCurrentIndex((prevIndex) => Math.min(feedbacks.length - 1, prevIndex + 1));
    }
  };

  // Efek untuk update currentIndex saat scroll manual
  React.useEffect(() => {
    const handleScroll = () => {
      if (feedbackContainerRef.current) {
        const scrollLeft = feedbackContainerRef.current.scrollLeft;
        const cardWidth = feedbackContainerRef.current.children[0]?.offsetWidth || 0;
        if (cardWidth > 0) {
          setCurrentIndex(Math.round(scrollLeft / cardWidth));
        }
      }
    };

    const currentRef = feedbackContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [feedbacks.length]);


  return (
    <div className="flex min-h-screen bg-lightgray">
      {/* Sidebar - Diasumsikan Anda memiliki LayoutUser yang me-render Sidebar */}
      {/* <SidebarUser /> */} {/* Jangan render di sini jika Sidebar sudah ada di LayoutUser */}

      {/* Konten Utama - Disini kita atur padding kiri agar tidak tertimpa sidebar */}
      <div className="flex-grow pl-64 p-8"> {/* Sesuaikan pl-XX sesuai lebar sidebar */}
        {/* Header atas (icon user) */}
        <div className="flex justify-end mb-8">
          <Star className="w-8 h-8 text-maroon" /> {/* Contoh: icon user diganti Star karena tidak ada di gambar */}
        </div>

        {/* Kotak Feedback Utama */}
        <div className="relative bg-softwhite rounded-xl shadow-lg overflow-hidden h-[calc(100vh-120px)]"> {/* Tinggi disesuaikan */}
          {/* Background gambar dan overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: "url('/bg-feedback.jpg')", // Pastikan path benar
              filter: 'brightness(0.7) blur(1px)', // Membuat gambar lebih lembut dan redup
            }}
          />
          <div className="absolute inset-0 bg-lightgray/60 z-0" /> {/* Overlay abu-abu semi-transparan */}

          {/* Konten di atas background */}
          <div className="relative z-10 p-10 flex flex-col items-center">
            <h1 className="text-5xl font-bold text-maroon mb-4 drop-shadow-md">Feedback</h1>
            <p className="text-lg text-maroon-text text-center max-w-xl mb-12">
              Bagaimana pengalamanmu di Aira Skin Clinic? Lihat dan tambahkan Feedbackmu di sini!
            </p>

            {/* Carousel Feedback Cards */}
            <div
              ref={feedbackContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide" // scrollbar-hide memerlukan plugin tailwind
              style={{ scrollBehavior: 'smooth' }} // Untuk smooth scroll
            >
              {feedbacks.map((feedback) => (
                <div
                  key={feedback.id}
                  className="flex-none w-80 bg-lightgray-card p-6 rounded-lg shadow-custom snap-center transform hover:scale-[1.02] transition-transform duration-200 cursor-pointer"
                >
                  <p className="text-lightgray-text text-base mb-4 leading-relaxed">
                    "{feedback.text}"
                  </p>
                  <p className="font-semibold text-maroon-text">{feedback.author}</p>
                  <p className="text-sm text-gray-500">{feedback.email}</p>
                </div>
              ))}
            </div>

            {/* Navigasi Carousel (Panah dan Dots) */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={scrollLeft}
                className="p-3 bg-maroon text-softwhite rounded-full shadow-md hover:bg-maroon-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex === 0}
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {feedbacks.map((_, index) => (
                  <span
                    key={index}
                    className={`block w-3 h-3 rounded-full cursor-pointer transition-all duration-200
                      ${index === currentIndex ? 'bg-maroon scale-125' : 'bg-gray-400 hover:bg-gray-500'}`}
                    onClick={() => {
                      // Scroll to specific card
                      if (feedbackContainerRef.current) {
                        const cardWidth = feedbackContainerRef.current.children[0]?.offsetWidth || 0;
                        feedbackContainerRef.current.scrollTo({
                          left: index * cardWidth,
                          behavior: 'smooth',
                        });
                      }
                      setCurrentIndex(index);
                    }}
                  />
                ))}
              </div>

              <button
                onClick={scrollRight}
                className="p-3 bg-maroon text-softwhite rounded-full shadow-md hover:bg-maroon-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex >= feedbacks.length - 1} // Sesuaikan dengan jumlah card yang terlihat
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Tombol Feedback di pojok kanan bawah */}
            <div className="absolute bottom-10 right-10">
              <button className="bg-maroon text-softwhite px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-maroon-light transition-colors duration-200">
                Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackUser;