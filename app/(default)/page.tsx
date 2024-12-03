export const metadata = {
  title: "Dama",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Video from "@/components/video";

export default function Home() {
  return (
    <>
      <Video />
      <Hero />
      <FeaturesPlanet />
      <BusinessCategories />
      {/*<LargeTestimonial />
      <Cta /> */}
    </>
  );
}
