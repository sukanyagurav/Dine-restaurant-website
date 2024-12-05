import React from "react";
import Heading from "./UI/Heading";
import Button from "./UI/Button";
import Card from "./UI/Card";
import { useNavigate } from "react-router";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <div className=" p-8 cta bg-cover bg-center bg-no-repeat bg-[url('/homepage/ready-bg-tablet@2x.jpg')] md:bg-[url('/homepage/ready-bg-desktop.jpg')] lg:bg-[url('/homepage/ready-bg-desktop.jpg')]">
      <Card classes="flex h-[230px] justify-center items-center flex-col lg:flex-row gap-8 lg:justify-between">
        <h2 className="text-white text-center font-semibold text-5xl">Ready to make a reservation?</h2>
        <Button
          text="Book Table"
          classes="border-whitev text-white hover:bg-white hover:text-black"
          onClick={() => navigate("/booking")}
        />
      </Card>
    </div>
  );
};

export default CTA;
