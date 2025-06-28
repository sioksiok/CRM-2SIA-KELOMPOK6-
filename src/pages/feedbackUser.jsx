import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FeedbackUser = () => {
  const [feedbacks, setFeedbacks] = React.useState([
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
  ]);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const feedbackContainerRef = React.useRef(null);
  const cardsPerView = 3;

  const [showForm, setShowForm] = React.useState(false);
  const [newFeedback, setNewFeedback] = React.useState({
    text: '',
    author: '',
    email: '',
  });

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
      <div className="relative bg-[#F9F3F3] rounded-xl shadow-lg overflow-hidden h-[calc(100vh-140px)]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/feedback.png')",
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

          {/* Form Tambah Feedback */}
          {showForm && (
            <div className="w-full max-w-lg bg-white rounded-lg p-6 shadow-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-maroon">Tambah Feedback</h2>
              <input
                type="text"
                placeholder="Nama"
                className="w-full mb-3 p-2 border rounded"
                value={newFeedback.author}
                onChange={(e) => setNewFeedback({ ...newFeedback, author: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 p-2 border rounded"
                value={newFeedback.email}
                onChange={(e) => setNewFeedback({ ...newFeedback, email: e.target.value })}
              />
              <textarea
                placeholder="Tulis feedback..."
                className="w-full mb-3 p-2 border rounded"
                rows={3}
                value={newFeedback.text}
                onChange={(e) => setNewFeedback({ ...newFeedback, text: e.target.value })}
              ></textarea>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    const newId = feedbacks.length + 1;
                    setFeedbacks([
                      ...feedbacks,
                      {
                        id: newId,
                        ...newFeedback,
                      },
                    ]);
                    setNewFeedback({ text: '', author: '', email: '' });
                    setShowForm(false);

                    setTimeout(() => {
                      if (feedbackContainerRef.current) {
                        feedbackContainerRef.current.scrollTo({
                          left: feedbackContainerRef.current.scrollWidth,
                          behavior: 'smooth',
                        });
                      }
                    }, 100);
                  }}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Kirim
                </button>
              </div>
            </div>
          )}

          {/* Feedback Cards */}
          <div
            ref={feedbackContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide w-full max-w-4xl"
            style={{ scrollBehavior: 'smooth' }}
          >
            {feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="flex-none w-80 bg-[#5D2020] p-6 rounded-lg shadow-custom snap-center transform hover:scale-[1.02] transition-transform duration-200 cursor-pointer border border-lightgray-border"
              >
                <p className="text-white text-base mb-4 leading-relaxed">
                  "{feedback.text}"
                </p>
                <p className="font-semibold text-white text-lg">{feedback.author}</p>
                <p className="text-white text-sm">{feedback.email}</p>
              </div>
            ))}
          </div>

          {/* Navigasi Panah dan Indikator */}
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

          {/* Tombol Tambah Feedback */}
          <div className="absolute bottom-10 right-10">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#5D2020] text-softwhite px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-maroon-light transition-colors duration-200"
            >
              Tambah Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackUser;
