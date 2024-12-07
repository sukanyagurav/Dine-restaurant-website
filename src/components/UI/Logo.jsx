
import { Link } from "react-router";
import logo from "/logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="" />
    </Link>

  );
};

export default Logo;
