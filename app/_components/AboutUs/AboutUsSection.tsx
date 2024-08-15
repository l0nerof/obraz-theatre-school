import Carousel from "../ui/Carousel";
import Clients from "./Clients";

function AboutUsSection() {
  return (
    <section className="pt-32 pb-16">
      <div className="max-w-[1174px] mx-auto flex gap-[109px]">
        <div className="uppercase text-white">
          <h2 className="font-semibold text-5xl mb-6">Про нас</h2>
          <p className="font-medium leading-tight">
            <span className="text-primary">OBRAZ</span> — перша незалежна
            театральна школа у Києві, яка започаткувала викладання акторської
            майстерності не тільки для професіоналів, а й для усіх охочих. Наша
            мета — допомогти кожній людині відчувати впевненість у собі,
            відкривати творчі таланти та проявляти свої здібності у будь-якій
            сфері життя!
          </p>
        </div>

        <div>
          <iframe
            width="599"
            height="303"
            className="border-primary rounded-md border-4"
            src="https://www.youtube.com/embed/S_L6r7yT7ss?si=4CguYSvpC_IPkgh1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <h2 className="text-center uppercase font-medium text-[32px] text-white mt-16">
        Наші клієнти
      </h2>

      <Carousel className="bg-primary mt-6">
        <Clients />
      </Carousel>
    </section>
  );
}

export default AboutUsSection;
