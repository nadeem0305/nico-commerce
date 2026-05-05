// data.ts
export interface Product {
  id: string
  price: number
  category: "Essentials" | "Premium" | "New Drops"
  image: string
  description: string
}

export const products: Product[] = [
  {
    id: "001",
    price: 180,
    category: "Essentials",
    image: "/hero.avif",
    description: "Heavyweight cotton boxy fit.",
  },
  {
    id: "002",
    price: 180,
    category: "Essentials",
    image: "/hero.avif",
    description: "Heavyweight cotton boxy fit.",
  },
  {
    id: "003",
    price: 180,
    category: "Premium",
    image: "/hero.avif",
    description: "Heavyweight cotton boxy fit.",
  },
  {
    id: "004",
    price: 180,
    category: "Premium",
    image: "/hero.avif",
    description: "Heavyweight cotton boxy fit.",
  },
  {
    id: "005",
    price: 180,
    category: "Essentials",
    image: "/hero.avif",
    description: "Heavyweight cotton boxy fit.",
  },
  {
    id: "006",
    price: 180,
    category: "New Drops",
    image: "/hero.avif",
    description: "Heavyweight cotton boxy fit.",
  },
]
