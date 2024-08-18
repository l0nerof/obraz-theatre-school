import Link from "next/link";

function BurgerSocials() {
  return (
    <ul className="flex gap-4 mb-8">
      <li>
        <Link
          href="https://www.instagram.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg className="fill-primary hover:fill-white transition duration-300 size-8">
            <use href="/icons/symbol-defs.svg#icon-instagram"></use>
          </svg>
        </Link>
      </li>

      <li>
        <Link
          href="https://www.facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg className="fill-primary hover:fill-white transition duration-300 size-8">
            <use href="/icons/symbol-defs.svg#icon-facebook"></use>
          </svg>
        </Link>
      </li>

      <li>
        <Link
          href="https://www.youtube.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg className="fill-primary hover:fill-white transition duration-300 size-8">
            <use href="/icons/symbol-defs.svg#icon-youtube"></use>
          </svg>
        </Link>
      </li>
    </ul>
  );
}

export default BurgerSocials;
