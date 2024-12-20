export const metadata = {
  title: "Dama - Prevents your skirt from riding up",
  description: "Dama prevents your skirt from riding up",
};

import Hero from "@/components/hero-home";
import Instructions from "@/components/instructions";
import Features from "@/components/features";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Video from "@/components/video";
import FAQ from "@/components/faq";
import BuyNow from "@/components/buy-now";

export default function Home() {
  return (
    <>
      <Video />
      <Hero />
      <Features />
      <Instructions />
      <FAQ />
      <BuyNow />
      {/*<LargeTestimonial />
      <Cta /> */}
    </>
  );
}
