import React, { Component } from 'react';
import Radium from 'radium';
import Candle from './Candle.js';
import lilSnuggler from '../lilsnuggler.jpg';
import spiceWorld from '../spiceworld.jpg';
import { descriptions } from '../descriptions.js';

class Shop extends Component {
  render() {
    return (
      <div id="shop" style={styles.wrapperWrapper}>
        <div style={styles.shopWrapper}>
          <h2 style={styles.h2}><span style={styles.underlining}>Our Collection</span></h2>
          <Candle description={descriptions.woodlandRomp} oils={descriptions.woodlandRompOils} candlePic={lilSnuggler}/>
          <Candle description={descriptions.lilSnuggler} oils={descriptions.lilSnugglerOils} candlePic={spiceWorld}/>
          <Candle description={descriptions.spiceWorld} oils={descriptions.spiceWorldOils} candlePic={lilSnuggler}/>
        </div>
      </div>
    );
  }
}

Shop = Radium(Shop);

const styles = {
  wrapperWrapper: {
    backgroundColor: 'rgb(241, 245, 247)',
  },
  shopWrapper: {
    // height: '100vh',
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    width: '1100px',
    margin: '0 auto',
  },
  h2: {
    fontSize: '2.5rem',
    fontFamily: 'Playfair Display',
    fontWeight: '400',
    color: '#333333',
    lineHeight: '5rem',
    marginBottom: '0rem',
  },
  underlining: {
    borderBottom: '5px solid #f3ebe0',
    paddingBottom: '5px',
  },
  spacer: {
    flex: 1,
    height: '100%',
    // border: '1px solid red',
  }
}

export default Shop;
