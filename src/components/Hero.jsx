import { Link, useLocation, useNavigate } from "react-router";
import logo from "../../public/logo.svg";
import Button from "./UI/Button";
const Hero = ({h1Text,description,children}) => {
  const { pathname } = useLocation();
  const navigater = useNavigate();
  let bg = "";
  if (pathname === "/booking") {
    bg = "hero-booking";
  } else {
    bg = "hero-home";
  }
  return (
    <header className={`h-[1000px] lg:h-auto min-h-[850px] bg-top hero bg-cover ${bg} `}>
      <div className="max-w-[1200px] mx-auto  pt-[22rem] px-4 flex flex-col items-center lg:items-start lg:pt-20 lg:justify-between" >
        <Link href="/">
          <img src={logo} alt="" />
        </Link>
        <div className=" text-center lg:text-left flex flex-col items-center lg:items-start max-w-[500px] text-white mt-8 lg:mt-28">
          <h1 className="text-5xl lg:text-7xl leading-[1.2] font-thin">
            {h1Text}
          </h1>
          <p className="my-6 text-xl leading-[1.6]">
            {description}
          </p>
          <Button
            text="Book Table"
            classes="border-white hover:bg-white hover:text-black"
            onClick={() => navigate("/booking")}
          />
        </div>
        
      </div>
    </header>
  );
};

export default Hero;
