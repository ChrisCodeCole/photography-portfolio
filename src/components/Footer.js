import React from "react";
import "../styles/Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="OverlayTry">
        <div className="Footer-mainContainer">
          <div className="Footer-innerContainer">
            <div className="NameContact">
              <p className="square-i">
                <div></div>
                CoryCEO@Gmail.com
              </p>
              <p className="square-i">
                <div></div>
                4045678990
              </p>
            </div>
            <div className="Social-links">
              <a href="#">FB </a>
              <a href="#">TT </a>
              <a href="#">IG</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
