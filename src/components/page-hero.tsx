import { Badge } from "@/components/ui/badge";

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="container-px bg-[#fff7ef] py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-5 text-5xl font-semibold leading-none md:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#665b55]">
          {copy}
        </p>
      </div>
    </section>
  );
}
