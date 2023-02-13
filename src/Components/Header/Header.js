import React from "react";
import "../Header/Header.css";
import PropTypes from "prop-types";

const Header = (props) => {
  const { onUpdateSearch } = props;

  const onSearch = (e) => {
    onUpdateSearch(e.currentTarget.value);
  };

  return (
    <header className="header-bar">
      <section className="title-logo">
        <img className="logo-image" src="filmLogo.png" alt="filmLogo" />
        <h1 className="header-title">TINSELTOWN TRIBUNE</h1>
      </section>
      <input onChange={onSearch} placeholder="Search" name="search" />
    </header>
  );
};

export default Header;

Header.propTypes = {
  onUpdateSearch: PropTypes.func.isRequired,
};
