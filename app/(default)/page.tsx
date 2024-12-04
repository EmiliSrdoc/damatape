export const metadata = {
  title: "Dama",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import Instructions from "@/components/instructions";
import Features from "@/components/features";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Video from "@/components/video";

export default function Home() {
  return (
    <>
      <Video />
      <Hero />
      <Features />
      <Instructions />
      {/*<LargeTestimonial />
      <Cta /> */}
    </>
  );
}
