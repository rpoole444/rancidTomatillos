import React from "react";
import "../Header/Header.css";

const Header = (props) => {
  const { onUpdateSearch } = props;

  const onSearch = (e) => {
    onUpdateSearch(e.currentTarget.value);
  };

  return (
    <header className="header-bar">
      <section className="title-logo">
        <h1>Tinseltown Tribune</h1>
        <img className="logo-image" src="filmLogo.png" alt="tomatillo" />
      </section>
      <input onChange={onSearch} placeholder="Search" name="search" />
    </header>
  );
};

export default Header;
