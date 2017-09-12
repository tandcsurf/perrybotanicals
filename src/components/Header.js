import React, { Component } from 'react';
import Radium from 'radium';

class Header extends Component {
  constructor(props) {
    super(props)
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.state = {toggle: true};
  }

  showDropdownMenu() {
    console.log("showDropdownMenu");
    console.log("this.state.toggle:", this.state.toggle);
    if (this.state.toggle) {
      this.dropdownMenu.style.transform = `translateY(0px)`;
      this.setState({toggle: false});
    } else {
      this.dropdownMenu.style.transform = `translateY(-300px)`;
      this.setState({toggle: true});
    }
  }

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
          <div ref={dropdownMenu => this.dropdownMenu = dropdownMenu} style={styles.dropdownMenu}>
            <div style={styles.dropdownLinks}>
              <a ref="dropdownHome" href="#top" style={styles.link}>Home</a>
              <a ref="dropdownAbout" href="#about" style={styles.link}>About</a>
              <a ref="dropdownShop" href="#shop" style={styles.link}>Shop</a>
            </div>
          </div>
            <button style={styles.hamburger} onClick={this.showDropdownMenu}>&#9776;</button>
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
    '@media screen and (max-width: 1150px)': {
      width: '800px',
    },
    '@media screen and (max-width: 820px)': {
      width: 'auto',
      justifyContent: 'flex-end',
      // alignItems: 'center',
    }
  },
  spacer: {
    flex: 2,
    '@media screen and (max-width: 820px)': {
      display: 'none',
    }
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
    '@media screen and (max-width: 820px)': {
      display: 'none',
    }
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
  },
  hamburger: {
    '@media screen and (min-width: 821px)': {
      display: 'none',
    },
    '@media screen and (max-width: 820px)': {
      margin: '0 30px 0 0',
      zIndex: 99,
      lineHeight: '45px',
      padding: '5px 15px 0px 15px',
      color: 'black',
      background: 'none',
      border: 0,
      fontSize: '1.4em',
      fontWeight: 'bold',
      cursor: 'pointer',
      outline: 'none',
    }
  },
  dropdownMenu: {
    background: 'rgba(255, 255, 255, .9)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flex: 1,
    // border: '1px solid red',
    fontFamily: 'sans-serif',
    fontWeight: '800',
    zIndex: 1,
    width: '100%',
    height: 150,
    // border: '1px solid black',
    transform: 'translateY(-300px)',
    position: 'fixed',
    top: 0,
    left: 0,
    transition: 'all .5s',
  },
  dropdownLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: '.5rem',
    fontSize: '1.3rem',
  }
}

export default Header;
