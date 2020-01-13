import React from 'react';
import logo from '../images/logo.png'
import '../styles/filters.scss';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="filter">
      <Link to="/" >
        <img src={logo} className="filter__logo" />
      </Link>
    </header>
  );
}

export default Header;