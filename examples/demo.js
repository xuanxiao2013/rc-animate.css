import React from 'react';
import ReactDOM from 'react-dom';

import Animate from '../src/Animate.js';
import AnimateNames from '../src/AnimateNames.js';

class DemoAnimate extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {animateName: ''}
  }

  onChange(e) {
    this.setState({animateName: e.target.value});
  }

  render() {
    const selectOptions = AnimateNames.map((item, i) => {
      return (<option key={i} value={item}>{item}</option>);
    })

    return (
      <div>
        <div style={{height: 100}}></div>
        <div className="warp">
        <Animate animateName={this.state.animateName} style={{margin: '0 auto', display: 'block'}}>
            <h1 className="animateText">react Animate.css</h1>
        </Animate>
        </div>

        <div className="selectWarp">
          <select
            onChange={this.onChange.bind(this)}
            className="select">
            <option value="">选择动画</option>
            {selectOptions}</select>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<DemoAnimate />, document.getElementById('bodyRoot'));
