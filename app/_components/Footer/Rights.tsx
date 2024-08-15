import Link from "next/link";

function Rights() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link
        href="/"
        className="underline text-gray text-xs hover:text-primary transition duration-300"
      >
        Політика конфіденційності
      </Link>
      <p className="text-gray text-xs">© 2024 OBRAZ. All right reserved.</p>
    </div>
  );
}

export default Rights;
