import React from "react";
import Card from "./UI/Card";
import Heading from "./UI/Heading";

const Menus = () => {
  return (
    <div className="bg-black text-white py-44 -mt-20 ">
      <Card>
        <div>
          <div>
            <Heading h1Text={"A few highlights from our menu"} />
            <p>
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>
          </div>
          <div>Menus</div>
        </div>
      </Card>
    </div>
  );
};

export default Menus;
