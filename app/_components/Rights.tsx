import Link from "next/link";

function Rights() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link
        href="/"
        className="underline text-secondary hover:text-primary transition duration-300"
      >
        Політика конфіденційності
      </Link>
      <p className="text-secondary">© 2024 OBRAZ. All right reserved.</p>
    </div>
  );
}

export default Rights;
