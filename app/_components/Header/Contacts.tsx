import Link from "next/link";

function Contacts() {
  return (
    <div className="flex gap-6 items-center basis-1/3 lg:basis-1/6 md:hidden">
      <ul className="flex gap-4">
        <li>
          <Link
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg className="fill-primary hover:fill-white transition duration-300 size-6">
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
            <svg className="fill-primary hover:fill-white transition duration-300 size-6">
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
            <svg className="fill-primary hover:fill-white transition duration-300 size-6">
              <use href="/icons/symbol-defs.svg#icon-youtube"></use>
            </svg>
          </Link>
        </li>
      </ul>

      <Link
        href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%91%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%BD%D0%BE-%D0%9A%D1%83%D0%B4%D1%80%D1%8F%D0%B2%D1%81%D1%8C%D0%BA%D0%B0,+49%2F13,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.448995,30.494171,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4ce8aecc24011:0xb5395e3ffdeaa4d4!8m2!3d50.448995!4d30.494171!16s%2Fg%2F11c5km4p14?entry=ttu"
        rel="noopener noreferrer"
        target="_blank"
        className="text-white text-xs leading-tight hover:text-primary transition duration-300 xl:hidden lg:hidden"
      >
        вул. Бульварно-Кудрявська, 49/13
      </Link>
    </div>
  );
}

export default Contacts;
