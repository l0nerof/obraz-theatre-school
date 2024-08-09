import { ReactNode } from "react";

interface IAdvantageItemProps {
  children: ReactNode;
  iconPath: string;
}

export default function AdvantagesItem({
  children,
  iconPath,
}: IAdvantageItemProps) {
  return (
    <li>
      <svg className="text-white w-12 h-12">
        <use href={`/symbol-defs.svg#icon-${iconPath}`} />
      </svg>
      <p className="font-bold text-white text-xl mt-2">{children}</p>
    </li>
  );
}
