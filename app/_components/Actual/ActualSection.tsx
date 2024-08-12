import ActualFilters from "./ActualFilters";
import ActualList from "./ActualList";

export default function ActualSection() {
  return (
    <section className="pb-[116px] pt-24 bg-primary">
      <div className="max-w-[1296px] mx-auto">
        <div className="flex justify-between gap-6 items-center">
          <h2 className="font-bold text-[40px] leading-tight">Актуальне</h2>

          <ActualFilters />
        </div>

        <ActualList />
      </div>
    </section>
  );
}
