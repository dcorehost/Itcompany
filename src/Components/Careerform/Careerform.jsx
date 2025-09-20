import React, { useState } from "react";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your application has been submitted!");
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Apply for <span className="text-red-600">Your Dream Role</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Fill out the form below and join our growing team. We value passion,
            innovation, and dedication.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 lg:p-12 max-w-3xl mx-auto"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Position Applying For */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Position
              </label>
              <select
                name="position"
                required
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              >
                <option value="">Select a position</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="App Developer">App Developer</option>
              </select>
            </div>
          </div>

          {/* Resume Upload */}
          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">
              Upload Resume (PDF/DOC)
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">
              Cover Letter / Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              placeholder="Tell us why you'd be a great fit..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
