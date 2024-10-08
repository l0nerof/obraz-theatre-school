import ActualFilters from "./ActualFilters";
import ActualSlider from "./ActualSlider";

export default function ActualSection() {
  return (
    <section className="py-8 bg-primary">
      <div className="max-w-[1296px] mx-auto xl:max-w-[904px] lg:max-w-[704px] md:max-w-[448px] sm:max-w-[288px]">
        <div className="flex justify-between gap-6 items-center md:flex-col md:items-start sm:flex-col sm:items-start sm:gap-4">
          <h2 className="font-bold text-[32px] leading-none">Актуальне</h2>

          <ActualFilters />
        </div>

        <ActualSlider />
      </div>
    </section>
  );
}
