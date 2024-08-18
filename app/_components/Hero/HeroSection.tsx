import HeroSlide from "./HeroSlide";
import HeroSlider from "./HeroSlider";

function HeroSection() {
  return (
    <section>
      <div className="mx-auto sm:hidden">
        <HeroSlider />
      </div>

      <div className="mx-auto hidden sm:block sm:bg-[url('/shows/show.jpg')] sm:bg-cover sm:bg-no-repeat sm:py-6">
        <HeroSlide
          mainText="Інші продають курси з акторської майстерності..."
          coloredText="Ми — пропонуємо тобі успіх і любов"
        >
          Записатися на пробне
        </HeroSlide>
      </div>
    </section>
  );
}

export default HeroSection;
