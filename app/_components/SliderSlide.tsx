import Button from "./Button";

interface ISliderSlideProps {
  children: string;
  mainText: string;
  coloredText: string;
}

function SliderSlide({ children, mainText, coloredText }: ISliderSlideProps) {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-7xl w-full flex flex-col items-start gap-9">
        <p className="max-w-[822px] text-white text-[64px] leading-none font-medium">
          {mainText}
          <span className="text-primary">{coloredText}</span>
        </p>
        <Button>{children}</Button>
      </div>
    </div>
  );
}

export default SliderSlide;
