"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import PriceCards from "../PriceCard";
import { cardsData } from "@/data/priceCardsData";

const PriceOptions = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);

  return (
    <div className="flex w-full justify-center items-center gap-10 mt-[60px]">
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        initialSlide={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="flex items-center justify-between 2xl:w-[1481px] xl:w-[1376px] lg:w-[1088px] w-full"
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 1.6, centeredSlides: true },
          1024: { slidesPerView: 3, centeredSlides: true },
        }}
      >
        {cardsData.map((card) => (
          <SwiperSlide key={card.id} className="!flex !justify-center">
            <PriceCards cardsData={card} isActive={card.id === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PriceOptions;
