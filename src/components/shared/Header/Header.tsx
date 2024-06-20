"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <header>
      <nav className="flex justify-between p-3 items-center">
        <div>
          {session ? (
            <button
              className="px-3 border-b-2 text-stone-500 border-black hover:border-stone-500 justify-end items-center"
              onClick={() => signOut()}
            >
              LogOut
            </button>
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
        <Link href="/" className="text-xl w-20">
          <img src="/images/favicon-sbg.webp" alt="img" style={{filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))"}}/>
        </Link>
        <div className={`flex cursor-pointer text-sm h-10 items-center ${session ? "flex" : "hidden"}`}>
          {
            session?.user?.image? <img
            className="w-10 h-10 mx-3"
            src={session?.user?.image || ""}
            alt={session?.user?.name || ""}
          ></img> : ""
          }
          <p className="mr-5 text-stone-500">{`${session?.user?.name || ""}`}</p>
        </div>
      </nav>
    </header>
  );
};
