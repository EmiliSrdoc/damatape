import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-0 md:pb-20 md:pt-10">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Confident . Classy . Dama
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg sm:text-xl text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Dama is an innovative accessory that ensures your skirt stays in
                place while you walk, allowing you to maintain poise and
                elegance.
              </p>
            </div>
          </div>
          {/* Hero image */}
          <img src="images/dama-package.png" alt="dama package" />
        </div>
      </div>
    </section>
  );
}
