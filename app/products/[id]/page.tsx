import { products } from "@/data"
import { notFound } from "next/navigation"

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = await params
  const product = products.find((p) => {
    console.log(p.id, params.id)
    return p.id === id
  })

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-zinc-950 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">product info</div>
    </main>
  )
}
