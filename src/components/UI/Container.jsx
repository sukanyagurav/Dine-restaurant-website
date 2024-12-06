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
        className={`flex lg:items-center text-center lg:text-left flex-col lg:flex-row p-4 gap-8 ${sectionClasses}  details `}
      >
        <div className={`relative lg:flex-[0.5] ${imgClasses}`}>
          <picture className="">
            <source srcSet="" />
            <img
              src={images}
              alt={h1Text}
              className={`w-full md:w-[80%] mx-auto  h-[410px] lg:max-w-[500px] object-cover object-center lg:w-full lg:mx-none lg:h-[650px] lg:object-contain`}
            />
          </picture>
        </div>

        <div className="self-center flex-[0.5] max-w-[440px] ">
          <Heading h1Text={h1Text} />
          <p className="my-4 text-2xl font-thin">{description}</p>
        </div>
      </section>
    </Card>
  );
};

export default Container;
