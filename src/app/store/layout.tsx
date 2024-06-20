import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";

export default async function Layout({children}: {children: React.ReactNode}) {
  const collections = await getCollections();

  return (
    <>
      <nav className="flex justify-start m-5 gap-5">
        <Link href={"/store/"} className="bg-white/5 border dark:border-white/10 border-gray-300 rounded-xl flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base text-black/70 dark:text-white transition hover:scale-110 hover:bg-white/1">All</Link>
        {
          collections.map((el: any) => (
            <Link key={el.id} href={"/store/" + el.handle} className="bg-white/5 border dark:border-white/10 border-gray-300 rounded-xl flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base text-black/70 dark:text-white transition hover:scale-110 hover:bg-white/10">
              {el.title}
            </Link>
          ))
        }
      </nav>
      {children}
    </>
  )
}
