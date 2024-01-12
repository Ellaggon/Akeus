import Image from "next/image";
import { ProductViewItemOrder } from "./ProductViewItemOrder";
import { SanitizeHTML } from "app/components/shared/SanitizaHTML.tsx";

interface ProductViewProps {
  product: ProductType;
}

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <main className="max-w-6xl md:mx-20 grid mt-20 md:grid-cols-2 gap-10">
      <section className="self-end">
        <Image
          src={product ? product.image : ""}
          alt={product ? product.title : ""}
          width={500}
          height={800}
          quality={80}
          loading="eager"
          className="md:rounded-md"
        />
      </section>
      <section className="flex flex-col mx-3">
        <h1 className="text-2xl font-bold mb-3">{product ? product.title : ""}</h1>
        <p className="border text-lg py-1 px-4 rounded-lg mb-3">{product ? product.tags : ""}</p>
        <SanitizeHTML tag="p">{product ? product.description : ""}</SanitizeHTML>
        <span className="text-secondary mt-3 text-2xl font-bold">$ {product ? product.price : ""}</span>
      <ProductViewItemOrder maxQuantity={10} />
      </section>
    </main>
  );
};
