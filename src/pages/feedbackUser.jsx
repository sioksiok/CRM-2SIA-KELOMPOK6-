// src/pages/FeedbackUser.jsx

import React from 'react';
import { ArrowLeft, ArrowRight, User as UserIcon } from 'lucide-react';

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
    {
      id: 6,
      text: "The best clinic I've ever visited. My skin has improved dramatically, thanks to their expert care.",
      author: "Emily White",
      email: "emily@gmail.com",
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const feedbackContainerRef = React.useRef(null);
  const cardsPerView = 3;

  const scrollLeft = () => {
    if (feedbackContainerRef.current) {
      const cardElement = feedbackContainerRef.current.children[0];
      const cardTotalWidth = cardElement ? cardElement.offsetWidth + 24 : 0;
      feedbackContainerRef.current.scrollBy({
        left: -cardTotalWidth * (cardsPerView - 1),
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (feedbackContainerRef.current) {
      const cardElement = feedbackContainerRef.current.children[0];
      const cardTotalWidth = cardElement ? cardElement.offsetWidth + 24 : 0;
      feedbackContainerRef.current.scrollBy({
        left: cardTotalWidth * (cardsPerView - 1),
        behavior: 'smooth',
      });
    }
  };

  React.useEffect(() => {
    const updateCurrentIndex = () => {
      if (feedbackContainerRef.current) {
        const scrollPos = feedbackContainerRef.current.scrollLeft;
        const cardElement = feedbackContainerRef.current.children[0];
        const cardTotalWidth = cardElement ? cardElement.offsetWidth + 24 : 0;
        
        if (cardTotalWidth > 0) {
            const newIndex = Math.round(scrollPos / cardTotalWidth);
            setCurrentIndex(newIndex);
        }
      }
    };

    const currentRef = feedbackContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', updateCurrentIndex);
      updateCurrentIndex();
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', updateCurrentIndex);
      }
    };
  }, [feedbacks.length]);

  return (
    <div className="p-0">
      <div className="relative bg-softwhite rounded-xl shadow-lg overflow-hidden h-[calc(100vh-140px)]">
        {/* Background gambar dan overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            // MENGGUNAKAN NAMA FILE feedback.png DARI FOLDER PUBLIC/
            backgroundImage: "url('/feedback.png')", // <--- PERUBAHAN DI SINI
            filter: 'brightness(0.7) blur(1px)',
            backgroundPosition: 'center 40%',
          }}
        />
        <div className="absolute inset-0 bg-lightgray/60 z-0" />

        <div className="relative z-10 p-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold text-maroon mb-4 drop-shadow-md">Feedback</h1>
          <p className="text-lg text-maroon-text text-center max-w-xl mb-12">
            Bagaimana pengalamanmu di Aira Skin Clinic? Lihat dan tambahkan Feedbackmu di sini!
          </p>

          <div
            ref={feedbackContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide w-full max-w-4xl"
            style={{ scrollBehavior: 'smooth' }}
          >
            {feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="flex-none w-80 bg-lightgray-card p-6 rounded-lg shadow-custom snap-center transform hover:scale-[1.02] transition-transform duration-200 cursor-pointer border border-lightgray-border"
              >
                <p className="text-lightgray-text text-base mb-4 leading-relaxed">
                  "{feedback.text}"
                </p>
                <p className="font-semibold text-maroon-text text-lg">{feedback.author}</p>
                <p className="text-sm text-gray-500">{feedback.email}</p>
              </div>
            ))}
          </div>

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
                    if (feedbackContainerRef.current) {
                      const cardElement = feedbackContainerRef.current.children[index];
                      if (cardElement) {
                        feedbackContainerRef.current.scrollTo({
                          left: cardElement.offsetLeft - (feedbackContainerRef.current.offsetWidth - cardElement.offsetWidth) / 2,
                          behavior: 'smooth',
                        });
                      }
                    }
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="p-3 bg-maroon text-softwhite rounded-full shadow-md hover:bg-maroon-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex >= feedbacks.length - cardsPerView}
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute bottom-10 right-10">
            <button className="bg-maroon text-softwhite px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-maroon-light transition-colors duration-200">
              Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackUser;