import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Carousel from './Carousel';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

import '../styles/MainPage.css';

const MainPage = () => {
  const [allImagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    //first we would fetch image URLs from database, for now create array with 3 images
    let newImagesArray = [];
    for (let i = 0; i < 7; i++) {
      switch (i) {
        case 0:
        case 3:
        case 6:
          newImagesArray.push({
            imageText: i === 3 ? 'image4' : i === 6 ? 'image7' : 'Oversight',
            source: img1,
          });
          break; //break out of switch statement..
        case 1:
        case 4:
          newImagesArray.push({
            imageText: i === 4 ? 'image5' : 'Frostbite',
            source: img2,
          });
          break;
        case 2:
        case 5:
          newImagesArray.push({
            imageText: i === 5 ? 'image6' : 'Adventure',
            source: img3,
          });
          break;
        default:
          break;
      }
    }

    //Minimum 3 images for Carousel to work
    //if less than 7 images, duplicate images

    setImagesArray(newImagesArray);
  }, []);

  return (
    <div className="MainPage-mainContainer">
      {/* <Overlay /> */}
      <Header />
      <Carousel allImagesArray={allImagesArray} />
      <Footer />
    </div>
  );
};

export default MainPage;
