import React from "react";
// import parallax from "../assets/parallax.jpg";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/AboutPage.css";

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftScrollY: 0,
      rightScrollY: 0
    };
    //currently not using refs
    this.leftDivRef = React.createRef();
    this.rightDivRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("wheel", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.handleScroll);
  }

  handleScroll = event => {
    if (event.wheelDelta < 0) {
      // down
      this.setState(prevState => ({
        rightScrollY: prevState.rightScrollY + 10,
        leftScrollY: prevState.leftScrollY + 10
      }));
    } else if (event.wheelDelta > 0) {
      //up
      this.setState(prevState => ({
        rightScrollY: prevState.rightScrollY - 10,
        leftScrollY: prevState.leftScrollY - 10
      }));
    }
  };

  render() {
    return (
      <div className="AboutPage-mainContainer">
        <Header usePosAbsolute={true} />
        <div className="Middle-Container">
          <div className="Left-Side">
            <div
              className="translateContainer Left-translatedContainer"
              ref={this.leftDivRef}
              style={{ transform: `translateY(${this.state.leftScrollY}%)` }}
            >
              <p>TEST LEFT</p>
            </div>
          </div>
          {/* transform: `translateX(${this.state.translateValue * -1}px)` */}
          <div className="Right-Side">
            <div
              className="translateContainer Right-translatedContainer"
              ref={this.rightDivRef}
              style={{ transform: `translateY(${this.state.rightScrollY}%)` }}
            >
              <p>TEST RIGHT</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
