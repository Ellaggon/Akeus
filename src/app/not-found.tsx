"use client";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex items-center flex-col md:mx-20 lg:mx-48 mt-5">
      <h1 className="text-center font-bold text-3xl">ERROR 404</h1>
      <div className="relative flex justify-center my-10">
        <Image
          alt="Error"
          src="/images/errorimg.jpeg"
          width={500}
          height={500}
        />
        <Link className="absolute bottom-14 border rounded-2xl p-4 px-8 bg-black" href="/store">
          Vamos de compras!
        </Link>
      </div>
        <p>Al parecer ha ocurrido un error 404</p>
    </main>
  );
}
