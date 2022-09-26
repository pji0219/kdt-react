import React, { Component } from 'react';
import ggobuk from '../ggobuk.jpeg';

class ImgComponent extends Component {
  render() {
    return (
      <div>
        <img src={ggobuk} alt='꼬북이' />
      </div>
    );
  }
}

export default ImgComponent;
