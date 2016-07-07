# react-animate.css
---

使用react 和 [postcss](https://github.com/postcss/postcss) 包装 [Animate.css](https://github.com/daneden/animate.css)，避免css命名冲突，方便react使用

## install
 
 ```bash
 npm install rc-animate.css
 ```

## Usage

1. ainmate name list:
  * `bounce`
  * `flash`
  * `pulse`
  * `rubberBand`
  * `shake`
  * `headShake`
  * `swing`
  * `tada`
  * `wobble`
  * `jello`
  * `bounceIn`
  * `bounceInDown`
  * `bounceInLeft`
  * `bounceInRight`
  * `bounceInUp`
  * `bounceOut`
  * `bounceOutDown`
  * `bounceOutLeft`
  * `bounceOutRight`
  * `bounceOutUp`
  * `fadeIn`
  * `fadeInDown`
  * `fadeInDownBig`
  * `fadeInLeft`
  * `fadeInLeftBig`
  * `fadeInRight`
  * `fadeInRightBig`
  * `fadeInUp`
  * `fadeInUpBig`
  * `fadeOut`
  * `fadeOutDown`
  * `fadeOutDownBig`
  * `fadeOutLeft`
  * `fadeOutLeftBig`
  * `fadeOutRight`
  * `fadeOutRightBig`
  * `fadeOutUp`
  * `fadeOutUpBig`
  * `flipInX`
  * `flipInY`
  * `flipOutX`
  * `flipOutY`
  * `lightSpeedIn`
  * `lightSpeedOut`
  * `rotateIn`
  * `rotateInDownLeft`
  * `rotateInDownRight`
  * `rotateInUpLeft`
  * `rotateInUpRight`
  * `rotateOut`
  * `rotateOutDownLeft`
  * `rotateOutDownRight`
  * `rotateOutUpLeft`
  * `rotateOutUpRight`
  * `hinge`
  * `rollIn`
  * `rollOut`
  * `zoomIn`
  * `zoomInDown`
  * `zoomInLeft`
  * `zoomInRight`
  * `zoomInUp`
  * `zoomOut`
  * `zoomOutDown`
  * `zoomOutLeft`
  * `zoomOutRight`
  * `zoomOutUp`
  * `slideInDown`
  * `slideInLeft`
  * `slideInRight`
  * `slideInUp`
  * `slideOutDown`
  * `slideOutLeft`
  * `slideOutRight`
  * `slideOutUp`
  
2. example

```js
import Animate from 'react-animate.css';

class DemoComponent extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  
  render() {
    return (
      <Animate animateName="zoomIn" style={{display: 'block'}}>
          // you template
      </Animate>
    )
  }
}

```

## API

### Animate props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|animateName | 动画名称,必须是指定的名称或者空字符串 | String | '' |
|style | 节点样式，display 为block 或者 inline-block 时动画生效 | Object |  |
|children | 动画要包裹的节点 | React.Element |  |
