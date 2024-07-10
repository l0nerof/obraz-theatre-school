import Link from "next/link";

function Contacts() {
  return (
    <div className="flex gap-6 items-center basis-1/3">
      <ul className="flex gap-4">
        <li>
          <Link href="" className="text-primary">
            <svg className="fill-primary hover:fill-white transition duration-300 w-6 h-6">
              <use href="/symbol-defs.svg#icon-instagram"></use>
            </svg>
          </Link>
        </li>

        <li>
          <Link href="" className="text-primary">
            <svg className="fill-primary hover:fill-white transition duration-300 w-6 h-6">
              <use href="/symbol-defs.svg#icon-facebook"></use>
            </svg>
          </Link>
        </li>

        <li>
          <Link href="" className="text-primary">
            <svg className="fill-primary hover:fill-white transition duration-300 w-6 h-6">
              <use href="/symbol-defs.svg#icon-youtube"></use>
            </svg>
          </Link>
        </li>
      </ul>

      <Link
        href=""
        className="text-white text-xs hover:text-primary transition duration-300"
      >
        вул. Бульварно-Кудрявська, 49/13
      </Link>
    </div>
  );
}

export default Contacts;
