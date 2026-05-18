import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  return (
    <section className="container-px grid min-h-[60vh] place-items-center py-14 text-center md:py-20">
      <div className="max-w-lg">
        <ShoppingBag className="mx-auto h-12 w-12 text-[#b9914f]" />
        <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">
          Your cart is ready
        </h1>
        <p className="mt-4 leading-7 text-[#665b55]">
          This concept keeps cart actions clear, mobile-friendly, and checkout
          focused. Add a best seller to see where the flow would continue.
        </p>
        <Button asChild className="mt-7 w-full sm:w-auto" size="lg">
          <Link href="/shop">Continue shopping</Link>
        </Button>
      </div>
    </section>
  );
}
