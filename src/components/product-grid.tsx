"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Product, products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Input } from "@/components/ui/input";

const categories = ["All", "Press Ons", "Gel Polish", "Tools", "Care"];

export function ProductGrid({ initialProducts = products }: { initialProducts?: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const visible = useMemo(() => {
    const next = initialProducts
      .filter((product) => category === "All" || product.category === category)
      .filter((product) =>
        `${product.name} ${product.description} ${product.collection}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      );

    if (sort === "price-low") return [...next].sort((a, b) => a.price - b.price);
    if (sort === "price-high") return [...next].sort((a, b) => b.price - a.price);
    if (sort === "rating") return [...next].sort((a, b) => b.rating - a.rating);
    return next;
  }, [category, initialProducts, query, sort]);

  return (
    <div>
      <div className="mb-8 grid gap-3 rounded-[8px] border border-[#eadfd7] bg-white p-3 shadow-sm lg:grid-cols-[1fr_auto_auto]">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9c8d85]" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search press-ons, gels, tools..."
            className="pl-10"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                category === item
                  ? "bg-[#171211] text-white"
                  : "bg-[#fff7ef] text-[#5f514b] hover:bg-[#f6dfe4]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="relative">
          <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9c8d85]" />
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="h-11 w-full rounded-full border border-[#e3d6cb] bg-white pl-10 pr-8 text-sm font-semibold outline-none focus:border-[#b9914f] lg:w-48"
          >
            <option value="featured">Featured</option>
            <option value="rating">Top rated</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
