import Link from "next/link";

function Socials() {
  return (
    <div className="flex items-center gap-6 xl:flex-col xl:items-end xl:gap-4 lg:flex-col lg:items-end lg:gap-4 md:flex-col md:items-end md:gap-4">
      <div className="flex flex-col xl:items-end lg:items-end md:items-end">
        <Link
          href="mailto:ts_obraz@ukr.net"
          className="flex items-center gap-3 font-light text-xs text-gray hover:text-primary [&>svg]:hover:fill-primary transition duration-300"
        >
          <svg className="fill-gray w-[10px] h-2">
            <use href="/icons/symbol-defs.svg#icon-mail"></use>
          </svg>
          ts_obraz@ukr.net
        </Link>

        <ul className="flex gap-5 mt-2">
          <li>
            <Link
              href="https://www.telegram.com/"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <svg className="fill-primary hover:fill-white transition duration-300 size-4">
                <use href="/icons/symbol-defs.svg#icon-telegram"></use>
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.facebook.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="fill-primary hover:fill-white transition duration-300 size-4">
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
              <svg className="fill-primary hover:fill-white transition duration-300 size-4">
                <use href="/icons/symbol-defs.svg#icon-youtube"></use>
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.tiktok.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="fill-primary hover:fill-white transition duration-300 size-4">
                <use href="/icons/symbol-defs.svg#icon-tiktok"></use>
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="fill-primary hover:fill-white transition duration-300 size-4">
                <use href="/icons/symbol-defs.svg#icon-instagram"></use>
              </svg>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="https://www.education.ua/"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[url('/sponsors/education.png')] bg-cover bg-center bg-no-repeat w-[88px] h-10"
        ></Link>

        <Link
          href="https://www.bodo.ua/ua/"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[url('/sponsors/bodo.jpg')] bg-cover bg-center bg-no-repeat w-[88px] h-10"
        ></Link>
      </div>
    </div>
  );
}

export default Socials;
