import React from "react";
import "../Header/Header.css";


const Header = () => {
  return (
    <header>
      <h1>Rancid Tomatillos</h1>
      <img className="logo-image" src='tomatillo.png'/>
      <input placeholder="Search" name="search" />
    </header>
  );
};

export default Header;
