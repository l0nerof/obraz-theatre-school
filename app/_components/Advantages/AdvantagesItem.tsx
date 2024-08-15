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
      <p className="font-medium text-white mt-2 leading-normal">{children}</p>
    </li>
  );
}
