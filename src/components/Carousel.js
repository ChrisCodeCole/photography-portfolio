import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import '../styles/Carousel.css';

export default class Carousel extends React.Component {
    render(){
        return (
            <div className="Carousel-mainContainer">   
                <img className="Carousel-coverImg" src={img1}/>
                <img className="Carousel-coverImg" src={img2}/>
                <img className="Carousel-coverImg" src={img3}/>
            </div>
        );
    }
}