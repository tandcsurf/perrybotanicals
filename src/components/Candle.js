import React, { Component } from 'react';
import Radium from 'radium';

class Candle extends Component {
  render() {
    return (
      <div style={{...styles.candleWrapper, backgroundImage: `url(${this.props.candlePic})`,}}>
        <div ref="description" style={styles.descriptionWrapper}>
          <p style={styles.description}>{this.props.description}</p>
          <p style={styles.description}>{this.props.oils}</p>
        </div>
      </div>
    );
  }
}

Candle = Radium(Candle);

const styles = {
  candleWrapper: {
    height: '560px',
    // border: '1px solid black',
    display: 'flex',
    width: '1100px',
    margin: '1rem auto 1rem auto',
    transition: 'all .75s',
    ':hover': {
      opacity: '.8',
    }
    // backgroundImage: `url(${this.props.candlePic})`,
  },
  descriptionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    color: 'white',
    opacity: '0',
    transition: 'all .75s',
    ':hover': {
      opacity: '1',
    },
  },
  description: {
    lineHeight: '2.5rem',
    fontSize: '1.4em',
    fontFamily: 'Hind Madurai SemiBold, sans-serif',
    fontWeight: '700',
    color: 'white',
    width: '38%',
    margin: '2rem'
  }
}

export default Candle;
