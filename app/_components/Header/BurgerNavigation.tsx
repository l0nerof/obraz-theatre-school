import Link from "next/link";

interface IBurgerNavigationProps {
  onClick: () => void;
}

function BurgerNavigation({ onClick }: IBurgerNavigationProps) {
  return (
    <nav className="mb-[98px]">
      <ul className="flex flex-col gap-8">
        <li onClick={onClick}>
          <Link
            href="#contact"
            className="text-white hover:text-primary transition duration-300 uppercase text-2xl"
          >
            Зв’язатися
          </Link>
        </li>

        <li onClick={onClick}>
          <Link
            href="#courses"
            className="text-white hover:text-primary transition duration-300 uppercase text-2xl"
          >
            Курси
          </Link>
        </li>

        <li onClick={onClick}>
          <Link
            href="/blog"
            className="text-white hover:text-primary transition duration-300 uppercase text-2xl"
          >
            Блог
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerNavigation;
