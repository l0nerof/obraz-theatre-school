import Image from "next/image";

function Clients() {
  return (
    <ul className="flex items-center gap-16 py-6 ml-16">
      <li>
        <Image src="/fiesta.png" alt="Client" width={76} height={48} />
      </li>

      <li>
        <Image src="/butterfly.png" alt="Client" width={76} height={48} />
      </li>

      <li>
        <Image src="/sunshine.png" alt="Client" width={48} height={48} />
      </li>

      <li>
        <Image src="/bodo-logo.png" alt="Client" width={114} height={48} />
      </li>

      <li>
        <Image src="/luxoft.png" alt="Client" width={91} height={48} />
      </li>

      <li>
        <Image src="/dec.png" alt="Client" width={124} height={48} />
      </li>
    </ul>
  );
}

export default Clients;
