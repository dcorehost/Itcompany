import React from "react";
import careerBg from "../../assets/careerpositions.jpeg"; // apna image path yaha replace karo

export default function OpenPositions() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-Time",
      desc: "Work with React, Tailwind, and modern frameworks to build stunning user interfaces.",
    },
    {
      title: "Backend Developer",
      location: "New Delhi, India",
      type: "Full-Time",
      desc: "Build scalable APIs, work with Node.js, Express, and databases for enterprise projects.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Contract",
      desc: "Design engaging user experiences and collaborate with developers for seamless integration.",
    },
    {
      title: "Project Manager",
      location: "Hybrid (Delhi NCR)",
      type: "Full-Time",
      desc: "Oversee client projects, manage timelines, and ensure smooth communication.",
    },
    {
      title: "App Developer",
      location: "Remote",
      type: "Full-Time",
      desc: "Develop robust Android & iOS applications with a focus on performance and design.",
    },
  ];

  return (
    <section
      className="py-24 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${careerBg})` }}
    >
      
     <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Open <span className="text-red-500">Positions</span>
          </h2>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
            Explore exciting opportunities to join our growing team. We’re
            always on the lookout for passionate and talented individuals.
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start justify-between bg-white/90 backdrop-blur-sm border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex-1 mb-4 lg:mb-0">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {job.title}
                </h3>
                <p className="text-gray-700 mt-2">{job.desc}</p>
                <div className="flex flex-wrap gap-4 mt-3 text-sm font-medium">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                    {job.location}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
              </div>

              <div>
                <a
                  href="#apply"
                  className="px-6 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition duration-300"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
