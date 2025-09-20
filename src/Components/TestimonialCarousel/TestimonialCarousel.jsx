import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Inc.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "This IT company transformed our business with cutting-edge tech solutions. Highly recommended!",
  },
  {
    id: 2,
    name: "James Smith",
    role: "Software Engineer",
    company: "Innovate Labs",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    content:
      "Exceptional service and incredible expertise. They delivered ahead of schedule.",
  },
  {
    id: 3,
    name: "Linda Brown",
    role: "CTO",
    company: "NextGen Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Professional, reliable, and innovative. The team really understood our needs.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "CEO",
    company: "StartUp Ventures",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    content:
      "The best investment we've made this year. Outstanding customer support.",
  },
  {
    id: 5,
    name: "Emma White",
    role: "CTO",
    company: "DevSolutions",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    content:
      "They transformed our idea into a full-fledged, high-performing app. Truly skilled developers.",
  },
  {
    id: 6,
    name: "Michael Green",
    role: "Founder",
    company: "AppWorld",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    content:
      "Excellent communication and timely delivery. Very satisfied with the final product.",
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4, slidesToSlide: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1, slidesToSlide: 1 },
};

const TestimonialCarousel = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        What Our <span className="text-red-600">Clients Say</span>
      </h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        showDots={true}
        arrows={true}
        containerClass="w-full"
        dotListClass="custom-dot-list"
        itemClass="px-4"
      >
        {testimonials.map(({ id, name, role, company, image, content }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-md p-8 text-center max-w-md mx-auto hover:shadow-lg transition duration-500"
          >
            <p className="text-gray-700 italic mb-6">"{content}"</p>
            <img
              src={image}
              alt={name}
              className="mx-auto rounded-full w-20 h-20 object-cover mb-4 border-2 border-red-600"
            />
            <h3 className="text-lg font-semibold text-red-600">{name}</h3>
            <p className="text-gray-500 text-sm">
              {role} - {company}
            </p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default TestimonialCarousel;
