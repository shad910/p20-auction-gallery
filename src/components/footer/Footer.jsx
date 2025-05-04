import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#FFFFFF] text-primary-content p-10">
      <aside>
        <div>
          <a className="text-xl md:text-2xl text-[#003EA4] cursor-pointer">
            Auction<span className="text-[#FFD337] font-bold">Gallery</span>
          </a>
          <div className="flex justify-center items-center gap-x-3 text-lg md:text-xl text-[#000000] mt-2.5 mb-4">
            <p>Bid.</p>
            <p>Win.</p>
            <p>Own.</p>
          </div>
          <ul className=" grid grid-cols-2 gap-1.5 justify-self-center md:flex md:gap-x-7 text-[#000000] text-base md:text-lg">
            <li>
              <a className="cursor-pointer">Home</a>
            </li>
            <li>
              <a className="cursor-pointer">Auctions</a>
            </li>
            <li>
              <a className="cursor-pointer">Categories</a>
            </li>
            <li>
              <a className="cursor-pointer">How to works</a>
            </li>
          </ul>
        </div>
        <p className="text-[#000000] mt-6">
          © {new Date().getFullYear()} AuctionHub. All rights reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
