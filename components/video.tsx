export default function Video() {
  return (
    <section className="relative">
      <a
        className="sm:block hidden absolute top-8 right-10 z-10 cursor-pointer btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
        href="https://buy.stripe.com/eVa8AB8nM4clesM144"
        target="_blank"
      >
        <span className="relative inline-flex items-center">Order Now</span>
      </a>
      <a href="video/dama-opt.m4v">
        <video src="video/dama-opt.m4v" autoPlay muted loop></video>
      </a>
      <div className="sm:hidden p-10">
        <a
          className="cursor-pointer btn group w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
          href="https://buy.stripe.com/eVa8AB8nM4clesM144"
          target="_blank"
        >
          <span className="relative inline-flex items-center">Order Now</span>
        </a>
      </div>
    </section>
  );
}
