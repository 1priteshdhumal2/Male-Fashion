import React from "react";
import { assets } from "../assets/assets.js";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="block">
      <div
        className="h-[400px] xl:h-[600px] lg:h-[450px] smbg-no-repeat bg-cover bg-center-top "
        style={{ backgroundImage: `url(${assets.hero_2})` }}
      >
        <div className="mx-auto xl:max-w-[1170px] ">
          <div className="flex flex-wrap -mx-4">
            <div className="relative w-full px-12 md:w-8/12 lg:w-7/12 xl:w-5/12 top-20 ">
              <h6 className="text-[#e53637] text-sm font-bold uppercase tracking-widest mb-7 relative opacity-1 top-0">
                Summer Collection
              </h6>
              <h2 className=" text-gray-900 opacity-1 text-5xl font-bold leading-tight mb-6 ">
                Fall - Winter Collections 2030
              </h2>
              <p className="prata-regular text-[15px] leading-[25px] mb-9 relative">
                A specialist label creating luxury essentials. Ethically crafted
                with an unwavering commitment to exceptional quality.
              </p>
              <NavLink
                to="/collection"
                className="inline-block text-[13px] font-bold uppercase px-7 py-3 text-white bg-black tracking-[4px]"
              >
                Shop now
                <span className="text-[20px] relative top-1 font-bold "></span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
