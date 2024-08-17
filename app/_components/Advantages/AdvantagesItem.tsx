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
    <li className="md:max-w-[233px] md:mx-auto md:flex md:flex-col md:items-center sm:max-w-[233px] sm:mx-auto sm:flex sm:flex-col sm:items-center">
      <svg className="text-white w-12 h-12">
        <use href={`/icons/symbol-defs.svg#icon-${iconPath}`} />
      </svg>
      <p className="font-medium text-white mt-2 leading-normal md:text-center sm:text-center sm:text-sm sm:font-normal">
        {children}
      </p>
    </li>
  );
}
