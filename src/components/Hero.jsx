import { useLocation } from "react-router";
import logo from "../../public/logo.svg";
const Hero = () => {
  const { pathname } = useLocation();
  let bg = "";
  if (pathname === "/booking") {
    bg = "hero-booking";
  } else {
    bg = "hero-home";
  }
  return (
    <header className={`min-h-screen hero bg-cover ${bg} `}>
      <div className="max-w-[1200px] mx-auto pt-20 px-4 flex flex-col justify-between" >
        <a href="/">
          <img src={logo} alt="" />
        </a>

        <div className="w-[500px] text-white mt-28">
            <h1 className="text-5xl leading-[1.5]">Exquisite dining <br/>
            since 1989</h1>
            <p className="my-6 text-lg">
            Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
            </p>
            <button className="p-4 border-2 border-white px-10 cursor-pointer">Book a table</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
