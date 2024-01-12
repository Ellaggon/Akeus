import Image from "next/image";
import Link from "next/link";

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {

  return (
    <Link href={`/product/${product.handle}?id=${product.id}`} className="hover:text-gray-300">
      <article className="min-h-64 relative">
        {product.image && (
          <Image
            src={product.image}
            alt={product.title}
            quality={80}
            width={320}
            height={320}
            loading="eager"
          ></Image>
        )}
        <div className="p-3 pb-0 border-gray-300 rounded-b">
          <h3>{product.title}</h3>
        </div>
        <span className="bg-red-500 text-white px-2 py-1 absolute top-0.5 right-0.5 transform -rotate-5 rounded">${product.price} USD</span>
      </article>
    </Link>
  );
};
