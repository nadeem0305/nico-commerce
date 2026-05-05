// "use client"
// import { useState } from "react"
// import Image from "next/image"
// import { MessageCircle, ChevronLeft } from "lucide-react"
// import Link from "next/link"
// import { Product } from "@/data"
// import { useCart } from "@/context/CartContext"

// export default function ProductDetailsClient({
//   product,
// }: {
//   product: Product
// }) {
//   const [selectedSize, setSelectedSize] = useState("")
//   const [quantity, setQuantity] = useState(1)

//   const sizes = ["S", "M", "L", "XL"]

// const handleAddToCart = () => {
//     if (!selectedSize) {
//       alert("Please select a size");
//       return;
//     }

//     addToCart({
//       id: product.id,
//       size: selectedSize,
//       quantity: 1,
//       price: product.price
//     });

//   // This generates the WhatsApp link with the order details
//   const handleOrder = () => {
//     if (!selectedSize) {
//       alert("Please select a size first")
//       return
//     }

//     const adminNumber = "233539448490" // Your WhatsApp number
//     const message = `*NEW ORDER*%0A
// *Item:* ${product.id}%0A
// *Size:* ${selectedSize}%0A
// *Qty:* ${quantity}%0A
// *Total:* ₵${product.price * quantity}%0A%0A
// I want to verify this purchase and arrange drop-off.`

//     window.open(`https://wa.me/${adminNumber}?text=${message}`, "_blank")
//   }

//   return (
//     <div className="flex flex-col md:flex-row gap-10">
//       {/* 1. Image Gallery */}
//       <div className="flex-1">
//         <Link
//           href="/"
//           className="inline-flex items-center text-zinc-500 hover:text-white mb-6 transition-colors"
//         >
//           <ChevronLeft size={16} />
//           <span className="text-xs uppercase tracking-widest ml-1">
//             Back to shop
//           </span>
//         </Link>
//         <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl border border-white/5 bg-zinc-900">
//           <Image
//             src={product.image}
//             alt="Product"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>

//       {/* 2. Content & Actions */}
//       <div className="flex-1 flex flex-col justify-center">
//         <div className="space-y-6">
//           <header>
//             <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] mb-2">
//               {product.category}
//             </p>
//             <h1 className="text-4xl font-bold text-white tracking-tighter italic">
//               ₵{product.price}
//             </h1>
//           </header>

//           <div className="h-pxs w-full bg-white/5" />

//           <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
//             {product.description}
//           </p>

//           {/* Size Selector */}
//           <div className="space-y-4">
//             <h3 className="text-xs font-bold text-white uppercase tracking-widest">
//               Select Size
//             </h3>
//             <div className="flex gap-2">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`w-12 h-12 rounded-xl border text-xs font-bold transition-all ${
//                     selectedSize === size
//                       ? "bg-white text-black border-white"
//                       : "border-white/10 text-zinc-500 hover:border-white/30"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Order Actions */}
//           <div className="pt-8 space-y-3">
//             <button
//               onClick={handleOrder}
//               className="w-full flex items-center justify-center gap-3 bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-zinc-200 active:scale-95 transition-all"
//             >
//               <MessageCircle size={20} fill="black" />
//               Order via WhatsApp
//             </button>
//             <p className="text-[10px] text-center text-zinc-600 uppercase tracking-widest">
//               An admin will call you to verify and arrange drop-off.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
