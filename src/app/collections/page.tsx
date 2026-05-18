import Link from "next/link";
import { collections } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="Curated luxury edits"
        copy="A clearer merchandising system that lets shoppers move by occasion, finish, and professional intent."
      />
      <section className="container-px grid gap-5 py-14 lg:grid-cols-3">
        {collections.map((collection) => (
          <article
            key={collection.name}
            className="overflow-hidden rounded-[8px] border border-[#eadfd7] bg-white"
          >
            <img
              src={collection.image}
              alt={collection.name}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="p-6">
              <h2 className="font-display text-4xl font-semibold">
                {collection.name}
              </h2>
              <p className="mt-3 leading-7 text-[#665b55]">{collection.copy}</p>
              <Button asChild className="mt-5">
                <Link href="/shop">Shop collection</Link>
              </Button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
