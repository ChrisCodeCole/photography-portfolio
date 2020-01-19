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
            contentListVisible: false
        };

        this.scrollTimer = null;
        console.log("this", this.state);
    }

    componentDidMount() {
        const carouselContainer = document.querySelector(
            ".Carousel-mainContainer"
        );
        const initialTranslate = carouselContainer.offsetWidth * -0.25; //25% to the left
        this.setState({
            translateValue: initialTranslate
        });

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
        const carouselImage = document.querySelector(
            ".Carousel-imageContainer"
        );

        let imageWidth = carouselImage.offsetWidth;

        if (event.wheelDelta < 0) {
            // down
            this.setState(prevState => ({
                translateValue: prevState.translateValue - imageWidth * 0.25,
                contentListOpacity: true
            }));
        } else if (event.wheelDelta > 0) {
            // up
            this.setState(prevState => ({
                translateValue: prevState.translateValue + imageWidth * 0.25,
                contentListOpacity: true
            }));
        }

        this.scrollTimer = setTimeout(() => {
            const centerScreenX = window.innerWidth / 2; //center of the screen in the X position
            const allCarouselImages = document.querySelectorAll(
                ".Carousel-imageContainer"
            );

            let minDistance = Number.MAX_SAFE_INTEGER; //start with a really high number before comparing distances below
            let translateDistance = 0;
            // let toBeCenteredImage = null;

            //cycle through images and check which one is the closest
            for (let i = 0; i < allCarouselImages.length; i++) {
                const boundingRect = allCarouselImages[
                    i
                ].getBoundingClientRect();
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

    render() {
        return (
            <div
                className="Carousel-mainContainer"
                style={{
                    transform: `translateX(${this.state.translateValue}px)`
                }}
            >
                <Overlay
                    style={{
                        transform: `translateX(${this.state.translateValue *
                            -1}px)`
                    }}
                    contentListOpacity={this.state.contentListOpacity}
                />
                <div className="Carousel-imageContainer">
                    <img className="Carousel-coverImg" alt="" src={img1} />
                </div>
                <div className="Carousel-imageContainer">
                    <img className="Carousel-coverImg" alt="" src={img2} />
                </div>
                <div className="Carousel-imageContainer">
                    <img className="Carousel-coverImg" alt="" src={img3} />
                </div>
                <div className="Carousel-imageContainer">
                    <img className="Carousel-coverImg" alt="" src={img1} />
                </div>
                <div className="Carousel-imageContainer">
                    <img className="Carousel-coverImg" alt="" src={img2} />
                </div>
                <div className="Carousel-imageContainer">
                    <img className="Carousel-coverImg" alt="" src={img3} />
                </div>
            </div>
        );
    }
}
