"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  ["Shop", "/shop"],
  ["Collections", "/collections"],
  ["Training", "/training-courses"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfd7] bg-[#fffdfb]/90 backdrop-blur-xl">
      <div className="container-px flex h-16 items-center justify-between gap-3 md:h-18 md:gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 md:gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#d5b66c] bg-[#171211] font-display text-lg text-[#f6df9e] md:h-10 md:w-10 md:text-xl">
            N
          </span>
          <span className="truncate font-display text-xl font-semibold tracking-wide min-[400px]:text-2xl">
            NAILSXTARAN
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-[#4b403c] transition hover:text-[#b07937]"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="icon" aria-label="Search">
            <Link href="/shop">
              <Search className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Wishlist">
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Account">
            <Link href="/login">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/cart">
              <ShoppingBag className="h-4 w-4" />
              Cart
            </Link>
          </Button>
        </div>
        <button
          aria-label="Open menu"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#eadfd7] lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        className={cn(
          "container-px grid overflow-hidden border-t border-[#eadfd7] bg-[#fffdfb] transition-all lg:hidden",
          open ? "grid-rows-[1fr] py-5" : "grid-rows-[0fr]",
        )}
      >
        <nav className="flex min-h-0 flex-col gap-4 overflow-hidden">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium"
            >
              {label}
            </Link>
          ))}
          <div className="grid grid-cols-1 gap-2 pt-3 min-[430px]:grid-cols-3">
            <Button asChild variant="outline">
              <Link href="/wishlist">Wishlist</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/cart">Cart</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
