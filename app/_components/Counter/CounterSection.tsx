"use client";

import CountUp from "react-countup";

import Button from "../ui/Button";
import CounterItem from "./CounterItem";

function CounterSection() {
  return (
    <section className="pb-[120px]">
      <div className="max-w-[1124px] mx-auto">
        <ul className="flex gap-9">
          <CounterItem end={15}>
            років успішної театральної практики в Києві
          </CounterItem>
          <CounterItem end={65}>випускних вистав</CounterItem>
          <CounterItem end={597}>відкритих показів</CounterItem>
          <CounterItem end={37}>нагород на фестивалях і конкурсах</CounterItem>
          <CounterItem end={76}>
            студентів вступило до театралних ВНЗ
          </CounterItem>
        </ul>

        <div className="flex flex-col justify-center items-center mt-8 gap-8">
          <div className="flex flex-col items-center gap-2">
            <CountUp
              start={0}
              end={15936}
              separator=""
              enableScrollSpy
              scrollSpyOnce={true}
              className="text-white font-medium text-5xl"
            />
            <p className="text-white text-2xl">Випускників театральної школи</p>
          </div>

          <Button>Доєднуйся до образу</Button>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
