"use client"

import { products } from "@/data"
import ProductCard from "./ProductCard"
import CategoryFilter from "./CategoryFilter"
import { useState } from "react"

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  // Filtering Logic
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section
      id="shop"
      className="relative bg-zinc-950 sm:pt-1 md:pt-10 pb-20 px-4"
    >
      {/* The "Handshake" Gradient */}
      <div className="absolute -top-24 left-0 w-full h-24 bg-linear-to-b from-transparent to-zinc-950" />

      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-white uppercase italic">
          The Drop <span className="text-zinc-600">/ 01</span>
        </h2>
        <div className="h-1 w-12 bg-white mt-2" />
      </div>
      <div className="flex justify-center items-center">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 mt-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-zinc-600 text-sm uppercase tracking-widest">
              Nothing in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
