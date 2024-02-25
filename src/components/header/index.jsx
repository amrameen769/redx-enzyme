import React from "react";
import "./styles.scss";
import Logo from "../../assets/logo.png";

const Header = (props) => {
  return (
    <header data-test="headerComp">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
