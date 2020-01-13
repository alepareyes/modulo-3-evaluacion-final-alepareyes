import React from 'react';
import logo from '../images/logo.png'
import '../styles/filters.scss';


const Header = () => {
  return (
    <header className="filter">
      <img src={logo} className="filter__logo" />
    </header>
  );
}

export default Header;