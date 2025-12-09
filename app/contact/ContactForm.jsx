"use client";
import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    service_type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const serviceTypes = [
    "Offset Printing",
    "Digital Printing",
    "Book Printing",
    "Business Cards & Stationery",
    "Marketing Materials",
    "Promotional Products",
    "Graphic Design",
    "Web Design & Development",
    "Packaging & Labels",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          company: "",
          service_type: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(
        "Failed to submit form. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="sm:text-xl! max-sm:text-lg! text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block max-sm:text-lg! sm:text-xl! font-semibold text-gray-900 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-full! focus:border-yellow-500 focus:bg-white focus:outline-none transition-all"
                      placeholder="Ahmad"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block max-sm:text-lg! sm:text-xl! font-semibold text-gray-900 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-full! focus:border-yellow-500 focus:bg-white focus:outline-none transition-all"
                      placeholder="Jan"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block max-sm:text-lg! sm:text-xl! font-semibold text-gray-900 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-full! focus:border-yellow-500 focus:bg-white focus:outline-none transition-all"
                      placeholder="Ahmad@gmail.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block max-sm:text-lg! sm:text-xl! font-semibold text-gray-900 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-full! focus:border-yellow-500 focus:bg-white focus:outline-none transition-all"
                      placeholder="+93 XXX XXX XXX"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block max-sm:text-lg! sm:text-xl! font-semibold text-gray-900 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-full! focus:border-yellow-500 focus:bg-white focus:outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label
                    htmlFor="service_type"
                    className="block max-sm:text-lg! sm:text-xl! font-semibold text-gray-900 mb-2"
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="service_type"
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-full! focus:border-yellow-500 focus:bg-white focus:outline-none transition-all pr-8"
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block max-sm:text-lg! sm:text-xl! font-semibold text-gray-900 mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-4xl! focus:border-yellow-500 focus:bg-white focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                {/* Success Message */}
                {success && (
                  <div className="bg-green-50 border-2 border-green-500 rounded-full! p-4 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                    <p className="text-green-800 font-medium">
                      Thank you! Your message has been sent successfully. We'll
                      get back to you soon.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border-2 border-red-500 rounded-xl! p-4">
                    <p className="text-red-800">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full! bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-400 text-black font-semibold py-4 px-6 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl max-sm:text-lg! sm:text-xl!"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column - Additional Info */}
            <div className="lg:pl-12">
              <div className="sticky top-24">
                <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Choose Us?
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Quick Turnaround",
                        desc: "Fast delivery without compromising quality",
                      },
                      {
                        title: "Expert Design Team",
                        desc: "Professional designers with 20+ years experience",
                      },
                      {
                        title: "Quality Guaranteed",
                        desc: "Rigorous quality control on every project",
                      },
                      {
                        title: "Competitive Pricing",
                        desc: "Best prices in Afghanistan",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center gap-4 bg-white rounded-full! p-4"
                      >
                        <div className="flex flex-col justify-center items-center">
                          <h4 className="font-bold text-gray-900 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600 text-center">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
