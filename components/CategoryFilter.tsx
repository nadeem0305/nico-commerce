
"use client"

const categories = ["All", "Essentials", "Premium", "New Drops"]

interface FilterProps {
  active: string
  onChange: (cat: string) => void
}

export default function CategoryFilter({ active, onChange }: FilterProps) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-6 pt-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`whitespace-nowrap px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all border ${
            active === cat
              ? "bg-white text-black border-white"
              : "bg-transparent text-zinc-500 border-white/10 hover:border-white/30"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
