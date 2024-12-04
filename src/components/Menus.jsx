import React from "react";
import Card from "./UI/Card";
import Heading from "./UI/Heading";
import { menus } from "../utils/menu";

const Menus = () => {
  return (
    <div className="bg-black text-white py-44 -mt-20 ">
      <Card>
        <div className="flex gap-20">
          <div className="max-w-[500px]">
            <Heading  h1Text={`A few highlights \n from our menu`} />
            <p>
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>
          </div>
          <div>
            {menus.map((menu)=>(
              <div key={menu.id} className="flex gap-20 mt-8">
                <picture>
                <source media="(min-width:980px)" srcset={menu.images.desktop}  />
                <source media="(min-width:800px)" srcset={menu.images.tablet}  />
                  <img src={menu.images.mobile} alt={menu.name} />
                </picture>
                <div>
                  <h3>{menu.name}</h3>
                  <p>{menu.description}</p>
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
