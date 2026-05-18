import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const courses = [
  "Luxury press-on brand intensive",
  "Gel overlay and retention mastery",
  "Client photography and content system",
];

export default function TrainingCoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Education that feels as premium as the work"
        copy="A course experience designed to convert aspiring nail artists with transparent outcomes, elegant structure, and trust-building details."
      />
      <section className="container-px grid gap-8 py-12 md:py-14 lg:grid-cols-[0.8fr_1fr]">
        <div className="rounded-[8px] bg-[#171211] p-5 text-white sm:p-8 md:p-10">
          <Badge className="border-[#f6df9e]/40 bg-white/10 text-[#f6df9e]">
            Signature program
          </Badge>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Pro Nail Artist Accelerator
          </h2>
          <p className="mt-5 leading-8 text-[#d8ccc4]">
            Learn application, service design, product photography, pricing,
            and client retention across 6 guided modules.
          </p>
          <Button className="mt-7 w-full sm:w-auto" variant="gold" size="lg">
            Reserve a seat
          </Button>
        </div>
        <div className="grid gap-4">
          {courses.map((course, index) => (
            <article
              key={course}
              className="rounded-[8px] border border-[#eadfd7] bg-white p-5 sm:p-6"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b9914f]">
                Module 0{index + 1}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                {course}
              </h3>
              <p className="mt-3 leading-7 text-[#665b55]">
                Includes workbook templates, technique demos, portfolio prompts,
                and a checklist for launching the service with confidence.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#b9914f]" />
                Certificate-ready lesson path
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
