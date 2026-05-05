// "use client"

// import React, { createContext, useContext, useState, useEffect } from "react"

// interface CartItem {
//   id: string
//   size: string
//   quantity: number
//   price: number
// }

// interface CartContextType {
//   cart: CartItem[]
//   addToCart: (item: CartItem) => void
//   removeFromCart: (id: string, size: string) => void
//   totalItems: number
//   totalPrice: number
// }

// const CartContext = createContext<CartContextType | undefined>(undefined)

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([])
//   const [isHydrated, setIsHydrated] = useState(false)

//   // 1. The Hydration Handshake
//   // We treat the initial load as a single "Synchronization" event
//   useEffect(() => {
//     const initCart = () => {
//       try {
//         const saved = localStorage.getItem("startup_cart")
//         if (saved) {
//           setCart(JSON.parse(saved))
//         }
//       } catch (error) {
//         console.error("Failed to parse cart:", error)
//       } finally {
//         setIsHydrated(true)
//       }
//     }

//     initCart()
//   }, [])

//   // 2. Persistent Storage
//   // We only write to localStorage once we know we are hydrated
//   useEffect(() => {
//     if (isHydrated) {
//       localStorage.setItem("startup_cart", JSON.stringify(cart))
//     }
//   }, [cart, isHydrated])

//   const addToCart = (newItem: CartItem) => {
//     setCart((prev) => {
//       const existing = prev.find(
//         (item) => item.id === newItem.id && item.size === newItem.size,
//       )
//       if (existing) {
//         return prev.map((item) =>
//           item.id === newItem.id && item.size === newItem.size
//             ? { ...item, quantity: item.quantity + newItem.quantity }
//             : item,
//         )
//       }
//       return [...prev, newItem]
//     })
//   }

//   const removeFromCart = (id: string, size: string) => {
//     setCart((prev) => prev.filter((i) => !(i.id === id && i.size === size)))
//   }

//   const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
//   const totalPrice = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0,
//   )

//   // Prevents the "Flicker" or Hydration Mismatch by not rendering
//   // until the client-side data is ready.
//   if (!isHydrated) {
//     return null
//   }

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, totalItems, totalPrice }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (!context) throw new Error("useCart must be used within a CartProvider")
//   return context
// }
