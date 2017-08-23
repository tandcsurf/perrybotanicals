import React, { Component } from 'react';
import Radium from 'radium';

class Header extends Component {
  render() {
    return (
        <div style={styles.headerWrapper}>
          <div style={styles.spacer}>
          </div>
          <div style={styles.links}>
            <a ref="home" href="#top" style={styles.link}>Home</a>
            <a ref="about" href="#about" style={styles.link}>About</a>
            <a ref="shop" href="#shop" style={styles.link}>Shop</a>
          </div>
        </div>
    );
  }
}

Header = Radium(Header);

const styles = {
  headerWrapper: {
    width: '1100px',
    margin: '0 auto',
    height: 50,
    display: 'flex',
    // border: '1px solid black',
    zIndex: 1,
  },
  spacer: {
    flex: 2,
    // border: '1px solid yellow',
  },
  links: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    // border: '1px solid red',
    fontFamily: 'sans-serif',
    fontWeight: '800',
    zIndex: 1,
    // textAlign: 'center',
  },
  link: {
    color: 'black',
    transition: 'all .5s',
    opacity: '.4',
    textDecoration: 'none',
    // border: '1px solid black',
    ':active': {
      textDecoration: 'none',
      color: 'black',
    },
    ':focus': {
      textDecoration: 'none',
      color: 'black',
    },
    ':visited': {
      textDecoration: 'none',
      color: 'black',
    },
    ':hover': {
      textDecoration: 'none',
      color: 'black',
      opacity: '.7',
    },
  }
}

export default Header;
