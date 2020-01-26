import React from "react";
<<<<<<< HEAD
// import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
=======
import { FaBars } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
>>>>>>> abd3ecaa56a80f0e7926535ec2061d5b6123eaa0
import "../styles/Header.css";
import TextWithBar from "./TextWithBar";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBar: false
    };
  }
  render() {
    return (
      <div className="Header-mainContainer">
        <div className="Header-innerContainer">
          <TextWithBar text="Cory Coleman" />
          <Link to="/about">About</Link>

          {/* <a href="#">About</a> */}

          {/* <FaBars /> */}
        </div>
      </div>
    );
  }
}
