import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const fullProducts = await getProducts(id);
  const product = fullProducts[0];

  return {
    title: product.title,
    Description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const fullProducts = await getProducts(id);
  const product = fullProducts[0];

  if (!id) {
    redirect("/store");
  }

  return <ProductView product={product} />;
}
