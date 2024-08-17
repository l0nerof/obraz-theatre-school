export default function ActualFilters() {
  return (
    <ul className="flex items-center justify-between gap-6 sm:gap-1">
      <li>
        <button className="py-1 px-2 font-bold rounded-[32px] border">
          Всі
        </button>
      </li>

      <li>
        <button className="py-1 px-2 font-bold rounded-[32px] border">
          Новини
        </button>
      </li>

      <li>
        <button className="py-1 px-2 font-bold rounded-[32px] border">
          Акції
        </button>
      </li>

      <li>
        <button className="py-1 px-2 font-bold rounded-[32px] border">
          Події
        </button>
      </li>
    </ul>
  );
}
