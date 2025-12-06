"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Star, Quote, User } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Hamid Rezaei",
      company: "Reforms Private Sector",
      content:
        "Working with this team has been an absolute game-changer for our business. Their attention to detail and creative solutions exceeded our expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Fareed Azizi",
      company: "IDS Afghanistan",
      content:
        "The level of professionalism and expertise demonstrated was remarkable. They delivered exactly what we needed on time and within budget.",
      rating: 5,
    },
    {
      id: 3,
      name: "Rehmat Ullah Wardak",
      company: "OXFAM",
      content:
        "Outstanding service! The team went above and beyond to ensure our project was a success. I would highly recommend them to anyone.",
      rating: 4,
    },
    {
      id: 4,
      name: "Omid Sharifi",
      company: "HealthNet",
      content:
        "A truly transformative experience. Their innovative approach helped us solve complex problems we've been struggling with for years.",
      rating: 5,
    },
    {
      id: 5,
      name: "Tariq Barakzai",
      company: "Care International",
      content:
        "The collaboration was seamless and the results were beyond what we imagined. Exceptional work from an exceptional team.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-linear-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-[83%]!">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base leading-none! sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with us.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex items-center min-w-full!">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pt-8! sm:pt-12! md:pt-16! pb-4 w-full min-h-[400px]! sm:min-h-[450px]! md:min-h-[500px]!"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                {({ isActive }) => (
                  <div
                    className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 h-full border border-gray-200 dark:border-gray-700 transition-all duration-500 ease-out ${
                      isActive
                        ? "scale-105 sm:scale-110 shadow-xl sm:shadow-2xl z-10"
                        : "scale-90 opacity-60"
                    }`}
                  >
                    {/* Quote Icon */}
                    <div className="mb-3 sm:mb-4">
                      <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 rotate-180" />
                    </div>

                    {/* Content */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-none!">
                      "{testimonial.content}"
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="ml-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.rating}.0
                      </span>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center">
                      {/* Avatar */}
                      <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute -left-4! sm:left-1 md:left-2 top-1/2 -translate-y-5/6 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#3B82F6] rounded-full! shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute -right-4! sm:right-1 md:right-2 top-1/2 -translate-y-5/6 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#3B82F6] rounded-full! shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
