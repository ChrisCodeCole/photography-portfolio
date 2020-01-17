import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Overlay from "./Overlay";
import "../styles/MainPage.css";

export default function MainPage() {
  return (
    <div className="MainPage-mainContainer">
      <Overlay />
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}
