import { Card, CardGrand } from "app/components/shared/Card"


const store = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:p-5">
      <Card />
      <Card />
      <CardGrand />
      <CardGrand />
      <Card />
      <Card />
    </main>
  )
}

export default store
