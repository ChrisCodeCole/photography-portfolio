import React from "react";
import "../styles/Overlay.css";

export default class Overlay extends React.Component {
    render() {
        return (
            <div
                style={this.props.style}
                className="Overlay-Container"
                id="Overlay-Container"
            >
                {/* <span class="spacer"></span> */}
                <ol className="Content-List" id="Content-List">
                    <li className="Content-List-Item">Test</li>
                    <li className="Content-List-Item">Test1</li>
                    <li className="Content-List-Item">Test2</li>
                    <li className="Content-List-Item">Test3</li>
                </ol>
                {/* <span class="spacer"></span> */}
            </div>
        );
    }
}
