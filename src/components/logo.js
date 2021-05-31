import React, { Component } from 'react';

class Logo extends Component {
  
  render() {
    const size = {
      height: 105,
      width: 105,
      padding:"1em",
      margin:"1em"
  }
    return (
      <div className="logo-main">
          <img src="adidas_logo.png" style= {size}/>

      </div>
    )
  }
}

export default Logo;
