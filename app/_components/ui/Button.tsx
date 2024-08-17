import Link from "next/link";
import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  type?: string;
}

function Button({ children, type }: IButtonProps) {
  if (type === "button")
    return (
      <button
        type="submit"
        className="uppercase text-primary bg-black px-4 py-6 rounded-2xl font-medium leading-normal w-full hover:bg-secondary transition duration-300 sm:text-base sm:font-medium sm:p-2 sm:text-center"
      >
        {children}
      </button>
    );

  return (
    <Link
      href="/"
      className="uppercase text-black bg-primary px-12 py-4 rounded-2xl font-semibold text-xl hover:bg-white transition duration-300 md:text-lg md:px-10 sm:text-base sm:font-medium sm:p-2 sm:text-center"
    >
      {children}
    </Link>
  );
}

export default Button;
