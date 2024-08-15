"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import ReviewSlide from "./ReviewSlide";

function ReviewsSlider() {
  return (
    <Swiper
      direction={"horizontal"}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      slidesPerView={4}
      spaceBetween={16}
      className="swiper-container h-[400px]"
      autoplay={{ delay: 4000 }}
      loop={true}
    >
      <SwiperSlide>
        <ReviewSlide
          photoUrl="/mask.png"
          user="Gavin E"
          course="Кіно-табір 2024"
          rating={4}
        >
          Дуже багато корисних навиків — я навчилася розслаблятися, коли це
          потрібно, контролювати своє дихання, своє тіло. Це були мої улюблені
          заняття! Обожнюю етюди, різні ролі, настрої і т.і. Все подобалося!
          Корисне було все, навіть якщо на перший погляд щось не виглядало
          “корисним”) Із важливих навичок, які отримала, можу виділити те що
          перестала боятися сцени.
        </ReviewSlide>
      </SwiperSlide>

      <SwiperSlide>
        <ReviewSlide
          photoUrl="/mask.png"
          user="Володімир"
          course="Акторська майстерність"
          rating={4}
        >
          Я покращив свою здатність спілкуватися і розуміти інших, попрацював у
          команді, розкрив себе, дав своїй уяві можливість проявити себе. Став
          більш відкритим. Більш уважно почав відноситись до своїх рухів, став
          більш спокійним та розслабленим. Отримав цінні поради від викладача,
          навчився краще та чіткіше розмовляти.
        </ReviewSlide>
      </SwiperSlide>

      <SwiperSlide>
        <ReviewSlide
          photoUrl="/mask.png"
          user="Кєрило"
          course="Тілесна терапія"
          rating={5}
        >
          Дуже багато корисних навиків — я навчилася розслаблятися, коли це
          потрібно, контролювати своє дихання, своє тіло. Це були мої улюблені
          заняття! Обожнюю етюди, різні ролі, настрої і т.і. Все подобалося!
          Корисне було все, навіть якщо на перший погляд щось не виглядало
          “корисним”) Із важливих навичок, які отримала, можу виділити те що
          перестала боятися сцени.
        </ReviewSlide>
      </SwiperSlide>

      <SwiperSlide>
        <ReviewSlide
          photoUrl="/mask.png"
          user="Дарій"
          course="Ораторська майтерність"
          rating={5}
        >
          Закончил курс “Актерское мастерство для сцены» в театр-школе Образ.
          Очень много полезных навыков развил в себе и воплотил свою мечту-
          сыграть на сцене! Актерское мастерство учит понимать и чувствовать
          своё тело, слышать свой голос со стороны, улучшает дикцию и передачу
          мыслей собеседнику. Важно сказать, что помимо полученных знаний я
          обрел прекрасных друзей, сплоченный коллектив.
        </ReviewSlide>
      </SwiperSlide>

      <SwiperSlide>
        <ReviewSlide
          photoUrl="/mask.png"
          user="Gavin E"
          course="Кіно-табір 2024"
          rating={4}
        >
          Дуже багато корисних навиків — я навчилася розслаблятися, коли це
          потрібно, контролювати своє дихання, своє тіло. Це були мої улюблені
          заняття! Обожнюю етюди, різні ролі, настрої і т.і. Все подобалося!
          Корисне було все, навіть якщо на перший погляд щось не виглядало
          “корисним”) Із важливих навичок, які отримала, можу виділити те що
          перестала боятися сцени.
        </ReviewSlide>
      </SwiperSlide>

      <SwiperSlide>
        <ReviewSlide
          photoUrl="/mask.png"
          user="Володімир"
          course="Акторська майстерність"
          rating={4}
        >
          Я покращив свою здатність спілкуватися і розуміти інших, попрацював у
          команді, розкрив себе, дав своїй уяві можливість проявити себе. Став
          більш відкритим. Більш уважно почав відноситись до своїх рухів, став
          більш спокійним та розслабленим. Отримав цінні поради від викладача,
          навчився краще та чіткіше розмовляти.
        </ReviewSlide>
      </SwiperSlide>

      <SwiperSlide>
        <ReviewSlide
          photoUrl="/mask.png"
          user="Кєрило"
          course="Тілесна терапія"
          rating={5}
        >
          Дуже багато корисних навиків — я навчилася розслаблятися, коли це
          потрібно, контролювати своє дихання, своє тіло. Це були мої улюблені
          заняття! Обожнюю етюди, різні ролі, настрої і т.і. Все подобалося!
          Корисне було все, навіть якщо на перший погляд щось не виглядало
          “корисним”) Із важливих навичок, які отримала, можу виділити те що
          перестала боятися сцени.
        </ReviewSlide>
      </SwiperSlide>

      <SwiperSlide>
        <ReviewSlide
          photoUrl="/mask.png"
          user="Дарій"
          course="Ораторська майтерність"
          rating={5}
        >
          Закончил курс “Актерское мастерство для сцены» в театр-школе Образ.
          Очень много полезных навыков развил в себе и воплотил свою мечту-
          сыграть на сцене! Актерское мастерство учит понимать и чувствовать
          своё тело, слышать свой голос со стороны, улучшает дикцию и передачу
          мыслей собеседнику. Важно сказать, что помимо полученных знаний я
          обрел прекрасных друзей, сплоченный коллектив.
        </ReviewSlide>
      </SwiperSlide>
    </Swiper>
  );
}

export default ReviewsSlider;
