import React from "react";
import "../Header/Header.css";


const Header = () => {
  return (
    <header className="header-bar">
      <section className="title-logo">
        <h1>Rancid Tomatillos</h1>
        <img className="logo-image" src="tomatillo.png"/>
      </section>
      <input placeholder="Search" name="search" />
    </header>
  );
};

export default Header;
