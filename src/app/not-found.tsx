import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-px grid min-h-[70vh] place-items-center bg-[#fff7ef] py-20 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b9914f]">
          404
        </p>
        <h1 className="mt-4 text-6xl font-semibold">This polish chipped.</h1>
        <p className="mt-5 text-lg leading-8 text-[#665b55]">
          The page you are looking for is not available in this concept, but the
          main shopping path is ready.
        </p>
        <Button asChild className="mt-7" size="lg">
          <Link href="/shop">Return to shop</Link>
        </Button>
      </div>
    </section>
  );
}
