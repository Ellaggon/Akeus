import Link from "next/link"


const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main>
      <ul className="md:flex justify-around text-center my-5">
        <Link href="">
          <li>Polerones para Hombre</li>
        </Link>
        <Link href="">
          <li>Polerones para Niño</li>
        </Link>
      </ul>
      {children}
    </main>
  )
}

export default layout