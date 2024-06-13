import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akeus",
  description: "clothing store for warrior men",
  keywords: ["ecommerce", "warrior", "man", "men", "boys"],
};

export default function page () {
  return (
    <main>
      <MainProducts />
    </main>
  )
}
