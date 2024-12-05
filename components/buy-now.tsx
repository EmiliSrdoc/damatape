import BuyNowButton from "./ui/buy-now-button";

export default function BuyNow() {
  return (
    <section className="relative">
      <BuyNowButton />
      <div className="flex justify-center">
        <img src="images/dama-logo.jpg" alt="dama-logo" className="w-[50%]" />
      </div>
    </section>
  );
}
