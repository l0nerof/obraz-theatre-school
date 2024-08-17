import AdvantagesList from "./AdvantagesList";
import AdvantagesSlider from "./AdvantagesSlider";

export default function AdvantagesSection() {
  return (
    <section className="pb-32 xl:pb-16 first-letter:lg:pb-16 md:pb-10">
      <div className="max-w-[1148px] mx-auto flex justify-between gap-5 xl:max-w-[750px] xl:flex-col lg:max-w-[704px] lg:flex-col md:max-w-[448px] md:flex-col">
        <div className="basis-2/4">
          <div>
            <h2 className="text-white uppercase font-semibold text-5xl xl:text-center lg:text-center md:text-center md:text-[32px]">
              Досі вагаєшся?
            </h2>
            <p className="text-white mt-4 leading-tight xl:text-center lg:text-center md:text-center">
              <span className="text-primary">OBRAZ</span> — перша незалежна
              театральна школа у Києві, яка започаткувала викладання акторської
              майстерності не тільки для професіоналів, а й для усіх охочих.
            </p>

            <p className="text-white mt-4 leading-tight xl:text-center md:text-center">
              Наша мета — допомогти кожній людині відчувати впевненість у собі,
              відкривати творчі таланти та проявляти свої здібності у будь-якій
              сфері життя!
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-white uppercase font-medium text-xl xl:text-center lg:text-center md:text-center">
              Як працює театр-школа <span className="text-primary">obraz</span>
            </h3>

            <AdvantagesList />
          </div>
        </div>

        <div className="h-full text-white w-[400px] basis-2/5 text-center xl:hidden lg:hidden md:hidden">
          <AdvantagesSlider />
        </div>
      </div>
    </section>
  );
}
