import React from "react";
import { Parallax } from "react-scroll-parallax";
import "../styles/AboutPage.css";

// function parallax() {
//   let s = document.getElementById("floater"); //get ID
//   let yPos = 0 - window.pageYOffset / 5; // Y Position =   Nothing -   PageYOffeset
//   s.style.top = 50 + yPos + "%"; //style.top = 50 + (0 - window.pageYoffset / 5) + %
// }

console.log(window.pageYoffset);

// window.addEventListener("scroll", function() {
//   parallax();
// });

let dynamicNumber;

// let f = function() {
//     let eventHandler = function(event) {
//         let divElement=document.getElementsByTagName('div')[4];
//         divElement.textContent = 'X=' + window.pageXoffset + 'Y=' + window.pageYoffset;
//     };

//     window.addEventListener("scroll", eventHandler, false);

// document.addEventListener("DOMContentLoaded", f, false);

const ParallaxImage = props => {
  console.log(props);
  return (
    <div className="Left-Side">
      <Parallax y={[-20, 20]} tagOuter="figure">
        <p className="left-text">Testing</p>
      </Parallax>
    </div>
  );
};

const ParallaxImage2 = props => {
  console.log(props);
  return (
    <div className="Right-Side">
      <Parallax y={[-40, 20]} tagOuter="figure"></Parallax>
    </div>
  );
};

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrollY: window.scrollY });
  };

  render() {
    return (
      <div className="AboutPage-mainContainer">
        <div className="Middle-Container">
          {/* const ParallaxImage = () => (
          <Parallax className="Left-Side" y={[-5, 20]} tagOuter="figure">
            <Image src="/parallax.jpg" />
          </Parallax>
          ); */}

          <div className="Right-Side">
            <ParallaxImage nameOfClass={"righty"} />

            <p className="right-text" id="floater">
              Test2
              {/* {dynamicNumber} */}
              <div>{this.state.scrollY} </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
  componentDidUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
