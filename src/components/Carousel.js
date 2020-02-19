import React from "react";
import "../styles/Carousel.css";
import Overlay from "./Overlay";
import { motion } from "framer-motion";

const textTranslateVariant = {
  hidden: {
    y: -200,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5
    }
  }
};

export default class Carousel extends React.Component {
  constructor(props) {
    super();

    this.state = {
      displayedImagesArray: [],
      translateValue: 0,
      translateCounter: 0,
      contentListVisible: false,
      imageLoadCount: 0,
      allImagesLoaded: false,
      initialTransitionEnd: false,
      centerIndex: 3,
      curEndLeftIndex: 0,
      curEndRightIndex: 6,
      scrolling: false
    };

    this.containerRef = React.createRef();
    this.imageRefs = [];
    this.scrollTimer = null;
    this.gotImagesFromParent = false;
    this.initialLayout = false;
    this.DISPLAY_IMAGE_LENGTH = 7;
  }

  componentDidMount() {
    window.addEventListener("wheel", this.handleScroll, { passive: true });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.allImagesArray.length !== this.props.allImagesArray.length &&
      !this.gotImagesFromParent
    ) {
      this.gotImagesFromParent = true;
      this.createInitialDisplayImagesArray();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.handleScroll);
  }

  createInitialDisplayImagesArray = () => {
    const { allImagesArray } = this.props;

    //prepend last 2 to the front
    const lastImage = allImagesArray[allImagesArray.length - 1];
    const secondToLastImage = allImagesArray[allImagesArray.length - 2];

    let newImageArray = [secondToLastImage, lastImage];

    if (allImagesArray.length < 5) {
      //if less than 5, start duplicating
      let count = 0;
      for (let i = 0; i < 5; i++) {
        newImageArray.push(allImagesArray[count]);
        count++;
        if (count > allImagesArray.length - 1) count = 0;
      }
    } else {
      //otherwise add up to 5 images to displayed images
      for (let i = 0; i < 5; i++) {
        newImageArray.push(allImagesArray[i]);
      }
    }

    this.setState({
      displayedImagesArray: newImageArray
    });
  };

  createImageRefs = node => {
    this.imageRefs.push(node);
    if (this.imageRefs.length === this.DISPLAY_IMAGE_LENGTH) {
      const viewportWidth = document.body.clientWidth;
      const centerScreenX = viewportWidth / 2;
      const imageContainerBoundingRect = this.imageRefs[3].getBoundingClientRect(); //0 1 2 |3| 4 5 6   --> index 3 is middle element

      const imageOffset = viewportWidth * 0.6;

      const centerOfContainer =
        imageContainerBoundingRect.left + imageContainerBoundingRect.width / 2;
      const initialLeftCenter = centerScreenX - centerOfContainer;

      let updatedImageArray = [];
      for (let i = 0; i < this.state.displayedImagesArray.length; i++) {
        let curLeftPosition = initialLeftCenter + imageOffset * (i - 3);
        updatedImageArray.push({
          ...this.state.displayedImagesArray[i],
          leftPosition: curLeftPosition
        });
      }

      this.setState({
        displayedImagesArray: updatedImageArray
      });
    }
  };

  updateDisplayImagesArray = updateLeft => {
    const viewportWidth = document.body.clientWidth;
    const imageOffset = viewportWidth * 0.6;

    let updatedImageArray = [...this.state.displayedImagesArray];
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 0; i < updatedImageArray.length; i++) {
      if (updatedImageArray[i].leftPosition < min) {
        min = updatedImageArray[i].leftPosition;
        minIndex = i;
      }
      if (updatedImageArray[i].leftPosition > max) {
        max = updatedImageArray[i].leftPosition;
        maxIndex = i;
      }
    }

    if (updateLeft) {
      updatedImageArray[minIndex].leftPosition =
        updatedImageArray[maxIndex].leftPosition + imageOffset;
    } else {
      updatedImageArray[maxIndex].leftPosition =
        updatedImageArray[minIndex].leftPosition - imageOffset;
    }

    this.setState({
      displayedImagesArray: updatedImageArray
    });
  };

  handleScroll = event => {
    if (this.scrollTimer != null) {
      clearTimeout(this.scrollTimer);
      this.scrollTimer = null;
    }
    // const carouselImage = document.querySelector(".Carousel-imageContainer");

    // let imageWidth = carouselImage.offsetWidth;
    let viewportWidth = document.body.clientWidth;

    if (event.wheelDelta < 0) {
      // down on mouse, *translate left
      this.setState(
        prevState => {
          let nextCount = prevState.translateCounter - 1;
          let updateCenterIndex = false;
          if (nextCount % 6 === 0) {
            //6 notches(about a page cycle)
            nextCount = 0;
            let updateToLeft = true;
            updateCenterIndex = true;
            this.updateDisplayImagesArray(updateToLeft);
          }
          return {
            translateCounter: nextCount,
            translateValue: prevState.translateValue - viewportWidth * 0.1,
            centerIndex: updateCenterIndex
              ? prevState.centerIndex + 1 <=
                this.state.displayedImagesArray.length - 1
                ? prevState.centerIndex + 1
                : 0
              : this.state.centerIndex,
            contentListOpacity: true,
            scrolling: true
          };
        },
        () => {
          console.log("centerIndex: ", this.state.centerIndex);
        }
      );
    } else if (event.wheelDelta > 0) {
      // up on mouse, *translate right
      this.setState(
        prevState => {
          let nextCount = prevState.translateCounter + 1;
          let updateCenterIndex = false;
          if (nextCount % 6 === 0) {
            //6 notches(about a page cycle)
            nextCount = 0;
            let updateToLeft = false;
            updateCenterIndex = true;
            console.log("full cycle right");
            this.updateDisplayImagesArray(updateToLeft);
          }
          return {
            translateCounter: nextCount,
            translateValue: prevState.translateValue + viewportWidth * 0.1,
            centerIndex: updateCenterIndex
              ? prevState.centerIndex - 1 >= 0
                ? prevState.centerIndex - 1
                : this.state.displayedImagesArray.length - 1
              : this.state.centerIndex,
            contentListOpacity: true,
            scrolling: true
          };
        },
        () => {
          console.log("centerIndex: ", this.state.centerIndex);
        }
      );
    }

    this.scrollTimer = setTimeout(() => {
      const centerScreenX = document.body.clientWidth / 2; //center of the screen in the X position
      const allCarouselImages = document.querySelectorAll(
        ".Carousel-imageContainer"
      );

      let minDistance = Number.MAX_SAFE_INTEGER; //start with a really high number before comparing distances below
      let translateDistance = 0;
      // let toBeCenteredImage = null;
      let toBeCenteredImageIndex = 0;

      //cycle through images and check which one is the closest
      for (let i = 0; i < allCarouselImages.length; i++) {
        const boundingRect = allCarouselImages[i].getBoundingClientRect();
        const imageX = boundingRect.left + boundingRect.width / 2;
        const currentDistance = Math.abs(centerScreenX - imageX); //get current distance from the center of the screen
        //using absolute value above to see which one is truly closest & avoiding negative/positive comparisons below

        if (currentDistance < minDistance) {
          //compare current image distance against our minimum distance
          //update the minimum distance if the image's distance was smaller
          toBeCenteredImageIndex = i;
          // toBeCenteredImage = allCarouselImages[i];
          minDistance = currentDistance;
          translateDistance = centerScreenX - imageX; //same distance but as earlier but includes positive/negative to tell us what direction to translate
        }
      }

      // toBeCenteredImage.style.webkitTransform = "translateZ(100px)";
      // toBeCenteredImage.style.zIndex = "100";

      this.setState(
        prevState => ({
          translateValue: prevState.translateValue + translateDistance,
          contentListOpacity: false,
          scrolling: false
        }),
        () => {
          if (this.state.centerIndex !== toBeCenteredImageIndex) {
            console.log("this.state.centerIndex: ", this.state.centerIndex);
            console.log("toBeCenteredImageIndex: ", toBeCenteredImageIndex);
            if (this.state.centerIndex > toBeCenteredImageIndex) {
              //went left
              let leftUpdate = true;
              this.updateDisplayImagesArray(leftUpdate);
            } else {
              let leftUpdate = false;
              this.updateDisplayImagesArray(leftUpdate);
            }
            this.setState({ centerIndex: toBeCenteredImageIndex }, () => {
              console.log("centerIndex: ", this.state.centerIndex);
            });
          }
        }
      );
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
        if (
          this.state.imageLoadCount === this.state.displayedImagesArray.length
        ) {
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
        <Overlay
          style={{
            //example:
            //"translateX(" + String(this.state.translateValue * -1) + "px)"
            //"translateX(100px)"
            transform: `translateX(${this.state.translateValue * -1}px)`
          }}
          contentListOpacity={this.state.contentListOpacity}
        />
        {this.state.displayedImagesArray.map((currentImg, index) => (
          <div
            ref={this.createImageRefs}
            key={index}
            className={"Carousel-imageContainer"}
            style={{
              left: this.state.displayedImagesArray[index]?.leftPosition ?? 0
            }}
          >
            {this.state.initialTransitionEnd && (
              <div className="Carousel-imgTextContainer">
                <motion.p
                  className="Carousel-imgText"
                  variants={textTranslateVariant}
                  initial={"hidden"}
                  animate={this.state.scrolling ? "hidden" : "visible"}
                >
                  {currentImg.imageText}
                </motion.p>
              </div>
            )}
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
        ))}
      </div>
    );
  }
}
