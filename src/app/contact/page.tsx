import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Client care, courses, and collaborations"
        copy="A calm contact page with clear intent paths for shoppers, learners, and partnership inquiries."
      />
      <section className="container-px grid gap-8 py-12 md:py-14 lg:grid-cols-[0.75fr_1fr]">
        <div className="rounded-[8px] bg-[#171211] p-5 text-white sm:p-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">Studio details</h2>
          <div className="mt-8 grid gap-5 text-[#d8ccc4]">
            <p className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-[#f6df9e]" />
              hello@nailsxtaran.example
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[#f6df9e]" />
              +1 555 014 8821
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-[#f6df9e]" />
              Online studio and private training
            </p>
          </div>
        </div>
        <form className="grid gap-4 rounded-[8px] border border-[#eadfd7] bg-white p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="First name" />
            <Input placeholder="Email address" type="email" />
          </div>
          <Input placeholder="Inquiry type" />
          <textarea
            placeholder="Tell us what you need"
            className="min-h-36 rounded-[8px] border border-[#e3d6cb] bg-white px-4 py-3 text-sm outline-none focus:border-[#b9914f] focus:ring-2 focus:ring-[#ead8b6]"
          />
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Send message
          </Button>
        </form>
      </section>
    </>
  );
}
