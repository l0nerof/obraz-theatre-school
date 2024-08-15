"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import HeroSlide from "./HeroSlide";

function HeroSlider() {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="swiper-container w-full h-[600px]"
      autoplay={{ delay: 4000 }}
      loop={true}
    >
      <SwiperSlide className="bg-[url('/show.jpg')] bg-cover bg-no-repeat">
        <HeroSlide
          mainText="Інші продають курси з акторської майстерності..."
          coloredText="Ми — пропонуємо тобі успіх і любов"
        >
          Записатися на пробне
        </HeroSlide>
      </SwiperSlide>

      <SwiperSlide className="bg-[url('/camp.jpg')] bg-cover bg-center bg-no-repeat">
        <HeroSlide
          mainText="Літній акторський табір"
          coloredText="OBRAZ-KinomaniaClub"
        >
          Зв&#39;язатися з менеджером
        </HeroSlide>
      </SwiperSlide>

      <SwiperSlide className="bg-[url('/clown.jpg')] bg-cover bg-center bg-no-repeat">
        <HeroSlide
          mainText="Інші продають курси з акторської майстерності..."
          coloredText="Ми — пропонуємо тобі успіх і любов"
        >
          Записатися на пробне
        </HeroSlide>
      </SwiperSlide>

      <SwiperSlide className="bg-[url('/dancing.jpg')] bg-cover  bg-no-repeat">
        <HeroSlide
          mainText="Літній акторський табір"
          coloredText="OBRAZ-KinomaniaClub"
        >
          Зв&#39;язатися з менеджером
        </HeroSlide>
      </SwiperSlide>

      <SwiperSlide className="bg-[url('/hostage.jpg')] bg-cover bg-no-repeat">
        <HeroSlide
          mainText="Інші продають курси з акторської майстерності..."
          coloredText="Ми — пропонуємо тобі успіх і любов"
        >
          Записатися на пробне
        </HeroSlide>
      </SwiperSlide>

      <SwiperSlide className="bg-[url('/singing.png')] bg-cover bg-no-repeat">
        <HeroSlide
          mainText="Літній акторський табір"
          coloredText="OBRAZ-KinomaniaClub"
        >
          Зв&#39;язатися з менеджером
        </HeroSlide>
      </SwiperSlide>

      <SwiperSlide className="bg-[url('/theatre.jpg')] bg-cover bg-no-repeat">
        <HeroSlide
          mainText="Інші продають курси з акторської майстерності..."
          coloredText="Ми — пропонуємо тобі успіх і любов"
        >
          Записатися на пробне
        </HeroSlide>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;
