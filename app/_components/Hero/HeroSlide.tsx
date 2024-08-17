import { ReactNode } from "react";
import Button from "../ui/Button";

interface IHeroSlideProps {
  children: ReactNode;
  mainText: string;
  coloredText: string;
}

function HeroSlide({ children, mainText, coloredText }: IHeroSlideProps) {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-[1296px] w-full xl:max-w-[928px] lg:max-w-[704px] md:max-w-[448px] sm:max-w-[260px] sm:flex sm:flex-col">
        <p className="max-w-[822px] text-white text-2xl leading-loose font-medium lg:max-w-[508px] md:max-w-[390px] md:leading-none sm:max-w-[260px] sm:leading-none sm:text-base">
          {mainText}
        </p>
        <p className="max-w-[822px] text-primary text-[64px] leading-none font-medium mt-1 mb-8 lg:max-w-[508px] md:max-w-[397px] md:text-4xl sm:max-w-[260px] sm:text-3xl sm:mb-[116px]">
          {coloredText}
        </p>
        <Button>{children}</Button>
      </div>
    </div>
  );
}

export default HeroSlide;
