import Link from "next/link";
import { ReactNode } from "react";

interface ICourseItemProps {
  children: ReactNode;
  photoUrl: string;
}

export default function CourseItem({ children, photoUrl }: ICourseItemProps) {
  return (
    <li>
      <Link
        href="/"
        className="flex flex-col items-center text-white hover:text-primary duration-300 transition-all"
      >
        <div
          className={`w-[330px] h-[324px] ${photoUrl} bg-cover bg-no-repeat bg-center rounded-full border-primary border-[5px]`}
        ></div>

        <p className="mt-4 uppercase text-center font-bold text-xl">
          {children}
        </p>
      </Link>
    </li>
  );
}
