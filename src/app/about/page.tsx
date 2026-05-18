import { PageHero } from "@/components/page-hero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A softer brand system with sharper commerce"
        copy="This concept repositions a nail beauty storefront as an elegant destination for product discovery, education, and client trust."
      />
      <section className="container-px grid gap-8 py-14 lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=90"
          alt="Luxury beauty studio"
          className="h-full min-h-[420px] rounded-[8px] object-cover"
        />
        <div className="self-center">
          <h2 className="text-5xl font-semibold leading-tight">
            Designed for premium perception and faster decisions.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#665b55]">
            The redesign improves hierarchy, navigation, product education,
            social proof, and mobile shopping paths. It keeps the feminine nail
            beauty mood, but gives it a cleaner editorial system and stronger
            conversion cues.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Luxury UI", "Commerce UX", "Training funnel"].map((item) => (
              <div
                key={item}
                className="rounded-[8px] border border-[#eadfd7] bg-white p-5 font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
