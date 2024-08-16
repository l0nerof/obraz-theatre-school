import Link from "next/link";

interface ILogoProps {
  className: string;
}

function Logo({ className }: ILogoProps) {
  return (
    <Link href="/" className={className}>
      <svg
        className={`text-primary hover:text-white transition duration-300 ${className}`}
      >
        <use href="/icons/symbol-defs.svg#icon-logo"></use>
      </svg>
    </Link>
  );
}

export default Logo;
