"use client"

import { SyntheticEvent, useState } from "react";
interface ProductViewItemOrderProps {
  maxQuantity: number,
}

export const ProductViewItemOrder = ({maxQuantity}: ProductViewItemOrderProps) => {
  const [count, setCount] = useState(1);

  const handleAdd = (e: SyntheticEvent) => {
    e.preventDefault()
    if(count === maxQuantity) return;
    setCount(count + 1)
  };

  const handleSubstract = (e: SyntheticEvent) => {
    e.preventDefault();
    if(count === 1) return;
    setCount(count - 1)
  };

  const handleSubmit = (e: SyntheticEvent) => e.preventDefault();


  return (
    <article className="grid grid-cols-[auto_1fr] gap-5 mt-8">
      <div className="flex h-12 gap-2 items-center rounded-lg bg-gray-800 p-2">
        <button className="flex justify-center items-center h-full w-8 text-2xl font-bold text-white bg-transparent border-none p-0 cursor-pointer" onClick={handleSubstract}>
          -
        </button>
        <p className="text-lg font-normal m-0">{count}</p>
        <button className="flex justify-center items-center h-full w-8 text-2xl font-bold text-white bg-transparent border-none p-0 cursor-pointer" onClick={handleAdd}>
          +
        </button>
      </div>
      <form action="" className="h-12 w-full">
        <button className="w-full h-full flex justify-center items-center border-none rounded-lg bg-gradient-to-r from-purple-600 to-blue-700 text-white font-bold text-lg cursor-pointer" onClick={handleSubmit}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
              strokeWidth="0"
              fill="currentColor"
            />
          </svg>
          <span>Add to cart</span>
        </button>
      </form>
    </article>
  );
};
