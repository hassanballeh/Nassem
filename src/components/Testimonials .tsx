"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Christoforos Zacharioudakis",
    role: "Local guide",
    content:
      "Mustaffah who's running the place is simply the most honest mechanic I've ever had the pleasure of meeting",
    image: "./images/1.webp",
  },
  {
    id: 2,
    name: "Local guide",
    role: "Collins EfeMusic",
    content:
      "Mustafa and team are great. They fixed my car and I have got no complains",
    image: "./images/2.webp",
  },
  {
    id: 3,
    name: "Moe Chahine",
    role: "Local guide",
    content:
      "Have been getting my car (Land Rover) serviced there for a year now and they have done a great job.",
    image: "./images/3.webp",
  },
  {
    id: 4,
    name: "Mohammad Idrus Simpo",
    role: "Local guide",
    content:
      "Always send my cars here. The owner's and the mechanics are very helpful.",
    image: "./images/4.webp",
  },
  {
    id: 5,
    name: "Mariusz Mikolajczyk",
    role: "Local guide",
    content: "Excellent service at a reasonable price",
    image: "./images/5.webp",
  },
  {
    id: 6,
    name: "Mariusz Mikolajczyk",
    role: "Local guide",
    content: "Excellent service at a reasonable price",
    image: "./images/6.webp",
  },
  {
    id: 7,
    name: "T. R.",
    role: "Local guide",
    content: "Great work",
    image: "./images/7.webp",
  },
];

const TestimonialsSlider = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active bg-blue-500",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="py-12"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-lg shadow-lg p-8 mx-4">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                {testimonial.role && (
                  <p className="text-gray-600 mb-4">{testimonial.role}</p>
                )}
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
