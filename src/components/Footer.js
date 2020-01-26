import React from "react";
import "../styles/Footer.css";
import TextWithBar from "./TextWithBar";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBarEmail: false,
      showBarNumber: false
    };
  }
  render() {
    return (
      <div className="OverlayTry">
        <div className="Footer-mainContainer">
          <div className="Footer-innerContainer">
            <div className="NameContact">
              <TextWithBar text="CoryCEO@Gmail.com" />
              <TextWithBar text="4045678990" />
            </div>
            <div className="Social-links">
              <a href="/#">FB </a>
              <a href="/#">TT </a>
              <a href="/#">IG</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
