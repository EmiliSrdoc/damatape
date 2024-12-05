import Accordion from "./accordion";

export default function FAQ() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-20">
          <h1
            className="mb-16 border-y text-5xl text-center font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            FAQ
          </h1>
          <div className="mt-10">
            <Accordion
              title="Q: “Is Dama visible when worn?”"
              id="Instructions"
            >
              <div className="text-lg">
                A: "Mostly not, unless you're wearing a very thin material that
                is white or very bright. Dama is only about 2 mm thick, so it
                won't be visible under most skirts."
              </div>
            </Accordion>
            <Accordion title="Q: “Can Dama be reused?”" id="FAQ1">
              <div className="text-lg">
                A: "Yes, Dama can be reused up to 10 times if you follow the
                care instructions properly."
              </div>
            </Accordion>
            <Accordion
              title="Q: “Is it safe for all types of fabric?”"
              id="FAQ1"
            >
              <div className="text-lg">
                A: "Dama is made out of bio-adhesive and is safe for most types
                of fabric. However, we recommend testing it on delicate or
                specialty materials to ensure there is no adverse effect."
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
