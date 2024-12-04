import Image from "next/image";
import DamaBagImg from "@/public/images/dama-bag.png";
import DamaLegImg from "@/public/images/dama-leg.png";

export default function Features() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Dama is your go-to accessory for keeping your skirt in check, so
              you can walk with confidence and style
            </h2>
          </div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-20 mb-10">
            <Image
              className="rounded-full bg-gray-900"
              src={DamaBagImg}
              width={400}
              height={400}
              alt="Dama bag"
            />
            <Image
              className="rounded-full bg-gray-900"
              src={DamaLegImg}
              width={400}
              height={400}
              alt="Dama bag"
            />
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200 text-xl md:text-2xl">
                <span>Dual adhesive for secure skin & fabric grip</span>
              </h3>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200 text-xl md:text-2xl">
                <span>Designed for multiple uses and reusability</span>
              </h3>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200 text-xl md:text-2xl">
                <span>Safe on fabrics with no residue or damage</span>
              </h3>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200 text-xl md:text-2xl">
                <span>Skin-safe design for worry-free wear</span>
              </h3>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200 text-xl md:text-2xl">
                <span>Seamless design ensures undetectable wear</span>
              </h3>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200 text-xl md:text-2xl">
                <span>Easy to apply and remove</span>
              </h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
