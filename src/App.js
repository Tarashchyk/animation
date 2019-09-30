import React, { Component } from 'react';
import Anime from 'react-anime';

import Shuriken from './shuriken';

class App extends Component {
  render() {
    return (
      <Anime easing="linear" duration={1000} loop={true} translateX={100}>
        <Shuriken />
      </Anime>
    );
  }
}

export default App;
