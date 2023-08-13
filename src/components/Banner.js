import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 ">
      <div className="flex flex-col lg:flex-row pb-16">
        <div className="lg:ml xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700 ">Real Estate</span> for Sale in
            Asia-Europe
          </h1>
          <p className="max-w-[480px] mb-8 mt-4">
            The pace in the Maldives is relaxed, but there is plenty to do on
            both land and water. Clear waters and rich marine life make for
            exhilarating diving and deep-sea fishing, whilst water sports
            ranging from kayaking and catamaran sailing to wakeboarding and kite
            surfing are available in abundance
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          {/* <img src={Image} alt="image" /> */}
          <img
            src="https://royal-tulip-sea-pearl-beach-resort-spa-cox-s-bazar.hotelmix.co.uk/data/Photos/OriginalPhoto/9600/960073/960073702/Royal-Tulip-Sea-Pearl-Beach-Resort-Spa-Coxs-Bazar-Exterior.JPEG"
            alt="image"
          />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
