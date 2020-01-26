import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
// import Overlay from "./Overlay";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/MainPage.css";

export default class MainPage extends React.Component {
  // constructor(props){
  //   super(props);

  //   this.state = {

  //   }
  // }

  render() {
    return (
      <div className="MainPage-mainContainer">
        {/* <Overlay /> */}
        <Header />
        <Carousel />
        <Footer />
      </div>
    );
  }
}
