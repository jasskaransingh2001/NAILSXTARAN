import { PageHero } from "@/components/page-hero";
import { ProductGrid } from "@/components/product-grid";

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Premium nail essentials"
        copy="Browse press-ons, gels, care products, and pro tools with cleaner filtering, sorting, search, quick add, and wishlist actions."
      />
      <section className="container-px py-14">
        <ProductGrid />
      </section>
    </>
  );
}
