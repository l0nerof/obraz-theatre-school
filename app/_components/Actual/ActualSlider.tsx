"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import ActualItem from "./ActualItem";

function ActualSlider() {
  return (
    <Swiper
      direction={"horizontal"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      slidesPerView={3}
      spaceBetween={32}
      className="actual-container h-[336px] mt-4 xl:h-[304px]"
      autoplay={{ delay: 4000 }}
      loop={true}
      observer={true}
      observeParents={true}
      breakpoints={{
        480: {
          slidesPerView: 1,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
        1441: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      }}
    >
      <SwiperSlide>
        <ActualItem type="Aкції">
          Відкрито набір на курс “Тіло не обманює”!
        </ActualItem>
      </SwiperSlide>

      <SwiperSlide>
        <ActualItem type="Новини">
          Набір у дитячі групи: 6-9, 10-12 та 13-15 років!
        </ActualItem>
      </SwiperSlide>

      <SwiperSlide>
        <ActualItem type="Події">
          Заняття з Ораторської майстерності!
        </ActualItem>
      </SwiperSlide>

      <SwiperSlide>
        <ActualItem type="Aкції">
          Відкрито набір на курс “Тіло не обманює”!
        </ActualItem>
      </SwiperSlide>

      <SwiperSlide>
        <ActualItem type="Новини">
          Набір у дитячі групи: 6-9, 10-12 та 13-15 років!
        </ActualItem>
      </SwiperSlide>

      <SwiperSlide>
        <ActualItem type="Події">
          Заняття з Ораторської майстерності!
        </ActualItem>
      </SwiperSlide>
    </Swiper>
  );
}

export default ActualSlider;
