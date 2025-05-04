import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero h-[500px] bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/8DFDyPvZ/Banner-Image.jpg')",
          backgroundPosition: "left 1% top 65%",
        }}
      >
        <div className="justify-self-start items-center text-neutral-content text-left">
          <div className="max-w-lg pl-4 md:pl-14">
            <h1 className="mb-5 text-3xl font-bold">
              Bid on Unique Items from Around the World
            </h1>
            <p className="mb-5">
              Discover rare collectibles, luxury goods, and vintage treasures in
              our curated auctions
            </p>
            <button className="btn px-5 py-3 rounded-4xl bg-white text-black">
              Explore Auctions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
