// import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="text-primary basis-5/12">
      <svg className="text-primary hover:text-white transition duration-300 h-16 w-[360px]">
        <use href="/symbol-defs.svg#icon-logo"></use>
      </svg>
    </Link>
  );
}

export default Logo;
