import React from "react";
import "../styles/AboutPage.css";

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="AboutPage-mainContainer">
                <div className="Middle-Container">
                    <div className="Left-Side">
                        <p className="left">Testing</p>
                    </div>
                    <div className="Right-Side">
                        <p className="right">Test2</p>
                    </div>
                </div>
            </div>
        );
    }
}
