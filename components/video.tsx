import BuyNowButton from "./ui/buy-now-button";

export default function Video() {
  return (
    <section className="relative bg-black flex flex-col">
      <div className="flex justify-center">
        <a href="video/dama-opt.m4v">
          <video
            src="video/dama-opt.m4v"
            style={{ height: "calc(100vh - 200px)" }}
            autoPlay
            muted
            loop
          ></video>
        </a>
      </div>
      <div className="p-10 flex justify-center">
        <BuyNowButton />
      </div>
    </section>
  );
}
