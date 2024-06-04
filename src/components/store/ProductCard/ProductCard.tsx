import Image from "next/image";
import Link from "next/link";

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link
      href={`/product/${product.handle}?id=${product.id}`}
      className="hover:text-gray-300 flex justify-center mx-4"
    >
      <article className="min-h-64 relative ">
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
        <div className="p-3 border-gray-300 rounded-b">
          <h3>{product.title}</h3>
          <h3>{product.price} $</h3>
        </div>
        <button className="bg-black-500 text-white px-2 py-1 absolute top-0.5 left-0.5 transform-rotate-5 rounded">
          <svg
            className="w-7 h-7 text-yellow-500 bg-black rounded p-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
        </button>
      </article>
    </Link>
  );
};
