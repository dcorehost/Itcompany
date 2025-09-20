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
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4, slidesToSlide: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1, slidesToSlide: 1 },
};

const TestimonialCarousel = () => {
  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#e53935] mb-12">
        What Our Clients Say
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
            className="bg-[#e53935] bg-opacity-10 rounded-lg shadow-lg p-8 text-center max-w-md mx-auto"
          >
            <p className="text-gray-800 italic mb-6">"{content}"</p>
            <img
              src={image}
              alt={name}
              className="mx-auto rounded-full w-20 h-20 object-cover mb-4 border-4 border-[#e53935]"
            />
            <h3 className="text-lg font-semibold text-[#e53935]">{name}</h3>
            <p className="text-gray-600 text-sm">
              {role} - {company}
            </p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default TestimonialCarousel;
