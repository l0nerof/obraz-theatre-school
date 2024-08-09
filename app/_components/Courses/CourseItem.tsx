import Link from "next/link";
import { ReactNode } from "react";

interface ICourseItemProps {
  children: ReactNode;
  //   photoUrl: string;
}

export default function CourseItem({ children }: ICourseItemProps) {
  return (
    <li>
      <Link
        href="/"
        className="uppercase text-center text-white hover:text-primary duration-300 transition-all "
      >
        <div className="w-[330px] h-[324px] rounded-full border-primary border-[5px]">
          photo
        </div>
        <p className="mt-4">{children}</p>
      </Link>
    </li>
  );
}
