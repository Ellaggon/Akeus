
import Link from "next/link";
import { Modal } from "../Modal";

export const Header = () => {
  return (
      <header>
      <nav className="flex justify-between p-3">
        <Link href="/">
          <div>Akeus</div>
        </Link>
        <ul className="flex justify-evenly gap-5">
          <Modal />
          <Link href="/store">
            <li>Productos</li>
          </Link>
          <Link href="/contact">
            <li>Contacto</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
