"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Expand } from "lucide-react"
import { Product } from "@/data"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col bg-transparent">
      {/* 1. Image Container */}
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
        <Image
          src={product.image}
          alt="Product"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
        />

        {/* RE-DESIGNED PRICE TAG: Minimalist Black Label */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10">
          <span className="text-[13px] font-bold text-white tracking-tighter">
            ₵{product.price}
          </span>
        </div>

        {/* RE-DESIGNED ACTION TRAY: Floating Glassmorphism */}
        <div className="absolute inset-x-0 bottom-0 p-3">
          <div className="flex gap-1.5 p-1.5 bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl">
            {/* View Details - Secondary Action */}
            <Link
              href={`/products/${product.id}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
            >
              <Expand size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Details
              </span>
            </Link>

            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white hover:bg-zinc-200 hover:cursor-pointer text-black rounded-lg transition-all active:scale-95">
              <ShoppingBag size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Add
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 px-1">
        <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-medium">
          {product.category}
        </span>
      </div>
    </div>
  )
}
