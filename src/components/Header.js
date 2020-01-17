import React from "react";
import { FaBars } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header-mainContainer">
        <div className="Header-innerContainer">
          <p className="square-i">
            <div></div> Cory Coleman
          </p>
          <Router>
            <Link to="/about">About</Link>
          </Router>
          {/* <FaBars /> */}
        </div>
      </div>
    );
  }
}
