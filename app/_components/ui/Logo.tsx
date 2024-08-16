import Link from "next/link";

interface ILogoProps {
  width: string;
  height: string;
  className: string;
}

function Logo({ width, height, className }: ILogoProps) {
  return (
    <Link href="/" className={className}>
      <svg
        className={`text-primary hover:text-white transition duration-300 ${height} ${width}`}
      >
        <use href="/icons/symbol-defs.svg#icon-logo"></use>
      </svg>
    </Link>
  );
}

export default Logo;
