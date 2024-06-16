import React from "react";

import logo from "../logo.png";

interface LogoProps {
  size?: "hero" | "normal";
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <img src={logo} alt="logo" width={props.size === "hero" ? "350" : "100"} />
  );
};

export default Logo;
