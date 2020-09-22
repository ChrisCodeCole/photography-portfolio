import React from 'react';
import parallax from '../assets/parallax.jpg';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import Header from './Header';
import Footer from './Footer';
import '../styles/AboutPage.css';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftScrollY: 0,
      rightScrollY: 0,
    };
    //currently not using refs
    this.leftDivRef = React.createRef();
    this.rightDivRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  }

  handleScroll = (event) => {
    if (event.wheelDelta < 0) {
      // down
      this.setState((prevState) => ({
        rightScrollY: prevState.rightScrollY - 7,
        leftScrollY: prevState.leftScrollY - 20,
      }));
    } else if (event.wheelDelta > 0) {
      //up
      this.setState((prevState) => ({
        rightScrollY: prevState.rightScrollY + 7,
        leftScrollY: prevState.leftScrollY + 20,
      }));
    }
  };
  //Working on filling with content in here
  render() {
    return (
      <div className="AboutPage-mainContainer">
        <Header usePosAbsolute={true} />
        <div className="Middle-Container">
          <div className="Left-Side">
            <div
              className="translateContainer Left-translatedContainer"
              ref={this.leftDivRef}
              style={{ transform: `translateY(${this.state.leftScrollY}%)` }}>
              <div className="left-text-container">
                <p className="left-text" id="top">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus eu tellus sit amet
                  faucibus. In hac habitasse platea dictumst. Fusce pretium orci vitae leo consequat
                  vulputate. Aliquam tincidunt feugiat erat, in mattis ante convallis ac. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <p className="left-text">
                  Praesent pellentesque iaculis arcu, non consequat nunc ultrices sit amet. Aenean feugiat
                  odio odio, id vulputate orci eleifend et. Donec sed luctus odio. Aliquam sit amet consequat
                  velit. Aenean interdum, metus quis dignissim sodales, neque purus ullamcorper elit, non
                  maximus leo nulla et lectus. Duis luctus ligula erat, mattis viverra lacus eleifend vitae.
                  Sed sit amet eros ut eros pellentesque elementum. Donec sit amet suscipit nibh.
                </p>
                <p className="left-text">
                  Aenean ac fringilla ex. Quisque a suscipit neque. Donec et orci risus. Vivamus at augue et
                  mi maximus sagittis. Vivamus accumsan, mauris consequat luctus suscipit, leo nisi fermentum
                  odio, sit amet maximus justo sapien et turpis. Pellentesque felis lorem, porttitor et luctus
                  et, cursus semper turpis. Cras eleifend nulla sit amet efficitur sodales
                </p>
              </div>
            </div>
          </div>
          {/* transform: `translateX(${this.state.translateValue * -1}px)` */}
          <div className="Right-Side">
            <div
              className="translateContainer Right-translatedContainer"
              ref={this.rightDivRef}
              style={{ transform: `translateY(${this.state.rightScrollY}%)` }}>
              <div className="right-img-container">
                <div className="img-container-left">
                  <a href="#">
                    <img alt="" src={img1} />
                  </a>
                  <a href="#">
                    <img alt="" src={img2} />
                  </a>
                  <a href="#">
                    <img alt="" src={img3} />
                  </a>
                </div>
                <div className="img-container-right">
                  <a href="#">
                    <img alt="" src={img1} />
                  </a>
                  <a href="#">
                    <img alt="" src={img2} />
                  </a>
                  <a href="#">
                    <img alt="" src={img3} />
                  </a>
                </div>
              </div>
              {/* <img src="../assets/parallax.jpg"></img> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
