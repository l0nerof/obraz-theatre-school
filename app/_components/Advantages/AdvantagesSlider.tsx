"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

function AdvantagesSlider() {
  return (
    <Swiper
      direction={"horizontal"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="swiper-container w-full h-[604px] border-[4px] border-primary rounded-[32px]"
      autoplay={{ delay: 4000 }}
      loop={true}
    >
      <SwiperSlide className="bg-[url('/shows/show.jpg')] bg-cover bg-no-repeat"></SwiperSlide>
      <SwiperSlide className="bg-[url('/shows/camp.jpg')] bg-cover bg-no-repeat"></SwiperSlide>
      <SwiperSlide className="bg-[url('/shows/show.jpg')] bg-cover bg-no-repeat"></SwiperSlide>
      <SwiperSlide className="bg-[url('/shows/camp.jpg')] bg-cover bg-no-repeat"></SwiperSlide>
      <SwiperSlide className="bg-[url('/shows/show.jpg')] bg-cover bg-no-repeat"></SwiperSlide>
    </Swiper>
  );
}

export default AdvantagesSlider;
