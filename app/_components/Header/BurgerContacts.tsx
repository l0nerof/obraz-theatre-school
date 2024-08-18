import Link from "next/link";

function BurgerContacts() {
  return (
    <ul className="flex flex-col gap-4">
      <li>
        <Link
          href="tel:0663175717"
          className="flex items-center gap-[6px] font-light text-sm text-gray hover:text-primary [&>svg]:hover:fill-primary transition duration-300"
        >
          <svg className="fill-gray size-[14px]">
            <use href="/icons/symbol-defs.svg#icon-phone"></use>
          </svg>
          (066) 317 5717 - Viber, (063) 239 0804 - TG
        </Link>
      </li>

      <li>
        <Link
          href="mailto:ts_obraz@ukr.net"
          className="flex items-center gap-[6px] font-light text-sm text-gray hover:text-primary [&>svg]:hover:fill-primary transition duration-300"
        >
          <svg className="fill-gray size-[14px]">
            <use href="/icons/symbol-defs.svg#icon-mail"></use>
          </svg>
          ts_obraz@ukr.net
        </Link>
      </li>

      <li>
        <Link
          href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%91%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%BD%D0%BE-%D0%9A%D1%83%D0%B4%D1%80%D1%8F%D0%B2%D1%81%D1%8C%D0%BA%D0%B0,+49%2F13,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.448995,30.494171,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4ce8aecc24011:0xb5395e3ffdeaa4d4!8m2!3d50.448995!4d30.494171!16s%2Fg%2F11c5km4p14?entry=ttu"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center gap-[6px] font-light text-sm text-gray hover:text-primary [&>svg]:hover:fill-primary transition duration-300"
        >
          <svg className="fill-gray size-[14px]">
            <use href="/icons/symbol-defs.svg#icon-distance"></use>
          </svg>
          вул. Бульварно-Кудрявська, 49/13
        </Link>
      </li>
    </ul>
  );
}

export default BurgerContacts;
