import React, { useState } from 'react';
import '../styles/Footer.css';
import TextWithBar from './TextWithBar';

const Footer = () => {
  // const [showBarEmail, setShowBarEmail] = useState(false);
  // const [showBarNumber, setShowBarNumber] = useState(false);
  return (
    <div className="Footer-mainContainer">
      <div className="Footer-innerContainer">
        <div className="NameContact">
          <TextWithBar text="CoryCEO@Gmail.com" />
          <TextWithBar text="4045678990" />
        </div>
        <div className="Social-links">
          <a href="/#">FB </a>
          <a href="/#">TT </a>
          <a href="/#">IG</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
