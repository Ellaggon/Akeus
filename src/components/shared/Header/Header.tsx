"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className="flex justify-between p-3 items-center">
        <Link href="/" className="text-xl">
          AKEUS
        </Link>
        <ul
          className={`flex-col md:flex md:flex-row md:gap-5 md:text-xl fixed left-[40%] justify-center ${
            menuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <Link href="/">
            <div className="inline-flex flew-row justify-center items-center text-white text-center font-medium bg-opacity-60 opacity-70 hover:opacity-100 hover:bg-slate-900 rounded-lg cursor-pointer px-3 py-2.5 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 dark:focus:ring-[#1da1f2]/55 hover:shadow-lg hover:scale-90 transition">
              <p>Inicio</p>
            </div>
          </Link>
          <Link href="/store">
            <div className="inline-flex flew-row justify-center items-center text-white text-center font-medium bg-opacity-60 opacity-70 hover:opacity-100 hover:bg-slate-700 rounded-lg cursor-pointer px-3 py-2.5 z-20 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 dark:focus:ring-[#1da1f2]/55 hover:shadow-lg hover:scale-90 transition">
              <p>Productos</p>
            </div>
          </Link>
          <Link href="/contact">
            <div className="inline-flex flew-row justify-center items-center text-white text-center font-medium bg-opacity-60 opacity-70 hover:opacity-100 hover:bg-slate-700 rounded-lg cursor-pointer px-3 py-2.5 z-20 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 dark:focus:ring-[#1da1f2]/55 hover:shadow-lg hover:scale-90 transition">
              <p>Contacto</p>
            </div>
          </Link>
          {session && (
            <div>
              <button className="md:hidden" onClick={() => signOut()}>
                LogOut
              </button>
            </div>
          )}
        </ul>
        <div className="flex items-center cursor-pointer">
          <Image
            className="w-10 mx-3"
            src={session?.user?.image || ""}
            alt={session?.user?.name || ""}
          />
          <p className="mr-5">{`${session?.user?.name || ""}`}</p>
          <div>
            {session ? (
              <div>
                <button
                  className="px-3 border-b-2 border-black hover:border-white justify-end hidden md:flex"
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
          <button className="md:hidden text-xl" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
      </nav>
    </header>
  );
};
