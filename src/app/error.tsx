"use client";
import Image from "next/image";

export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <main className="flex items-center flex-col md:mx-20 lg:mx-48 mt-5">
      <h1 className="text-center font-bold text-3xl">HA OCURRIDO UN ERROR</h1>
      <div className="relative flex justify-center my-10">
        <Image
          alt="Error"
          src="/images/errorimg1.png"
          width={500}
          height={500}
        />
        <button className="absolute bottom-14 border rounded-2xl p-4 px-8 bg-black" onClick={reset}>
          Reintentar
        </button>
      </div>
        <p>Al parecer ha ocurrido un error</p>
    </main>
  );
}
