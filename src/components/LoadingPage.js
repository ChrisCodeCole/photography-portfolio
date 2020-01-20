import React from "react";
import "../styles/LoadingPage.css";

export default class LoadingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div className="LoadingPage-mainContainer">LOADING PAGE</div>;
  }
}
