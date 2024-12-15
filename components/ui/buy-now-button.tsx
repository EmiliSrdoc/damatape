export default function BuyNowButton() {
  return (
    <div className="p-10 flex justify-center w-full">
      <a
        className="cursor-pointer btn group w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-[50%]"
        href="https://buy.stripe.com/eVa8AB8nM4clesM144"
        target="_blank"
      >
        <span className="relative inline-flex items-center sm:text-xl sm:font-bold">
          Buy Now
        </span>
      </a>
    </div>
  );
}
