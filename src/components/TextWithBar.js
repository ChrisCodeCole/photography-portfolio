import React from "react";
import "../styles/TextWithBar.css";

export default class TextWithBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBar: false
    };
  }

  render() {
    return (
      <div style={{ display: "inline-block", marginLeft: "10px" }}>
        <div
          className={`TextWithBar-BarIcon 
            ${this.state.showBar ? "TextWithBar-BarActive" : ""}
          `}
        />
        <p
          className="TextWithBar-text"
          onMouseEnter={() => {
            this.setState({ showBar: true });
          }}
          onMouseLeave={() => {
            this.setState({ showBar: false });
          }}
        >
          {this.props.text}
        </p>
      </div>
    );
  }
}
