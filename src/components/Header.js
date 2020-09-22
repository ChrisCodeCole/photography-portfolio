import React, { useState } from 'react';
// import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import TextWithBar from './TextWithBar';

const Header = ({ usePosAbsolute }) => {
  return (
    <div
      className="Header-mainContainer"
      style={
        usePosAbsolute
          ? {
              position: 'absolute',
            }
          : null
      }>
      <div className="Header-innerContainer">
        <TextWithBar text="Cory Coleman" />
        <Link className="Header-link" to="/about">
          About
        </Link>

        {/* <a href="#">About</a> */}

        {/* <FaBars /> */}
      </div>
    </div>
  );
};

export default Header;
