import Image from "next/image";
import { getMainProducts } from "app/services/shopify/products"

export const MainProducts = async () => {
    const products = await getMainProducts()
  
  return (
    <section>
      <h3>New products realized!</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          products?.map((el:any) => {
            const imageSrc = el.images?.[0]?.src;

            return (
              <article key={el.id} className="relative h-80 flex justify-center items-center opacity-60">
                <p className="absolute top-3 right-3 z-10 text-xl font-bold">{el.title }</p>
                {
                  imageSrc && <Image src={imageSrc} alt={el.title} fill loading="eager" className="object-cover cursor-pointer"></Image>
                }
              </article>
            )
          })
        }
      </div>
    </section>
  );
};
