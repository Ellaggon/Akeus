import Image from "next/image";

const Contact = () => {
  return (
    <main>
      <article
        className="bg-cover bg-right bg-no-repeat h-screen flex justify-center items-center"
        style={{ backgroundImage: "url('/images/moon4.jpeg')" }}
      >
        <div className="w-full h-full bg-black bg-opacity-60">
        <form action="" className="flex flex-col p-48">
          <label htmlFor="">Nombre</label>
          <input type="text" />
          <label htmlFor="">Nombre</label>
          <input type="text" />
          <label htmlFor="">Nombre</label>
          <input type="text" />
          <label htmlFor="">Nombre</label>
          <input type="text" />
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </form>
        </div>
      </article>
    </main>
  );
};

export default Contact;
