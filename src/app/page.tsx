import Link from "next/link";
import { ArrowRight, Check, Quote, Sparkles, Star } from "lucide-react";
import { collections, products, testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotionSection } from "@/components/motion-section";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { Input } from "@/components/ui/input";

export default function Home() {
  const bestSellers = products.slice(0, 4);

  return (
    <>
      <section className="container-px relative overflow-hidden bg-[#fff7ef] py-8 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="min-w-0 max-w-3xl">
            <Badge>Luxury nail artistry, redesigned</Badge>
            <h1 className="mt-5 max-w-full text-[3.1rem] font-semibold leading-[0.9] text-[#171211] min-[400px]:text-[3.55rem] sm:text-6xl md:mt-6 md:text-8xl">
              NAILSXTARAN
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#665b55] md:mt-6 md:text-lg md:leading-8">
              A cleaner, faster, conversion-led beauty storefront for premium
              press-ons, salon gels, artist tools, and pro training.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/shop">
                  Shop the edit
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/training-courses">Explore training</Link>
              </Button>
            </div>
            <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 min-[430px]:grid-cols-3 md:mt-9">
              {["4.9 average rating", "2-day dispatch", "Pro education"].map(
                (item) => (
                  <div
                    key={item}
                    className="min-w-0 rounded-[8px] border border-[#eadfd7] bg-white/70 p-3 text-sm font-semibold"
                  >
                    <Check className="mb-2 h-4 w-4 text-[#b9914f]" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-[#171211] md:min-h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=90"
              alt="Luxury manicure with soft blush polish"
              className="absolute inset-0 h-full w-full object-cover opacity-85"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-[8px] border border-white/20 bg-white/90 p-4 backdrop-blur md:inset-x-5 md:bottom-5 md:p-5">
              <div className="flex flex-col gap-4 min-[430px]:flex-row min-[430px]:items-center min-[430px]:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b6b2e]">
                    New drop
                  </p>
                  <h2 className="mt-1 font-display text-3xl font-semibold">
                    Bridal Atelier Sets
                  </h2>
                </div>
                <Button asChild variant="gold" className="w-full min-[430px]:w-auto">
                  <Link href="/collections">View</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection>
        <SectionHeading
          eyebrow="Best sellers"
          title="Client-loved essentials"
          copy="High-intent product cards with stronger imagery, reviews, quick add, and wishlist actions."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-white">
        <SectionHeading
          eyebrow="Collections"
          title="Shop by mood, finish, and occasion"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {collections.map((collection) => (
            <Link
              href={collection.href}
              key={collection.name}
              className="group relative min-h-[340px] overflow-hidden rounded-[8px] bg-[#171211] md:min-h-[430px]"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-display text-4xl font-semibold">
                  {collection.name}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/82">
                  {collection.copy}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </MotionSection>

      <MotionSection>
        <div className="grid overflow-hidden rounded-[8px] border border-[#eadfd7] bg-[#171211] text-white lg:grid-cols-2">
          <div className="p-5 sm:p-8 md:p-12">
            <Badge className="border-[#f6df9e]/40 bg-white/10 text-[#f6df9e]">
              Pro training
            </Badge>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-7xl">
              Turn technique into booked-out services.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#d8ccc4]">
              A premium training pathway with application demos, pricing
              strategy, retention scripts, and certificate-ready modules.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-[#f7eadf] sm:grid-cols-2">
              {[
                "Hybrid gel mastery",
                "Press-on brand setup",
                "Salon photography",
                "Client aftercare systems",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#f6df9e]" />
                  {item}
                </span>
              ))}
            </div>
            <Button asChild className="mt-8 w-full sm:w-auto" variant="gold" size="lg">
              <Link href="/training-courses">View courses</Link>
            </Button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=90"
            alt="Premium nail training salon"
            className="h-full min-h-[320px] w-full object-cover md:min-h-[420px]"
          />
        </div>
      </MotionSection>

      <MotionSection className="bg-[#fff7ef]">
        <SectionHeading eyebrow="Reviews" title="Proof that feels polished" />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[8px] border border-[#eadfd7] bg-white p-6"
            >
              <Quote className="h-7 w-7 text-[#c69b46]" />
              <p className="mt-5 text-lg leading-8 text-[#3d3430]">
                {item.quote}
              </p>
              <div className="mt-5 flex gap-1 text-[#c69b46]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 font-semibold">{item.name}</p>
              <p className="text-sm text-[#786b64]">{item.role}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading eyebrow="Instagram" title="@nailsxtaran" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
          {products.map((product) => (
            <img
              key={product.slug}
              src={product.image}
              alt={product.name}
              className="aspect-square rounded-[8px] object-cover"
            />
          ))}
        </div>
      </MotionSection>

      <section className="container-px pb-14 md:pb-20">
        <div className="rounded-[8px] border border-[#eadfd7] bg-white p-5 text-center shadow-sm sm:p-8 md:p-12">
          <Badge>Private list</Badge>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl md:text-6xl">
            Early access to drops, training seats, and salon offers.
          </h2>
          <form className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row">
            <Input placeholder="Email address" aria-label="Email address" />
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Sign up
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
