import { redirect, useLocation, useNavigate } from "react-router";
import logo from "../../public/logo.svg";
import Button from "./UI/Button";
const Hero = ({h1Text,description,children}) => {
  const { pathname } = useLocation();
  let bg = "";
  if (pathname === "/booking") {
    bg = "hero-booking";
  } else {
    bg = "hero-home";
  }
  return (
    <header className={`min-h-[850px] hero bg-cover ${bg} `}>
      <div className="max-w-[1200px] mx-auto py-20 px-4 flex flex-col justify-between" >
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className="w-[500px] text-white mt-28">
          <h1 className="text-7xl leading-[1.2] font-thin">
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
