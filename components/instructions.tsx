import Accordion from "./accordion";

export default function Instructions() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-20">
          <h1
            className="mb-16 border-y text-5xl text-center font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            Instructions
          </h1>
          <div className="relative flex  items-center justify-center">
            <a href="video/dama-inst.m4v">
              <video src="video/dama-inst.m4v" autoPlay muted loop></video>
            </a>
          </div>
          <div className="grid mt-16 overflow-hidden sm:grid-cols-2 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-xl md:text-2xl">
                <span>1. Remove one of the protective layers</span>
              </h3>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-xl md:text-2xl">
                <span>
                  2. Place Dama so that the bottom side (the wider part) reaches
                  the point where you want your skirt to stay
                </span>
              </h3>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-xl md:text-2xl">
                <span>3. Remove the second protective layer</span>
              </h3>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-xl md:text-2xl">
                <span>
                  4. Pull your skirt over Dama and gently rub with your palm to
                  ensure it adheres well
                </span>
              </h3>
            </article>
          </div>
          <div className="mt-10">
            <Accordion title="Care & Washing Instructions" id="Instructions">
              <ul className="text-lg">
                <li>1. Mix a few drops of hand soap with cold soapy water.</li>
                <li>
                  2. Use your fingers (do not rub a towel or sponge on the
                  adhesive) to apply the soapy water to the adhesive.
                </li>
                <li>
                  3. Rinse the soapy water off the product using plain cold
                  water.
                </li>
                <li>
                  4. Let the product dry (ensure the adhesive touches the
                  surface as little as possible).
                </li>
                <li>
                  5. Place the protective layers on both sides of the product
                  after drying.
                </li>
              </ul>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
