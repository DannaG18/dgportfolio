"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { certifications } from "../types/index.ts";
import { ExternalLink } from "lucide-react";

export const CertificationsSection = () => {
  return (
    <div className="min-h-screen via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <section id="certifications" className="my-16">
          <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-14">
            Certifications
          </h1>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-20"
          >
            {certifications.map((item, index) => (
              <SwiperSlide key={index}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-400 hover:shadow-2xl hover:shadow-blue-500/20 h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {item.type === "image" ? (
                        <div className="relative w-full h-full bg-slate-900">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                          {/* <a  href={item.credentialUrl}>
                          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ExternalLink size={16} className="text-slate-900" />
                          </div>

                          </a> */}
                        </div>
                      ) : (
                        <div className="w-full h-full p-6 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10 text-center">
                            <div className="mb-4 opacity-90 text-white">
                              {item.icon}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="text-white font-bold text-lg mb-1 line-clamp- group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <h3 className="text-white font-semibold text-m mb-2 line-clamp-2 group-hover:text-violet-400 transition-colors duration-300">
                        {item.issuer}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-2">
                        {item.issueDate}
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 whitespace-pre-line">
                        {item.description}
                      </p>
                      {/* <a  href={item.credentialUrl}>
                      <div className="mt-4 flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>View Certificate</span>
                        <ExternalLink size={14} className="ml-1" />
                      </div>
                      </a> */}
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};