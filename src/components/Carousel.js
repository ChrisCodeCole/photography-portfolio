import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import '../styles/Carousel.css';

export default class Carousel extends React.Component {
    constructor(props){
        super();

        this.state = {
            scrollOffset: 0, //1-5, 6-10, 11-15  (# of scroll clicks)
            imageIndex: 1
        }

        this.scrollTimer = null;
    }
     
    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll, { passive: true });
        
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll)
    }

    handleScroll = (event) => {
        if(this.scrollTimer != null){
            clearTimeout(this.scrollTimer);
            this.scrollTimer = null;
        }
        //get images
        const carouselImages = document.querySelectorAll('.Carousel-coverImg');
        const carouselContainer = document.querySelector('.Carousel-mainContainer');
        let currentTranslate = 0;
        let imageWidth = 0;
        // console.log("carousel images", carouselImages);
        //increase/decrease index
        //translate each image to the left multiplied by index

        if(event.wheelDelta < 0){ // down
            this.setState((prevState) => ({ scrollOffset: prevState.scrollOffset - 1})
            , () => {
                for(let i = 0; i < carouselImages.length; i++){
                    // console.log(`element width at ${i} `, carouselImages[i].offsetWidth);
                    carouselImages[i].style.transform = `translateX(${carouselImages[i].offsetWidth * this.state.scrollOffset * .2}px)`;
                }
                //TODO: Update translateX to just the container
                // carouselContainer.style.transform = `translateX(${carouselImages[0].offsetWidth * this.state.scrollOffset * .2}px)`;
                currentTranslate = carouselImages[0].offsetWidth * this.state.scrollOffset * .2;
                imageWidth = carouselImages[0].offsetWidth;
            });
        }else if(event.wheelDelta > 0){ // up
            this.setState((prevState) => ({ scrollOffset: prevState.scrollOffset + 1})
            , () => {
                for(let i = 0; i < carouselImages.length; i++){
                    
                    // console.log(`element width at ${i} `, carouselImages[i].offsetWidth);
                    carouselImages[i].style.transform = `translateX(${carouselImages[i].offsetWidth * this.state.scrollOffset * .2}px)`;
                    currentTranslate = carouselImages[i].offsetWidth * this.state.scrollOffset * .2;
                }
                // carouselContainer.style.transform = `translateX(${carouselImages[0].offsetWidth * this.state.scrollOffset * .2}px)`;
                currentTranslate = carouselImages[0].offsetWidth * this.state.scrollOffset * .2;
                imageWidth = carouselImages[0].offsetWidth;
            });
        }   

        this.scrollTimer = setTimeout(()=> {
            console.log("current translate", currentTranslate);
            console.log("image width", imageWidth);
            // Each image's width is 250
            // 900 / 250
            // 3 images 
            // 250 * 3
            // 750
            // 900 - 750 
            
            // 150 - 

            // let translateDiff = 0;
            // translateDiff = currentTranslate - (Math.floor(currentTranslate / imageWidth) * imageWidth);

            // if(translateDiff > imageWidth * .5){ //translate to right image
            //     for(let i = 0; i < carouselImages.length; i++){
            //         carouselImages[i].style.transform = `translateX(${}px)`;
            //     }
            // }else{ //translate to left image
            //     for(let i = 0; i < carouselImages.length; i++){
            //         carouselImages[i].style.transform = `translateX(${}px)`;
            //     }
            // }
        }, 3000);
    }

    render(){
        return (
            <div className="Carousel-mainContainer">   
                <img className="Carousel-coverImg" src={img1}/>
                <img className="Carousel-coverImg" src={img2}/>
                <img className="Carousel-coverImg" src={img3}/>
                <img className="Carousel-coverImg" src={img1}/>
                <img className="Carousel-coverImg" src={img2}/>
                <img className="Carousel-coverImg" src={img3}/>
            </div>
        );
    }
}