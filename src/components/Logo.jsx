import React from "react";
import logo from "../assets/Logo.png";

function Logo({ width = "100px" }) {
    return (
      <div>
          <img src={logo} width={width} alt="Logo" />
      </div>
    );
}

export default Logo;