"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, MessageCircle } from "lucide-react" // or your preferred icons

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-white"
        >
          BRAND.
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-6 text-white">
          {/* Simple Bag Icon with Badge */}
          <Link
            href="/cart"
            className="relative transition-transform active:scale-90"
          >
            <ShoppingBag size={22} strokeWidth={2} />
            {/* The Badge - Hardcoded '2' for now until CartContext is ready */}
            <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>

          <Link href="https://wa.me/yournumber" target="_blank">
            <MessageCircle size={22} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </nav>
  )
}
