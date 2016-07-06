import React, { PropTypes } from 'react';
import animateCss from 'animate.css';

import AnimateNames from './AnimateNames.js';

class Animate extends React.Component {

  render() {
    const props = this.props;
    const className = animateCss[props.animateName] + ' ' + animateCss.animated;
    return (
      <span className={className} style={props.style}>
        {props.children}
      </span>
    );
  }
}

Animate.propTypes = {
  animateName: PropTypes.oneOf(AnimateNames.concat([''])),
  children: PropTypes.element.isRequired,
  style: PropTypes.object
};

export default Animate;
