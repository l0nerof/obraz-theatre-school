"use client";

import CountUp from "react-countup";

import Button from "../ui/Button";
import CounterList from "./CounterList";

function CounterSection() {
  return (
    <section className="pb-[120px] xl:pb-16 lg:pb-16 md:pb-10 sm:pb-10">
      <div className="max-w-[1124px] mx-auto xl:max-w-[928px] lg:max-w-[704px] md:max-w-[448px] sm:max-w-[272px]">
        <CounterList />

        <div className="flex flex-col justify-center items-center mt-8 gap-8">
          <div className="flex flex-col items-center gap-2">
            <CountUp
              start={0}
              end={15936}
              separator=""
              enableScrollSpy
              scrollSpyOnce={true}
              className="text-white font-medium text-5xl sm:text-[64px]"
            />
            <p className="text-white text-2xl md:text-center sm:text-center sm:text-[20px]">
              Випускників театральної школи
            </p>
          </div>

          <Button>Доєднуйся до образу</Button>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
