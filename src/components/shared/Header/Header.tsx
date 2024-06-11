"use client"
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const {data: session, status} = useSession();
  console.log({session, status})

  return (
    <header>
      <nav className="flex justify-between p-3">
        <Link href="/">
          <div>AKEUS</div>
        </Link>
        <ul className="flex justify-evenly gap-5">
          <Link href="/store">
            <li>Productos</li>
          </Link>
          <Link href="/contact">
            <li>Contacto</li>
          </Link>
        </ul>
        <div>
          {session ? (
            <div>
            <button
              className="px-5 hover:border-b-2 justify-end flex"
              onClick={() => signOut()}
            >
              LogOut
            </button>
            
          </div>
          ) : (
            <div className="flex justify-center">
            <button
              className="rounded-2xl border px-5 py-1 hover:bg-slate-900"
              onClick={() => signIn()}
            >
              Login con Google
            </button>
          </div>
          )}
        </div>
      </nav>
    </header>
  );
};
