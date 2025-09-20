// import React from "react";
// import { FaMobileAlt, FaLaptopCode, FaWordpressSimple } from "react-icons/fa";

// const services = [
//     {
//         id: 1,
//         icon: FaMobileAlt,
//         title: "App Development",
//         description:
//             "Scalable, high-performance mobile apps built for your business growth.",
//     },
//     {
//         id: 2,
//         icon: FaLaptopCode,
//         title: "Web Development",
//         description:
//             "Modern, responsive websites that captivate and engage your audience.",
//     },
//     {
//         id: 3,
//         icon: FaWordpressSimple,
//         title: "WordPress Development",
//         description:
//             "Custom themes and plugins providing robust content management solutions.",
//     },
// ];

// const OurServices = () => {
//     return (
//         <section className="bg-white py-20 px-6 max-w-7xl mx-auto text-center">
//             <h2 className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-[#e53935] via-red-600 to-[#ff6659] bg-clip-text text-transparent animate-text-slide">
//                 Our Services
//             </h2>
//             <div className="flex flex-col md:flex-row justify-center items-start gap-24">
//                 {services.map(({ id, icon: Icon, title, description }, index) => (
//                     <div  key={id}  className="flex flex-col items-center md:items-start max-w-xs text-left" style={{ animationDelay: `${index * 0.3}s` }}    className="animate-fadeInUp" >
//                         <div className="mb-6 animate-bounce-slow text-[#e53935]">
//                             <Icon className="w-20 h-20" />
//                         </div>
//                         <h3 className="text-3xl font-semibold text-[#e53935] mb-4 tracking-wide">
//                             {title}
//                         </h3>
//                         <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
//                     </div>
//                 ))}
//             </div>

//             <style jsx>{`
//         .animate-bounce-slow {
//           animation: bounce 2.5s infinite;
//         }
//         @keyframes bounce {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-15%);
//           }
//         }
//         .animate-fadeInUp {
//           opacity: 0;
//           transform: translateY(20px);
//           animation: fadeInUp 0.8s forwards;
//         }
//         .animate-fadeInUp:nth-child(1) {
//           animation-delay: 0.1s;
//         }
//         .animate-fadeInUp:nth-child(2) {
//           animation-delay: 0.4s;
//         }
//         .animate-fadeInUp:nth-child(3) {
//           animation-delay: 0.7s;
//         }
//         @keyframes fadeInUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-text-slide {
//           background-size: 200% 200%;
//           animation: textSlide 6s linear infinite;
//         }
//         @keyframes textSlide {
//           0% {
//             background-position: 0% center;
//           }
//           100% {
//             background-position: 200% center;
//           }
//         }
//       `}</style>
//         </section>
//     );
// };

// export default OurServices;
import React from "react";
import { FaMobileAlt, FaLaptopCode, FaWordpressSimple } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: FaMobileAlt,
    title: "App Development",
    description:
      "Scalable, high-performance mobile apps built for your business growth.",
  },
  {
    id: 2,
    icon: FaLaptopCode,
    title: "Web Development",
    description:
      "Modern, responsive websites that captivate and engage your audience.",
  },
  {
    id: 3,
    icon: FaWordpressSimple,
    title: "WordPress Development",
    description:
      "Custom themes and plugins providing robust content management solutions.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-white py-20 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-[#e53935] via-red-600 to-[#ff6659] bg-clip-text text-transparent animate-text-slide">
        Our Services
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-24">
        {services.map(({ id, icon: Icon, title, description }, index) => (
          <div
            key={id}
            className={`flex flex-col items-center md:items-start max-w-xs text-left animate-fadeInUp`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="mb-6 animate-bounce-slow text-[#e53935]">
              <Icon className="w-20 h-20" />
            </div>
            <h3 className="text-3xl font-semibold text-[#e53935] mb-4 tracking-wide">
              {title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 2.5s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15%);
          }
        }
        .animate-fadeInUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s forwards;
        }
        .animate-fadeInUp:nth-child(1) {
          animation-delay: 0.1s;
        }
        .animate-fadeInUp:nth-child(2) {
          animation-delay: 0.4s;
        }
        .animate-fadeInUp:nth-child(3) {
          animation-delay: 0.7s;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-text-slide {
          background-size: 200% 200%;
          animation: textSlide 6s linear infinite;
        }
        @keyframes textSlide {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
};

export default OurServices;
