import Link from "next/link";
import { Camera, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="border-t border-[#eadfd7] bg-[#171211] text-white">
      <div className="container-px grid gap-10 py-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
        <div>
          <div className="font-display text-3xl font-semibold text-[#f6df9e]">
            NAILSXTARAN
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#d8ccc4]">
            A premium redesign concept for a nail beauty brand with stronger
            commerce flows, education pathways, and editorial luxury.
          </p>
          <div className="mt-5 flex gap-3 text-[#f6df9e]">
            <Camera className="h-5 w-5" />
            <Mail className="h-5 w-5" />
            <MapPin className="h-5 w-5" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f6df9e]">
            Shop
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-[#d8ccc4]">
            <Link href="/shop">All products</Link>
            <Link href="/collections">Collections</Link>
            <Link href="/wishlist">Wishlist</Link>
            <Link href="/cart">Cart</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f6df9e]">
            Studio
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-[#d8ccc4]">
            <Link href="/training-courses">Training courses</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/login">Login/Register</Link>
          </div>
        </div>
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#f6df9e]">
            <Sparkles className="h-4 w-4" />
            Newsletter
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#d8ccc4]">
            Monthly drops, course openings, and private client offers.
          </p>
          <form className="mt-5 flex gap-2">
            <Input
              aria-label="Email address"
              placeholder="Email address"
              className="border-white/15 bg-white/10 text-white placeholder:text-[#b8aaa2]"
            />
            <Button type="submit" variant="gold">
              Join
            </Button>
          </form>
        </div>
      </div>
      <div className="container-px border-t border-white/10 py-5 text-xs text-[#b8aaa2]">
        Portfolio concept only. Inspired by the category, redesigned as an
        original premium shopping experience.
      </div>
    </footer>
  );
}
