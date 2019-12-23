import React from 'react';
import '../styles/Footer.css';

export default class Footer extends React.Component {
    render(){
        return (
            <div className="Footer-mainContainer">   
                <div className="Footer-innerContainer">
                    <p>CoryCEO@Gmail.com</p>
                    <p>4045678990</p>
                    <a href="#">FB</a>
                    <a href="#">TT</a>
                    <a href="#">IG</a>
                </div>
            </div>
        );
    }
}