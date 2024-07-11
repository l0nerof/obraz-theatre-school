import CarouselItem from "./CarouselItem";
import Marquee from "react-fast-marquee";

interface ICarouselProps {
  className: string;
}

function Carousel({ className }: ICarouselProps) {
  return (
    <Marquee className={className} autoFill>
      <CarouselItem />
    </Marquee>
  );
}

export default Carousel;
