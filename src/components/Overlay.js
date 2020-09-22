import React from 'react';
import '../styles/Overlay.css';
import { motion } from 'framer-motion';

const opacityVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default class Overlay extends React.Component {
  render() {
    return (
      <div style={this.props.style} className="Overlay-Container" id="Overlay-Container">
        {/* <span class="spacer"></span> */}
        <motion.ol
          variants={opacityVariant}
          initial={'hidden'}
          animate={this.props.contentListOpacity ? 'visible' : 'hidden'}
          transition={{ duration: 1.5 }}
          className="Content-List"
          id="Content-List">
          <li className="Content-List-Item">Test</li>
          <li className="Content-List-Item">Test1</li>
          <li className="Content-List-Item">Test2</li>
          <li className="Content-List-Item">Test3</li>
        </motion.ol>
        <motion.div
          className="Overlay-Scroll-Lines"
          variants={opacityVariant}
          initial={'hidden'}
          animate={this.props.contentListOpacity ? 'visible' : 'hidden'}
          transition={{ duration: 1.5 }}>
          <div className="Scroll-Line" />
          <div className="Scroll-Line" />
          <div className="Scroll-Line" />
        </motion.div>
        {/* <span class="spacer"></span> */}
      </div>
    );
  }
}
