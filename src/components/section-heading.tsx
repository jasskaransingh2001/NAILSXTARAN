import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#171211] sm:text-4xl md:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#665b55] md:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}
