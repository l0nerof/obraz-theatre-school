import Link from "next/link";

function Navigation() {
  return (
    <div className="flex gap-6 items-center">
      <ul className="flex gap-3">
        <li>
          <Link
            href="/about-course"
            className="flex items-center gap-[2px] text-white hover:text-primary transition duration-300 uppercase"
          >
            Курси
            <svg className="fill-primary w-4 h-4">
              <use href="/symbol-defs.svg#icon-arrow-outward"></use>
            </svg>
          </Link>
        </li>

        <li>
          <Link
            href="/blog"
            className="flex items-center gap-[2px] text-white hover:text-primary transition duration-300 uppercase"
          >
            Статті
            <svg className="fill-primary w-4 h-4">
              <use href="/symbol-defs.svg#icon-arrow-outward"></use>
            </svg>
          </Link>
        </li>
      </ul>

      <Link href="">
        <svg className="text-primary hover:text-white transition duration-300 w-8 h-8">
          <use href="/symbol-defs.svg#icon-phone"></use>
        </svg>
      </Link>
    </div>
  );
}

export default Navigation;
