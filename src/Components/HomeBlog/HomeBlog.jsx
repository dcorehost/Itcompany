import React from "react";

const blogs = [
  {
    id: 1,
    title: "How to Build Scalable Web Applications",
    description:
      "Learn the best practices for building scalable web applications with modern technologies.",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=600&q=80",
    author: "John Doe",
    date: "September 10, 2025",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Mobile-First Design",
    description:
      "Everything you need to know about creating mobile-friendly and responsive designs.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    author: "Jane Smith",
    date: "August 25, 2025",
  },
  {
    id: 3,
    title: "SEO Trends to Watch in 2025",
    description:
      "Stay ahead with the latest SEO trends that will help you rank better and attract organic traffic.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    author: "Michael Johnson",
    date: "September 15, 2025",
  },
];

const HomeBlog = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          <span className="text-[#e53935]">Latest</span>{" "}
          <span className="text-black">Blogs</span>
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {blogs.map(({ id, title, description, image, author, date }) => (
            <article
              key={id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={image} alt={title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 hover:text-[#e53935] transition">
                  {title}
                </h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>By {author}</span>
                  <time>{date}</time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
