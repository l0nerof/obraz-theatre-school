import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

interface ICarouselProps {
  className: string;
  children: ReactNode;
}

function Carousel({ className, children }: ICarouselProps) {
  return (
    <Marquee className={className} autoFill>
      {children}
    </Marquee>
  );
}

export default Carousel;
