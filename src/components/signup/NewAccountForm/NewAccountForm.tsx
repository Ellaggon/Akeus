"use client";

import { useState } from "react";
import { handleCreateUser } from "app/actions";

export const NewAccountForm = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSbubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    handleCreateUser(formData)
  };

  return (
    <article className="max-w-[30rem] block mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        New Account
      </h1>
      <form className="grid grid-cols-2 gap-4 text-black" onSubmit={handleSbubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="Name"
          className="rounded-md p-2"
          disabled={loading}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Lastname"
          className="rounded-md p-2"
          disabled={loading}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
          className="rounded-md p-2 col-span-2"
          disabled={loading}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone number"
          pattern="^[0-9]*$"
          className="rounded-md p-2 col-span-2"
          disabled={loading}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="rounded-md p-2 col-span-2"
          disabled={loading}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="re-type password"
          className="rounded-md p-2 col-span-2"
          disabled={loading}
        />
        <input
          type="submit"
          name="submit"
          value="CREAR CUENTA"
          className="rounded-lg border p-2 col-span-2 text-white"
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
