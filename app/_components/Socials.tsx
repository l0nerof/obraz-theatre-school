import Image from "next/image";
import Link from "next/link";

function Socials() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center">
        <Link
          href="mailto:ts_obraz@ukr.net"
          className="flex items-center gap-3 text-gray hover:text-primary [&>svg]:hover:fill-primary transition duration-300"
        >
          <svg className="fill-gray w-3 h-3">
            <use href="/symbol-defs.svg#icon-mail"></use>
          </svg>
          ts_obraz@ukr.net
        </Link>

        <ul className="flex gap-5 mt-2">
          <li>
            <Link
              href="https://www.telegram.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="fill-primary hover:fill-white transition duration-300 w-4 h-4">
                <use href="/symbol-defs.svg#icon-telegram"></use>
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.facebook.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="fill-primary hover:fill-white transition duration-300 w-4 h-4">
                <use href="/symbol-defs.svg#icon-facebook"></use>
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.youtube.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="fill-primary hover:fill-white transition duration-300 w-4 h-4">
                <use href="/symbol-defs.svg#icon-youtube"></use>
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.tiktok.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="fill-primary hover:fill-white transition duration-300 w-4 h-4">
                <use href="/symbol-defs.svg#icon-tiktok"></use>
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="fill-primary hover:fill-white transition duration-300 w-4 h-4">
                <use href="/symbol-defs.svg#icon-instagram"></use>
              </svg>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-3">
        <Link
          href="https://www.education.ua/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="/education.png" alt="Sponsor" width={88} height={36} />
        </Link>

        <Link
          href="https://www.bodo.ua/ua/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="/bodo.png" alt="Sponsor" width={88} height={36} />
        </Link>
      </div>
    </div>
  );
}

export default Socials;
