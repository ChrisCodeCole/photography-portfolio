import React from "react";
import "../styles/Overlay.css";
import posed from 'react-pose';

const ContentList = posed.ol({
    hidden: { 
        opacity: 0,
        transition: { 
            duration: 1500 
        }
    },
    visible: { 
        opacity: 1,
        transition: { 
            duration: 1500 
        }
    }
  });

export default class Overlay extends React.Component {
    render() {
        return (
            <div
                style={this.props.style}
                className="Overlay-Container"
                id="Overlay-Container"
            >
                {/* <span class="spacer"></span> */}
                <ContentList pose={this.props.contentListOpacity ? 'visible' : 'hidden'} className="Content-List" id="Content-List">
                    <li className="Content-List-Item">Test</li>
                    <li className="Content-List-Item">Test1</li>
                    <li className="Content-List-Item">Test2</li>
                    <li className="Content-List-Item">Test3</li>
                </ContentList>
                {/* <span class="spacer"></span> */}
            </div>
        );
    }
}
