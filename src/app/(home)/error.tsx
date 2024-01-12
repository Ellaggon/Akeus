"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}


export default function Error({ error, reset }: ErrorProps) {

  useEffect(() => {
    console.log(error)
  
  }, [])
  
  return (
    <article className="flex items-center flex-col md:mx-20 lg:mx-48 mt-5">
      <h1 className="text-center font-bold text-3xl">HA OCURRIDO UN ERROR =(</h1>
      <div className="relative flex justify-center my-10">
        <button className="absolute bottom-14 border rounded-2xl p-4 px-8 bg-black" onClick={reset}>
          Reintentar
        </button>
      </div>
    </article>
  );
}
