import React, { Component } from 'react';
import Radium from 'radium';
import desert from '../desert.jpg'

class Desert extends Component {
  render() {
    return (
      <div style={styles.desertWrapper}>
      </div>
    );
  }
}

Desert = Radium(Desert);

const styles = {
  desertWrapper: {
    // border: '1px solid black',
    height: '50vh',
    backgroundImage: `url(${desert})`,
  }
}

export default Desert;
