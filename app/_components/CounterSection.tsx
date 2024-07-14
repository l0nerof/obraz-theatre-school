"use client";

import Link from "next/link";
import CountUp from "react-countup";

function CounterSection() {
  return (
    <section className="pb-[120px]">
      <div className="max-w-6xl mx-auto">
        <ul className="flex gap-9">
          <li>
            <CountUp
              start={0}
              end={15}
              enableScrollSpy
              scrollSpyOnce={true}
              className="text-primary font-medium text-[64px]"
            />
            <p className="text-white font-bold text-xl">
              років успішної театральної практики в Києві
            </p>
          </li>

          <li>
            <CountUp
              start={0}
              end={65}
              scrollSpyOnce={true}
              className="text-primary font-medium text-[64px]"
            />
            <p className="text-white font-bold text-xl">випускних вистав</p>
          </li>

          <li>
            <CountUp
              start={0}
              end={597}
              enableScrollSpy
              scrollSpyOnce={true}
              className="text-primary font-medium text-[64px]"
            />
            <p className="text-white font-bold text-xl">відкритих показів</p>
          </li>

          <li>
            <CountUp
              start={0}
              end={37}
              enableScrollSpy
              scrollSpyOnce={true}
              className="text-primary font-medium text-[64px]"
            />
            <p className="text-white font-bold text-xl">
              нагород на фестивалях і конкурсах
            </p>
          </li>

          <li>
            <CountUp
              start={0}
              end={76}
              enableScrollSpy
              scrollSpyOnce={true}
              className="text-primary font-medium text-[64px]"
            />
            <p className="text-white font-bold text-xl">
              студентів вступило до театралних ВНЗ
            </p>
          </li>
        </ul>

        <div className="flex flex-col justify-center items-center mt-8 gap-8">
          <div className="flex flex-col items-center gap-2">
            <CountUp
              start={0}
              end={15936}
              separator=""
              enableScrollSpy
              scrollSpyOnce={true}
              className="text-white font-medium text-8xl"
            />
            <p className="text-white font-bold text-2xl">
              Випускників театральної школи
            </p>
          </div>

          <Link
            href="/"
            className="uppercase text-black bg-primary px-8 py-2 rounded-full font-bold text-2xl hover:bg-white transition duration-300"
          >
            Доєднуйся до образу
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
