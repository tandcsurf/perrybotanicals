import React, { Component } from 'react';
import Radium from 'radium';

class Candle extends Component {
  constructor() {
    super()
    this.showDescription = this.showDescription.bind(this)
  }

  showDescription() {
    this.descriptionWrapper.style.opacity = 1;
  }
  render() {
    return (
      <div>
        <div style={{...styles.candleWrapper, backgroundImage: `url(${this.props.candlePic})`, '@media screen and (max-width: 768px)': {
              backgroundImage: `url(${this.props.candlePicMobile})`, height: '400px',
            }}}>
          <div key={this.props.oils} ref={descriptionWrapper => this.descriptionWrapper = descriptionWrapper} style={styles.descriptionWrapper} onClick={this.showDescription}>
            <p style={styles.description}>{this.props.description}</p>
            <p style={styles.description}>{this.props.oils}</p>
          </div>
        </div>
        <p style={styles.mobileDescription}>{this.props.description}</p>
        <p style={{...styles.mobileDescription, fontWeight: '900'}}>{this.props.oils}</p>
        <hr style={styles.hr}></hr>
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
    width: 'auto',
    margin: '1rem auto 1rem auto',
    transition: 'all .75s',
    ':hover': {
      opacity: '.8',
    },
    '@media screen and (max-width: 1150px)': {
      width: 'auto',
    },
    // '@media screen and (max-width: 768px)': {
    //   width: 'auto',
    //   height: '400px',
    // }
    // backgroundImage: `url(${this.props.candlePic})`,
  },
  descriptionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    color: 'white',
    opacity: '0',
    flexDirection: 'column',
    transition: 'all .75s',
    ':hover': {
      opacity: '1',
    },
    '@media screen and (max-width: 768px)': {
      opacity: '1',
    },
  },
  description: {
    margin: '.5rem',
    lineHeight: '2.5rem',
    fontSize: '1.4em',
    fontFamily: 'Hind Madurai SemiBold, sans-serif',
    fontWeight: '700',
    color: 'white',
    width: '95%',
    // margin: '2rem',
    '@media screen and (max-width: 1150px)': {
      lineHeight: '2rem',
      fontSize: '1.2em',
    },
    '@media screen and (max-width: 768px)': {
      display: 'none',
    },
    '@media screen and (max-width: 450px)': {
      lineHeight: '1.3rem',
      display: 'none',
    }
  },
  mobileDescription: {
    lineHeight: '1.3rem',
    fontSize: '.8em',
    fontFamily: 'Hind Madurai SemiBold, sans-serif',
    fontWeight: '700',
    color: '#595959',
    margin: '.5rem',
    display: 'none',
    '@media screen and (max-width: 768px)': {
      display: 'flex',
    }
  },
  hr: {
    display: 'none',
    width: '30%',
    '@media screen and (max-width: 768px)': {
      display: 'flex',
    }
  }
}

export default Candle;
