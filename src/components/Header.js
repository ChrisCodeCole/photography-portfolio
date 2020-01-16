import React from "react";
import { FaBars } from "react-icons/fa";
import "../styles/Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header-mainContainer">
        <div className="Header-innerContainer">
          <p className="square-i">
            <div></div> Cory Coleman
          </p>
          <a href="#">About</a>
          {/* <FaBars /> */}
        </div>
      </div>
    );
  }
}
