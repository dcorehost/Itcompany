// import React, { useState } from "react";
// import homebanner1 from "../../assets/homebanner1.jpg";
// import homebanner2 from "../../assets/homebanner2.jpg";
// import homebanner3 from "../../assets/homebanner3.jpg";
// import homebanner4 from "../../assets/homebanner4.jpg";
// import homebanner5 from "../../assets/homebanner5.jpg";
// import homebanner6 from "../../assets/homebanner6.jpg";
// import npllogo from "../../assets/npllogo.png";



// const images = [homebanner1, homebanner2, homebanner3, homebanner4, homebanner5, homebanner6];

// const HomeBanner = () => {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
//   const nextSlide = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <div className="h-full w-full absolute top-0 left-0 z-10 bg-[#e5393580]" />
//       {images.map((img, idx) => (
//         <div
//           key={idx}
//           className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
//             current === idx ? "opacity-100 z-20" : "opacity-0 z-0"
//           }`}
//         >
//           <img
//             src={img}
//             alt={`slide-${idx}`}
//             className="object-cover w-full h-full"
//           />
//           {current === idx && (
//             <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center">
//               <img src={npllogo} alt="Logo" className="h-16 mb-8 drop-shadow-lg" />
//               <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl">
//                 Welcome to <span className="text-[#e53935] bg-white/70 rounded px-4">IT Solutions</span>
//               </h1>
//               <p className="text-lg md:text-2xl text-white bg-[#e53935cc] py-2 px-6 rounded-md font-medium shadow-lg mb-12">
//                 Empowering Businesses with Next-Gen Technology
//               </p>
//             </div>
//           )}
//         </div>
//       ))}
//       {/* Controls */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-6 z-40 -translate-y-1/2 bg-white/70 hover:bg-white text-[#e53935] rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
//         aria-label="Previous Slide"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-6 z-40 -translate-y-1/2 bg-white/70 hover:bg-white text-[#e53935] rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
//         aria-label="Next Slide"
//       >
//         &#8594;
//       </button>
//       {/* Indicators */}
//       <div className="absolute bottom-10 left-1/2 z-50 -translate-x-1/2 flex gap-3">
//         {images.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrent(idx)}
//             className={`w-4 h-4 rounded-full border-2 ${
//               current === idx
//                 ? "bg-[#e53935] border-white"
//                 : "bg-white/70 border-[#e53935]"
//             } transition`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeBanner;
import React, { useState, useEffect } from "react";
import homebanner1 from "../../assets/homebanner1.jpg";
import homebanner2 from "../../assets/homebanner2.jpg";
import homebanner3 from "../../assets/homebanner3.jpg";
import homebanner4 from "../../assets/homebanner4.jpg";
import homebanner5 from "../../assets/homebanner5.jpg";
import homebanner6 from "../../assets/homebanner6.jpg";
import npllogo from "../../assets/npllogo.png";

const images = [homebanner1, homebanner2, homebanner3, homebanner4, homebanner5, homebanner6];

const HomeBanner = () => {
  const [current, setCurrent] = useState(0);

  // Autoplay effect: change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000 ms = 5 seconds

    // Cleanup interval on component unmount or current change
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="h-full w-full absolute top-0 left-0 z-10 bg-[#e5393580]" />
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
            current === idx ? "opacity-100 z-20" : "opacity-0 z-0"
          }`}
        >
          <img src={img} alt={`slide-${idx}`} className="object-cover w-full h-full" />
          {current === idx && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center">
              <img src={npllogo} alt="Logo" className="h-16 mb-8 drop-shadow-lg" />
              <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl">
                Welcome to <span className="text-[#e53935] bg-white/70 rounded px-4">IT Solutions</span>
              </h1>
              <p className="text-lg md:text-2xl text-white bg-[#e53935cc] py-2 px-6 rounded-md font-medium shadow-lg mb-12">
                Empowering Businesses with Next-Gen Technology
              </p>
            </div>
          )}
        </div>
      ))}
      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 z-40 -translate-y-1/2 bg-white/70 hover:bg-white text-[#e53935] rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 z-40 -translate-y-1/2 bg-white/70 hover:bg-white text-[#e53935] rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
        aria-label="Next Slide"
      >
        &#8594;
      </button>
      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 z-50 -translate-x-1/2 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full border-2 ${
              current === idx ? "bg-[#e53935] border-white" : "bg-white/70 border-[#e53935]"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
