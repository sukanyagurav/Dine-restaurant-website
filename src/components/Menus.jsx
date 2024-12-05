import React from "react";
import Card from "./UI/Card";
import Heading from "./UI/Heading";
import { menus } from "../utils/menu";

const Menus = () => {
  return (
    <div className="bg-black text-white py-44 -mt-20 px-4">
      <Card>
        <div className="flex lg:gap-16 items-center flex-col lg:flex-row">
          <div className="p-4 text-center lg:text-left max-w-[500px]">
            <Heading h1Text={`A few highlights \n from our menu`} />
            <p className="text-2xl mt-8 font-thin">
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>
          </div>
          <div className="max-w-[520px]">
            {menus.map((menu) => (
              <div
                key={menu.id}
                className="flex flex-col  gap-8 md:flex-row md:gap-16 mt-8 items-center pb-8  border-b-[0.01em] border-b-[#ebebeb30]"
              >
                <div className="relative menuImg">
                  <picture>
                    <source
                      media="(min-width:980px)"
                      srcSet={menu.images.desktop}
                    />
                    <source
                      media="(min-width:800px)"
                      srcSet={menu.images.tablet}
                    />
                    <img
                      src={menu.images.mobile}
                      alt={menu.name}
                      className="max-w-full md:max-w-[130px]  relative block "
                    />
                  </picture>
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-[1.35rem]">{menu.name}</h3>
                  <p className="font-thin text-xl mt-1">{menu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Menus;
