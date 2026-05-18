import Link from "next/link";
import { notFound } from "next/navigation";
import { Heart, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  const related = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <section className="container-px grid gap-8 py-10 md:gap-10 md:py-12 lg:grid-cols-[0.95fr_1fr]">
        <div className="product-media overflow-hidden rounded-[8px]">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[4/5] h-full w-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="min-w-0 lg:py-6">
          <Badge>{product.collection}</Badge>
          <h1 className="mt-5 text-4xl font-semibold leading-none sm:text-5xl md:text-7xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1 text-[#c69b46]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-[#665b55]">
              {product.rating} from {product.reviews} reviews
            </span>
          </div>
          <p className="mt-6 text-lg leading-8 text-[#665b55]">
            {product.description}
          </p>
          <div className="mt-7 flex items-end gap-3">
            <span className="text-3xl font-semibold">
              {formatPrice(product.price)}
            </span>
            {product.compareAt ? (
              <span className="text-lg text-[#9c8d85] line-through">
                {formatPrice(product.compareAt)}
              </span>
            ) : null}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              <ShoppingBag className="h-5 w-5" />
              Add to cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              aria-label="Add to wishlist"
              className="w-full sm:w-auto"
            >
              <Heart className="h-5 w-5" />
              Wishlist
            </Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              [Truck, "Free shipping over $75"],
              [ShieldCheck, "Salon-grade quality checked"],
            ].map(([Icon, text]) => (
              <div
                key={text as string}
                className="flex items-center gap-3 rounded-[8px] border border-[#eadfd7] bg-white p-4 text-sm font-semibold"
              >
                <Icon className="h-5 w-5 text-[#b9914f]" />
                {text as string}
              </div>
            ))}
          </div>
          <Accordion.Root
            type="single"
            collapsible
            className="mt-8 divide-y divide-[#eadfd7] rounded-[8px] border border-[#eadfd7] bg-white"
          >
            {[
              [
                "Details",
                "Includes prep kit, application guide, and luxury reusable storage. Designed for a polished finish with minimal filing.",
              ],
              [
                "Shipping",
                "Orders ship in 1-2 business days. Training course access is delivered instantly by email.",
              ],
              [
                "FAQ",
                "Press-on wear time varies by prep and adhesive choice. Most clients get 7-14 days with full prep.",
              ],
            ].map(([title, content]) => (
              <Accordion.Item key={title} value={title}>
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold">
                    {title}
                    <span>+</span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-5 pb-5 text-sm leading-7 text-[#665b55]">
                  {content}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>
      <section className="container-px bg-[#fff7ef] py-12 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            Complete the look
          </h2>
          <Link href="/shop" className="text-sm font-semibold text-[#9b6b2e]">
            Shop all
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}
