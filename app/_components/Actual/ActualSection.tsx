import ActualFilters from "./ActualFilters";
import ActualList from "./ActualList";

export default function ActualSection() {
  return (
    <section className="py-8 bg-primary">
      <div className="max-w-[1296px] mx-auto">
        <div className="flex justify-between gap-6 items-center">
          <h2 className="font-bold text-[32px] leading-none">Актуальне</h2>

          <ActualFilters />
        </div>

        <ActualList />
      </div>
    </section>
  );
}
