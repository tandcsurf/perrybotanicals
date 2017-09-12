import React, { Component } from 'react';
import Radium from 'radium';

class About extends Component {
  render() {
    return (
      <div style={styles.aboutWrapper}>
        <div style={styles.spacerStartEnd}>
        </div>
        <div id="about" style={styles.about}>
          <div style={styles.textArea}>
            <h2 style={styles.h2}><span style={styles.underlining}>Pure plant extracts make all the difference</span></h2>
            <p style={styles.p}>We make awesome hand-made candles in Greenpoint, Brooklyn. Each candle is made with 100% aromatherapy-grade, plant-derived essential oils blended into soy wax, anchored in amber glass with a cotton wick. The pure botanical oils we use create a smell that's woodsy, floral, herbal, or all three, depending on the candle. Our fragrance profiles won't smell like "pumpkin coffee" or "leather campfire", because we never use cheap, synthetic fragrance oils and additives.</p>
          </div>
        </div>
        <div style={styles.spacer}>
        </div>
        <div style={styles.spacerStartEnd}>
        </div>
      </div>
    );
  }
}

About = Radium(About);

const styles = {
  // spacerStartEnd: {
  //   border: '1px solid red',
  //   display: 'flex',
  //   flexGrow: 1,
  // },
  aboutWrapper: {
    minHeight: '70vh',
    width: '1100px',
    margin: '0 auto',
    // border: '1px solid black',
    display: 'flex',
    '@media screen and (max-width: 1150px)': {
      width: '800px',
    },
    '@media screen and (max-width: 820px)': {
      width: 'auto',
    }
  },
  about: {
    display: 'flex',
    flexDirection: 'column',
    // textAlign: 'center',
    // margin: '6rem',
    // justifyContent: 'center',
    // border: '1px solid blue',
    flex: '2 1',
  },
  textArea: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0',
    textAlign: 'left',
    margin: '4rem 4rem 4rem 0',
    // border: '1px solid pink',
  },
  h2: {
    margin: '.5rem',
    fontSize: '3em',
    fontFamily: 'Playfair Display',
    fontWeight: '400',
    color: '#333333',
    lineHeight: '5rem',
    // border: '1px solid black',
  },
  underlining: {
    borderBottom: '5px solid #f3ebe0',
    paddingBottom: '5px',
  },
  p: {
    margin: '.5rem',
    lineHeight: '2.5rem',
    fontSize: '.8em',
    fontFamily: 'Hind Madurai SemiBold, sans-serif',
    fontWeight: '700',
    color: "#a9a9a9",
  },
  spacer: {
    flex: '1',
    // border: '1px solid red',
    '@media screen and (max-width: 820px)': {
      display: 'none',
    }
  }
}

export default About;
