import React, { Component } from 'react';

import anime from 'animejs';

import './donut.css';

const style = {
  filter: `url(#displacementFilter)`,
  transformOrigin: 'center'
};

class Donut extends Component {
  myRef = React.createRef();

  componentDidMount() {
    let tL = anime.timeline({
      duration: 4000,
      easing: 'easeInOutQuart'
    });
    tL.add({
      targets: this.myRef.current,
      keyframes: [
        { scale: 0.3, rotate: '0deg' },
        { scale: 0.5, rotate: '360deg' }
      ],
      duration: 3000
    });

    tL.add(
      {
        targets: ['#logo', 'feTurbulence', 'feDisplacementMap'],
        baseFrequency: 0,
        scale: 1,
        rotate: '360deg',
        fill: '#12b9cc',
        stroke: '#12b9cc'
      },
      '-=4000'
    );

    tL.add({
      targets: this.myRef.current,
      scale: 0,

      duration: 500
    });
  }
  render() {
    return (
      <svg viewBox="0 0 248 248" ref={this.myRef}>
        <filter id="displacementFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.05"
            result="turbulence"
          ></feTurbulence>
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G"
          ></feDisplacementMap>
        </filter>
        <path
          id="logo"
          style={style}
          fill="#00AE7B"
          d="M124,86.421c21.006,0,38.095,17.089,38.095,38.095S145.006,162.612,124,162.612
        s-38.095-17.089-38.095-38.095S102.994,86.421,124,86.421 M124,57.85c-36.819,0-66.667,29.848-66.667,66.667
        S87.181,191.183,124,191.183s66.667-29.848,66.667-66.667S160.819,57.85,124,57.85L124,57.85z"
        />
      </svg>
    );
  }
}

export default Donut;
