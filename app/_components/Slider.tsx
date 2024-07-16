"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import SliderSlide from "./SliderSlide";

function Slider() {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="swiper-container w-full h-[600px]"
      autoplay={{ delay: 2000 }}
      loop={true}
    >
      <SwiperSlide className="bg-[url('/show.jpg')] bg-cover bg-no-repeat">
        <SliderSlide
          mainText="Інші продають курси з акторської майстерності, "
          coloredText="ми — пропонуємо тобі успіх і любов"
        >
          Записатися на пробне
        </SliderSlide>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('/camp.jpg')] bg-cover bg-no-repeat">
        <SliderSlide
          mainText="Літній акторський табір "
          coloredText="OBRAZ-KinomaniaClub"
        >
          Зв&#39;язатися з менеджером
        </SliderSlide>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('/show.jpg')] bg-cover bg-no-repeat">
        <SliderSlide
          mainText="Інші продають курси з акторської майстерності, "
          coloredText="ми — пропонуємо тобі успіх і любов"
        >
          Записатися на пробне
        </SliderSlide>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('/camp.jpg')] bg-cover bg-no-repeat">
        <SliderSlide
          mainText="Літній акторський табір "
          coloredText="OBRAZ-KinomaniaClub"
        >
          Зв&#39;язатися з менеджером
        </SliderSlide>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('/show.jpg')] bg-cover bg-no-repeat">
        <SliderSlide
          mainText="Інші продають курси з акторської майстерності, "
          coloredText="ми — пропонуємо тобі успіх і любов"
        >
          Записатися на пробне
        </SliderSlide>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('/camp.jpg')] bg-cover bg-no-repeat">
        <SliderSlide
          mainText="Літній акторський табір "
          coloredText="OBRAZ-KinomaniaClub"
        >
          Зв&#39;язатися з менеджером
        </SliderSlide>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
