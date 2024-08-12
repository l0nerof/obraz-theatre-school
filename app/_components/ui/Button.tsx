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
        className="uppercase text-primary bg-black px-8 py-2 rounded-full font-bold text-2xl hover:bg-secondary transition duration-300"
      >
        {children}
      </button>
    );

  return (
    <Link
      href="/"
      className="uppercase text-black bg-primary px-8 py-2 rounded-full font-bold text-2xl hover:bg-white transition duration-300"
    >
      {children}
    </Link>
  );
}

export default Button;
