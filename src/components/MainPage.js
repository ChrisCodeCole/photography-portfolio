import React from "react";
import Header from "./Header";
import AboutPage from "./AboutPage";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Overlay from "./Overlay";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/MainPage.css";

export default function MainPage() {
  return (
    <div className="MainPage-mainContainer">
      <Overlay />
      <Header />
      {/* <Router>
        <Route path="/about" component={AboutPage} />
      </Router> */}
      <Carousel />
      <Footer />
    </div>
  );
}
