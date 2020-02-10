import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import "../styles/Carousel.css";
import Overlay from "./Overlay";

export default class Carousel extends React.Component {
  constructor(props) {
    super();

    this.state = {
      translateValue: 0,
      imageIndex: 1,
      contentListVisible: false,
      imagesArray: [],
      imageLoadCount: 0,
      allImagesLoaded: false,
      initialTransitionEnd: false
    };

    this.containerRef = React.createRef();
    this.scrollTimer = null;
    // console.log("this", this.state);
  }

  componentDidMount() {
    let newImagesArray = [];
    for (let i = 0; i < 7; i++) {
      switch (i) {
        case 0:
        case 3:
        case 6:
          newImagesArray.push({
            imageText: "Oversight",
            source: img1
          });
          break; //break out of switch statement..
        case 1:
        case 4:
          newImagesArray.push({
            imageText: "Frostbite",
            source: img2
          });
          break;
        case 2:
        case 5:
          newImagesArray.push({
            imageText: "Adventure",
            source: img3
          });
          break;
        default:
          break;
      }
    }

    // const carouselContainer = document.querySelector(".Carousel-mainContainer");
    // const initialTranslate = carouselContainer.offsetWidth * -1.075; //25% to the left
    // this.setState({
    //   imagesArray: newImagesArray,
    //   translateValue: initialTranslate
    // });

    window.addEventListener("wheel", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.handleScroll);
  }

  handleScroll = event => {
    if (this.scrollTimer != null) {
      clearTimeout(this.scrollTimer);
      this.scrollTimer = null;
    }
    // const carouselImage = document.querySelector(".Carousel-imageContainer");

    // let imageWidth = carouselImage.offsetWidth;

    if (event.wheelDelta < 0) {
      // down
      this.setState(prevState => ({
        //change to window viewport width
        // translateValue: prevState.translateValue - imageWidth * 0.25,
        contentListOpacity: true
      }));
    } else if (event.wheelDelta > 0) {
      // up
      this.setState(prevState => ({
        // translateValue: prevState.translateValue + imageWidth * 0.25,
        contentListOpacity: true
      }));
    }

    this.scrollTimer = setTimeout(() => {
      const centerScreenX = document.body.clientWidth / 2; //center of the screen in the X position
      const allCarouselImages = document.querySelectorAll(
        ".Carousel-imageContainer"
      );

      let minDistance = Number.MAX_SAFE_INTEGER; //start with a really high number before comparing distances below
      let translateDistance = 0;
      // let toBeCenteredImage = null;

      //cycle through images and check which one is the closest
      for (let i = 0; i < allCarouselImages.length; i++) {
        const boundingRect = allCarouselImages[i].getBoundingClientRect();
        const imageX = boundingRect.left + boundingRect.width / 2;
        const currentDistance = Math.abs(centerScreenX - imageX); //get current distance from the center of the screen
        //using absolute value above to see which one is truly closest & avoiding negative/positive comparisons below

        if (currentDistance < minDistance) {
          //compare current image distance against our minimum distance
          //update the minimum distance if the image's distance was smaller
          // toBeCenteredImage = allCarouselImages[i];
          minDistance = currentDistance;
          translateDistance = centerScreenX - imageX; //same distance but as earlier but includes positive/negative to tell us what direction to translate
        }
      }

      // toBeCenteredImage.style.webkitTransform = "translateZ(100px)";
      // toBeCenteredImage.style.zIndex = "100";

      this.setState(prevState => ({
        translateValue: prevState.translateValue + translateDistance,
        contentListOpacity: false
      }));
    }, 750);
  };

  // updateImageLoadCount = ()=> {
  //   this.setState((prevState) => ({
  //     imageLoadCount: prevState.imageLoadCount + 1
  //   }));
  // }
  updateImageLoadCount = e => {
    //using prevState to make sure it gets updated correctly due to asynchronous nature of setState (will always be 1...n when called since we rely on prevState)
    this.setState(
      prevState => ({ imageLoadCount: prevState.imageLoadCount + 1 }),
      () => {
        if (this.state.imageLoadCount === this.state.imagesArray.length) {
          console.log("images loaded");
          this.setState({ allImagesLoaded: true });
        }
      }
    );
  };

  //check for when the first scale transition ends and update image class names
  //this is done so that we use different transition timers in css
  //and to remove scaleY(0) in css module and scaleY(1) in the inline style object
  updateInitialTransitionEnd = () => {
    if (!this.state.initialTransitionEnd) {
      this.setState({ initialTransitionEnd: true });
    }
  };

  render() {
    return (
      <div
        className="Carousel-mainContainer"
        style={{
          transform: `translateX(${this.state.translateValue}px)`
        }}
        ref={this.containerRef}
      >
        {/* <Overlay
          style={{
            //example:
            //"translateX(" + String(this.state.translateValue * -1) + "px)"
            //"translateX(100px)"
            transform: `translateX(${this.state.translateValue * -1}px)`
          }}
          contentListOpacity={this.state.contentListOpacity}
        />
        {this.state.imagesArray.map((currentImg, index) => (
          <div key={index} className="Carousel-imageContainer">
            <div className="Carousel-imgTextContainer">
              <p className="Carousel-imgText">{currentImg.imageText}</p>
            </div>
            <img
              style={
                this.state.allImagesLoaded && !this.state.initialTransitionEnd
                  ? { transform: "scaleY(1)" }
                  : null
              }
              className={
                !this.state.initialTransitionEnd
                  ? "Carousel-coverImgIsLoading"
                  : "Carousel-coverImgLoaded"
              }
              alt=""
              src={currentImg.source}
              onLoad={this.updateImageLoadCount}
              onError={this.updateImageLoadCount}
              onTransitionEnd={this.updateInitialTransitionEnd}
            />
          </div>
        ))} */}
      </div>
    );
  }
}
