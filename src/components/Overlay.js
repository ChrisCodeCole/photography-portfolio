import React from "react";
import "../styles/Overlay.css";

export default class Overlay extends React.Component {
  render() {
    return (
      <div className="Overlay-Container" id="Overlay-Container">
        <ol className="Content-List" id="Content-List">
          <li>Test</li>
          <li>Test1</li>
          <li>Test2</li>
          <li>Test3</li>
        </ol>
      </div>
    );
  }
}
