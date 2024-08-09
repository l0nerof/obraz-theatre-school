import AdvantagesItem from "./AdvantagesItem";

export default function AdvantagesSection() {
  return (
    <section>
      <div className="max-w-[1124px] mx-auto flex justify-between items-center gap-5">
        <div className="basis-3/5">
          <div>
            <h2 className="text-white uppercase font-extrabold text-5xl">
              Досі вагаєшся?
            </h2>
            <p className="font-medium uppercase text-white mt-6">
              <span className="text-primary">OBRAZ</span> — перша незалежна
              театральна школа у Києві, яка започаткувала викладання акторської
              майстерності не тільки для професіоналів, а й для усіх охочих.
              Наша мета — допомогти кожній людині відчувати впевненість у собі,
              відкривати творчі таланти та проявляти свої здібності у будь-якій
              сфері життя!
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-white uppercase font-extrabold text-2xl leading-none">
              Як працює театр-школа <span className="text-primary">obraz</span>
            </h3>
            <ul className="mt-8 grid grid-cols-2 gap-x-12 gap-y-4">
              <AdvantagesItem iconPath="support-agent">
                Залишайте заявку на сайті чи по телефону
              </AdvantagesItem>
              <AdvantagesItem iconPath="comedy-mask">
                Відвідайте безкоштовне пробне заняття
              </AdvantagesItem>
              <AdvantagesItem iconPath="emoji-people">
                Знайомтесь з атмосферою, програмами курсів та майстрами
              </AdvantagesItem>
              <AdvantagesItem iconPath="task">
                Разом с майстром обирайте тривалість та програму занять
              </AdvantagesItem>
            </ul>
          </div>
        </div>

        <div className="h-full text-white w-[400px] basis-2/5 text-center">
          Slider
        </div>
      </div>
    </section>
  );
}
