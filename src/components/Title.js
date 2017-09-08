import React, { Component } from 'react';
import Radium from 'radium';
import eagle from '../eagleflower.png';

class Title extends Component {
  render() {
    return (
      <div id="top" style={styles.titleWrapper}>
        <div style={styles.title}>
          <h2 style={styles.h2}>Perry Botanicals</h2>
          <img  style={styles.eagle} src={eagle} alt="eagle logo" />
        </div>
        <div style={styles.spacer}>
        </div>
      </div>
    );
  }
}

Title = Radium(Title);

const styles = {
  titleWrapper: {
    height: '70vh',
    width: '1100px',
    margin: '0 auto',
    border: '1px solid black',
    display: 'flex',
    '@media screen and (max-width: 1150px)': {
      width: '800px',
    },
    '@media screen and (max-width: 820px)': {
      width: '600px',
    },
  },
  title: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'flex-end',
    justifyContent: 'left',
    border: '1px solid blue',
    flex: 2,
    height: '100%',
    '@media screen and (max-width: 1150px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    }
  },
  h2: {
    fontSize: '4rem',
    border: '1px solid black',
    marginBottom: '6rem',
    marginRight: '2rem',
    '@media screen and (max-width: 1150px)': {
      fontSize: '3rem',
      marginBottom: 0,
      marginRight: 0,
    },
    '@media screen and (max-width: 820px)': {
      marginRight: 0,
    }
  },
  eagle: {
    marginBottom: '3rem',
    zIndex: '-1',
    border: '1px solid black',
  },
  spacer: {
    flex: 1,
    border: '1px solid red',
  }
}

export default Title;
