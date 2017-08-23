import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import Header from './Header';
import Title from './Title';
import Forest from './Forest.js';
import About from './About.js';
import Desert from './Desert.js';
import Shop from './Shop.js';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <Header />
          <div style={styles.body}>
            <Title />
            <Forest />
            <About />
            {/* <Desert /> */}
            <Shop />
          </div>
      </StyleRoot>
    );
  }
}

const styles = {
  body: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'auto',
  }
}



export default App;
