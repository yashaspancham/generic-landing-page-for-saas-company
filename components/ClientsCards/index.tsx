"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ClientsSayCard from "../ClientsSayCard";
import { clientsSayData } from "@/data/clientsSayData";

const ClientsCards = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="flex flex-col items-center justify-center w-full py-[60px]">
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        initialSlide={0}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Pagination]}
        className="flex items-center justify-between 
        w-full max-w-[1479px]
         [&_.swiper-pagination]:mt-10"
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 1.7, centeredSlides: true },
          1024: { slidesPerView: 2.2, centeredSlides: true },
          1440: { slidesPerView: 3, centeredSlides: false },
        }}
      >
        {clientsSayData.map((clientSay) => (
          <SwiperSlide key={clientSay.id} className="!flex !justify-center">
            <ClientsSayCard
              clientSay={clientSay}
              isActive={clientSay.id !== activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="
          custom-pagination flex justify-center mt-10
          [&_.swiper-pagination-bullet]:mx-2
          [&_.swiper-pagination-bullet]:w-3
          [&_.swiper-pagination-bullet]:h-3
          [&_.swiper-pagination-bullet]:bg-gray-300
          [&_.swiper-pagination-bullet-active]:bg-[#043873]
        "
      />
    </div>
  );
};
export default ClientsCards;
