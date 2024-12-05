import React from "react";
import Card from "./UI/Card";
import { Link } from "react-router";
import logo from "../../public/logo.svg";
const Footer = () => {
  return (
    <div className="bg-black p-4 py-24 text-white">
      <Card classes="flex flex-col text-center md:text-left items-center md:items-start md:flex-row gap-12 justify-between">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <address className="not-italic text-2xl leading-relaxed"> 
          <p>Marthwaite, Sedbergh</p>
          <p>Cumbria</p>
          <p>+00 44 123 4567</p>
        </address>
        <div className="uppercase text-xl leading-loose">
          <h2 >Open times</h2>
          <p>Mon - Fri: 9:00 am - 9:00 pm</p>
          <p>Sat - Sun: 9:00 am - 10:00 pm</p>
        </div>

      </Card>
    </div>
  );
};

export default Footer;
