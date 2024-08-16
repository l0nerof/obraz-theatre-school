import Link from "next/link";
import { ReactNode } from "react";

interface IActualItemProps {
  children: ReactNode;
  type: string;
}

export default function ActualItem({ children, type }: IActualItemProps) {
  return (
    <li>
      <Link href="/">
        <div className="bg-[url('/shows/show.jpg')] bg-cover bg-no-repeat w-[400px] h-[200px]">
          <div className="flex flex-col h-full justify-between gap-6 items-start">
            <p className="px-4 py-[6px] font-bold text-[10px] bg-primary inline-block">
              30.02.2024
            </p>
            <p className="px-4 py-[6px] ml-3 mb-3 bg-red-600 text-white font-bold text-[10px] uppercase inline-block">
              {type}
            </p>
          </div>
        </div>

        <h3 className="mt-3 font-bold text-2xl leading-none">{children}</h3>
      </Link>
    </li>
  );
}
