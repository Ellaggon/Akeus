import { ProductCard } from "../ProductCard"

interface ProductsWrapperProps {
  products: ProductType[]
}

export const ProductsWrapper = ({products}: ProductsWrapperProps) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </section>
  )
}