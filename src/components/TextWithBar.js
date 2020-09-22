import React, { useState } from 'react';
import '../styles/TextWithBar.css';

const TextWithBar = ({ text }) => {
  const [showBar, setShowBar] = useState(false);

  return (
    <div
      style={{
        display: 'inline-block',
        marginLeft: '5%',
        paddingTop: '2.5%',
      }}>
      <div
        className={`TextWithBar-BarIcon 
            ${showBar ? 'TextWithBar-BarActive' : ''}
          `}
      />
      <p
        className="TextWithBar-text"
        onMouseEnter={() => {
          setShowBar(true);
        }}
        onMouseLeave={() => {
          setShowBar(false);
        }}>
        {text}
      </p>
    </div>
  );
};

export default TextWithBar;
