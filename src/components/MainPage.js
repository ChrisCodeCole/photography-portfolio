import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import "../styles/MainPage.css";

export default function MainPage() {
  return (
    <div className="MainPage-Overlay">
      <div className="MainPage-mainContainer">
        <Header />
        <Carousel />
        <Footer />
      </div>
    </div>
  );
}
