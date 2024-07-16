import Link from "next/link";

interface IButtonProps {
  children: string;
}

function Button({ children }: IButtonProps) {
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
