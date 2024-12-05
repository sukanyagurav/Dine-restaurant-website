import React from "react";
import Card from "./Card";
import Heading from "./Heading";

const Container = ({
  children,
  sectionClasses = "",
  h1Text,
  images,
  description,
  imgClasses,
}) => {
  return (
    <Card>
      <section
        className={`flex items-center  p-4 gap-8 ${sectionClasses}  details `}
      >
        <div className={`relative flex-[0.5] ${imgClasses}`}>
          <picture className="">
            <source srcSet="" />
            <img
              src={images}
              alt={h1Text}
              className={`max-w-[500px] h-[650px] object-contain`}
            />
          </picture>
        </div>

        <div className="flex-[0.5] max-w-[440px] ">
          <Heading h1Text={h1Text} />
          <p className="my-4 text-2xl font-thin">{description}</p>
        </div>
      </section>
    </Card>
  );
};

export default Container;
