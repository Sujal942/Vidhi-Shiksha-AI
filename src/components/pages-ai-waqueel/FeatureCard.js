// import React from "react";

// const FeatureCard = () => {
//   return (
//     <div className="flex flex-wrap gap-12 justify-center">
//       {/* First Card */}
//       <div className="bg-transparent border border-gray-700 p-6 rounded-3xl shadow-2xl shadow-gray-700 flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:border-teal-500">
//         <img
//           src="https://framerusercontent.com/images/7XTzud4nMHuO4cW6c8iplnBQGQ.gif?scale-down-to=1024"
//           alt="Ask AI Lawyer"
//           className="w-full h-auto max-w-xs rounded-lg hover:animate-pulse transition-transform duration-300 ease-in-out"
//         />
//         <div className="text-center mt-4">
//           <h1 className="text-xl font-medium text-white">Ask AI Lawyer</h1>
//           <p className="text-md mt-2 text-white">
//             Legal research never been easier. Have a conversation with your
//             virtual assistant, gain insights and simple answers to your complex
//             questions in real-time.
//           </p>
//         </div>
//       </div>

//       {/* Second Card */}
//       <div className="bg-transparent border border-gray-700 p-6 rounded-3xl shadow-xl shadow-gray-600 flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:border-teal-500">
//         <img
//           src="https://framerusercontent.com/images/W8IHdHUPOwkBzfTiaWhNCKwfyeo.gif?scale-down-to=1024"
//           alt="AI document handling"
//           className="w-full h-auto max-w-xs rounded-lg hover:animate-pulse transition-transform duration-300 ease-in-out"
//         />
//         <div className="text-center mt-4">
//           <h1 className="text-xl font-medium text-white">
//             AI document handling
//           </h1>
//           <p className="text-md mt-2 text-white">
//             The fastest way to summarize agreements, convert images to text,
//             translate documents, and more.
//           </p>
//         </div>
//       </div>

//       {/* Third Card */}
//       <div className="bg-transparent border border-gray-700 p-6 rounded-3xl shadow-xl shadow-gray-600 flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:border-teal-500">
//         <img
//           src="https://framerusercontent.com/images/7ktKLpfri5nPJt6fYmVLMuECw.gif?scale-down-to=1024"
//           alt="Internet-powered"
//           className="w-full h-auto max-w-xs rounded-lg hover:animate-pulse transition-transform duration-300 ease-in-out"
//         />
//         <div className="text-center mt-4">
//           <h1 className="text-xl font-medium text-white">Internet-powered</h1>
//           <p className="text-md mt-2 text-white">
//             Rapid web research, completing hours of analysis in seconds.
//           </p>
//         </div>
//       </div>

//       {/* Fourth Card */}
//       <div className="bg-transparent border border-gray-700 p-6 rounded-3xl shadow-xl shadow-gray-600 flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:border-teal-500">
//         <img
//           src="https://framerusercontent.com/images/RebYWPuoxNzLpsK8eM1Y6R2tU4.gif?scale-down-to=1024"
//           alt="Multi-platform"
//           className="w-full h-auto max-w-xs rounded-lg hover:animate-pulse transition-transform duration-300 ease-in-out"
//         />
//         <div className="text-center mt-4">
//           <h1 className="text-xl font-medium text-white">Multi-platform</h1>
//           <p className="text-md mt-2 text-white">
//             Access our platform with a simple tap – on the web, iOS, or Android.
//           </p>
//         </div>
//       </div>

//       {/* Fifth Card */}
//       <div className="bg-transparent border border-gray-700 p-6 rounded-3xl shadow-xl shadow-gray-600 flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:border-teal-500">
//         <img
//           src="https://framerusercontent.com/images/amc33KXVJZ4HfilQVZrYACJYMvY.gif?scale-down-to=1024"
//           alt="Personalized for you"
//           className="w-full h-auto max-w-xs rounded-lg hover:animate-pulse transition-transform duration-300 ease-in-out"
//         />
//         <div className="text-center mt-4">
//           <h1 className="text-xl font-medium text-white">
//             Personalized for you
//           </h1>
//           <p className="text-md mt-2 text-white">
//             Customize and educate it to match your unique preferences.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureCard;

import React, { useState } from "react";

const FeatureCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Ask AI Lawyer",
      description:
        "Legal research has never been easier. Have a conversation with your virtual assistant and gain insights and answers to your complex questions in real-time.",
      image:
        "https://framerusercontent.com/images/7XTzud4nMHuO4cW6c8iplnBQGQ.gif?scale-down-to=1024",
    },
    {
      title: "AI Document Handling",
      description:
        "The fastest way to summarize agreements, convert images to text, translate documents, and more.",
      image:
        "https://framerusercontent.com/images/W8IHdHUPOwkBzfTiaWhNCKwfyeo.gif?scale-down-to=1024",
    },
    {
      title: "Internet-powered",
      description:
        "Rapid web research, completing hours of analysis in seconds.",
      image:
        "https://framerusercontent.com/images/7ktKLpfri5nPJt6fYmVLMuECw.gif?scale-down-to=1024",
    },
    {
      title: "Multi-platform",
      description:
        "Access our platform with a simple tap – on the web, iOS, or Android.",
      image:
        "https://framerusercontent.com/images/RebYWPuoxNzLpsK8eM1Y6R2tU4.gif?scale-down-to=1024",
    },
    {
      title: "Personalized for You",
      description: "Customize and educate it to match your unique preferences.",
      image:
        "https://framerusercontent.com/images/amc33KXVJZ4HfilQVZrYACJYMvY.gif?scale-down-to=1024",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-screen max-w-screen-xl mx-auto">
      {/* Slider Container */}
      <div className="flex justify-center items-center h-full">
        <div className="bg-transparent border border-gray-700 p-6 rounded-3xl shadow-2xl shadow-gray-700 flex flex-col justify-center items-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 min-w-[750px] min-h-[600px] transition-transform duration-500 ease-in-out">
          <img
            src={cards[currentIndex].image}
            alt={cards[currentIndex].title}
            className="w-full h-auto max-w-xs rounded-lg hover:animate-pulse transition-transform duration-300 ease-in-out"
          />
          <div className="text-center mt-4">
            <h1 className="text-xl font-medium text-white">
              {cards[currentIndex].title}
            </h1>
            <p className="text-md mt-2 text-white">
              {cards[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-3xl p-4 rounded-full shadow-lg hover:bg-slate-400"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-3xl p-4 rounded-full shadow-lg hover:bg-slate-400"
      >
        &#8594;
      </button>
    </div>
  );
};

export default FeatureCard;
