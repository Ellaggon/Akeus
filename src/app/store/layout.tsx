import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";

export default async function Layout({children}: {children: React.ReactNode}) {
  const collections = await getCollections();

  return (
    <>
      <nav className="flex justify-around my-5">
        {
          collections.map((el: any) => (
            <Link key={el.id} href={"/store/" + el.handle}>
              {el.title}
            </Link>
          ))
        }
      </nav>
      {children}
    </>
  )
}
