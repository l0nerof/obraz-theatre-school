import ActualItem from "./ActualItem";

export default function ActualList() {
  return (
    <ul className="flex mt-4 justify-between gap-8 items-center">
      <ActualItem type="Aкції">
        Відкрито набір на курс “Тіло не обманює”!
      </ActualItem>

      <ActualItem type="Новини">
        Набір у дитячі групи: 6-9, 10-12 та 13-15 років!
      </ActualItem>

      <ActualItem type="Події">Заняття з Ораторської майстерності!</ActualItem>
    </ul>
  );
}
