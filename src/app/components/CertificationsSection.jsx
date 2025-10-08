"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Heart } from "lucide-react";
import {certifications} from "../types/index.ts";

export const CertificationsSection = () => {
    
  return (
    <section id="certifications" className="my-16">
        <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Certifications</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-12"
      >
        {certifications.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-square group cursor-pointer overflow-hidden rounded-2xl">
              {item.type === "image" ? (
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={item.content}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-br ${item.gradient} p-6 flex flex-col items-center justify-center text-white relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className="mb-4 opacity-80">{item.icon}</div>
                    <p className="text-sm md:text-base font-medium leading-tight">
                      {item.content}
                    </p>
                  </div>
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/10 rounded-full"></div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <div className="text-white text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
