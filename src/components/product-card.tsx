"use client";

import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[8px] border border-[#eadfd7] bg-white shadow-sm transition hover:shadow-xl hover:shadow-[#d9b4a1]/20"
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="product-media relative aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover mix-blend-multiply transition duration-700 group-hover:scale-105"
          />
          <button
            aria-label={`Add ${product.name} to wishlist`}
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#171211] shadow-sm transition hover:text-[#b76e79]"
          >
            <Heart className="h-5 w-5" />
          </button>
          {product.badge ? (
            <Badge className="absolute left-3 top-3 bg-white/90">
              {product.badge}
            </Badge>
          ) : null}
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.16em] text-[#9b7a44]">
          <span>{product.category}</span>
          <span className="flex items-center gap-1 normal-case tracking-normal text-[#665b55]">
            <Star className="h-3.5 w-3.5 fill-[#c69b46] text-[#c69b46]" />
            {product.rating}
          </span>
        </div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-display text-2xl font-semibold leading-tight transition group-hover:text-[#9b6b2e]">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#665b55]">
          {product.description}
        </p>
        <div className="mt-4 flex flex-col gap-3 min-[430px]:flex-row min-[430px]:items-center min-[430px]:justify-between">
          <div className="flex min-w-0 items-baseline gap-2">
            <span className="font-semibold">{formatPrice(product.price)}</span>
            {product.compareAt ? (
              <span className="text-sm text-[#a79890] line-through">
                {formatPrice(product.compareAt)}
              </span>
            ) : null}
          </div>
          <Button size="sm" variant="outline" className="w-full min-[430px]:w-auto">
            <ShoppingBag className="h-4 w-4" />
            Quick add
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
