import React, { Component } from 'react';
import Radium from 'radium';
import forest from '../forest.jpg'

class Forest extends Component {
  render() {
    return (
      <div style={styles.forestWrapper}>
      </div>
    );
  }
}

Forest = Radium(Forest);

const styles = {
  forestWrapper: {
    // border: '1px solid black',
    zIndex: '-1',
    height: '50vh',
    backgroundImage: `url(${forest})`,
  }
}

export default Forest;
