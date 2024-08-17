import Link from "next/link";

function Navigation() {
  return (
    <nav className="flex gap-6 items-center">
      <ul className="flex gap-3 lg:hidden md:hidden sm:hidden">
        <li>
          <Link
            href="#courses"
            className="flex items-center gap-[2px] text-white hover:text-primary transition duration-300 uppercase"
          >
            Курси
            <svg className="fill-primary w-4 h-4">
              <use href="/icons/symbol-defs.svg#icon-arrow-outward"></use>
            </svg>
          </Link>
        </li>

        <li>
          <Link
            href="/blog"
            className="flex items-center gap-[2px] text-white hover:text-primary transition duration-300 uppercase"
          >
            Блог
            <svg className="fill-primary w-4 h-4">
              <use href="/icons/symbol-defs.svg#icon-arrow-outward"></use>
            </svg>
          </Link>
        </li>
      </ul>

      <Link href="tel:555-666-7777" className="md:hidden sm:hidden">
        <svg className="text-primary hover:text-white transition duration-300 size-8">
          <use href="/icons/symbol-defs.svg#icon-phone"></use>
        </svg>
      </Link>

      <Link
        href="tel:555-666-7777"
        className="hidden xl:hidden md:block sm:block"
      >
        <svg className="text-primary hover:text-white transition duration-300 size-8 ">
          <use href="/icons/symbol-defs.svg#icon-phone"></use>
        </svg>
      </Link>
    </nav>
  );
}

export default Navigation;
