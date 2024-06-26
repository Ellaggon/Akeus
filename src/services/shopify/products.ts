import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getProducts = async (id?: string): Promise<ProductType[]> => {
    const apiUrl = id
      ? `${shopifyUrls.products.all}?ids=${id}`
      : shopifyUrls.products.all;
      
    const res = await fetch(apiUrl, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });

    const { products } = await res.json();

    const transformedProducts = products.map((product: any) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product?.images[0]?.src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      }
    });
    return transformedProducts;
};

export const getMainProducts = async () => {
  try {
    const res = await fetch(shopifyUrls.products.mainProducts, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
      cache: "force-cache",
      next: {
        tags: ["main-products"]
      },
    });
    const { products } = await res.json()
    return products;
  } catch (err) {
    console.log(err);
  }
}