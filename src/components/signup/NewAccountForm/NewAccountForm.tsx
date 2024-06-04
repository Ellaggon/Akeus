"use client";

import { useState } from "react";
import "./newAccountForm.css";

export const NewAccountForm = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <article className="max-w-[30rem] block mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-3 bg-gradient-to-r from-amber-600 to-pink-500 bg-clip-text text-transparent">
        New Account
      </h1>

      <form
        className="grid grid-cols-2 gap-y-[2rem] gap-x-[1rem] my-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="firstName"
          placeholder="Name"
          disabled={loading}
        />
        <input
          type="text"
          name="lastName"
          placeholder="LastName"
          disabled={loading}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
          className="col-span-2"
          disabled={loading}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone number"
          pattern="^[0-9]*$"
          className="col-span-2"
          disabled={loading}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="col-span-2"
          disabled={loading}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="re-type password"
          className="col-span-2"
          disabled={loading}
        />
        <input
          type="submit"
          name="submit"
          value="CREAR CUENTA"
          className="col-span-2 deley-button"
          disabled={loading}
        />
      </form>
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => {
            return (
              <p key={index} className="mt-5 text-red-600 font-thin">
                {error}
              </p>
            );
          })}
        </div>
      )}
    </article>
  );
};
