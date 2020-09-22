import React from 'react';
// import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import TextWithBar from './TextWithBar';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBar: false,
    };
  }
  render() {
    return (
      <div
        className="Header-mainContainer"
        style={
          this.props.usePosAbsolute
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
  }
}
