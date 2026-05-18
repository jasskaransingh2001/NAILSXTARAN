import { Heart } from "lucide-react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { PageHero } from "@/components/page-hero";

export default function WishlistPage() {
  return (
    <>
      <PageHero
        eyebrow="Wishlist"
        title="Saved for your next manicure"
        copy="A conversion-friendly wishlist keeps customers returning to favorites and simplifies gift or refill decisions."
      />
      <section className="container-px py-14">
        <div className="mb-8 flex items-center gap-3 text-sm font-semibold text-[#665b55]">
          <Heart className="h-5 w-5 text-[#b76e79]" />
          Previewing a curated saved list
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
