import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav className="flex justify-between p-3">
        <Link href="/">
          <div>Akeus</div>
        </Link>
        <ul className="flex justify-evenly gap-5">
          <Link href="/store">
            <li>Inicio</li>
          </Link>
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
