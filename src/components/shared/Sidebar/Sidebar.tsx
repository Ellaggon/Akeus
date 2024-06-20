"use client";
import Link from "next/link";
import { useState } from "react";

export const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div>
      <div className="fixed cursor-pointer bottom-10 right-10">
        <button
          className="inline-flex pb-1.5 px-2 flew-row justify-center items-center text-white text-center font-medium bg-opacity-60 opacity-70 hover:opacity-100 hover:bg-slate-900 rounded-full cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 dark:focus:ring-[#1da1f2]/55 hover:shadow-lg hover:scale-90 transition md:hidden text-3xl"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </div>
      <ul
        className={`flex-col md-flex md:flex-row md:text-xl fixed bottom-4 gap-3 z-10 ${
          menuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <Link href="/store">
          <div className="fixed bottom-32 right-4 md:hidden inline-flex flew-row justify-center items-center text-white text-center font-medium bg-opacity-60 opacity-70 hover:opacity-100 hover:bg-slate-900 rounded-lg cursor-pointer px-3 py-2.5 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 dark:focus:ring-[#1da1f2]/55 hover:shadow-lg hover:scale-90 transition">
            <p>Productos</p>
          </div>
        </Link>
        <Link href="/contact">
          <div className="fixed bottom-20 right-20 md:hidden inline-flex flew-row justify-center items-center text-white text-center font-medium bg-opacity-60 opacity-70 hover:opacity-100 hover:bg-slate-900 rounded-lg cursor-pointer px-3 py-2.5 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 dark:focus:ring-[#1da1f2]/55 hover:shadow-lg hover:scale-90 transition">
            <p>Contacto</p>
          </div>
        </Link>
        <Link href="/">
          <div className="fixed right-32 bottom-4 md:hidden inline-flex flew-row justify-center items-center text-white text-center font-medium bg-opacity-60 opacity-70 hover:opacity-100 hover:bg-slate-900 rounded-lg cursor-pointer px-3 py-2.5 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 dark:focus:ring-[#1da1f2]/55 hover:shadow-lg hover:scale-90 transition">
            <p>Inicio</p>
          </div>
        </Link>
      </ul>
      <div className="hidden sm:flex fixed right-10 gap-5 z-10">
        <Link href="/store">
          <p
            className="bg-black/50 border dark:border-white/10 border-gray-300 rounded-xl flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base text-black/70 dark:text-white transition hover:scale-110 hover:bg-black/60"
          >
            Tienda
          </p>
        </Link>
        <Link
          href="/"
          className="bg-black/50 border dark:border-white/10 border-gray-300 rounded-xl flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base text-black/70 dark:text-white transition hover:scale-110 hover:bg-black/60"
        >
          <p>Home</p>
        </Link>
        <Link
          href="/contact"
          className="bg-black/50 border dark:border-white/10 border-gray-300 rounded-xl flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base text-black/70 dark:text-white transition hover:scale-110 hover:bg-black/60"
        >
          <p>Contacto</p>
        </Link>
      </div>
    </div>
  );
};
