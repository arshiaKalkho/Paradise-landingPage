import React, { Component } from 'react'
import './RealEstate.css'

export default class RealEstate extends Component {
  render() {
    return (
      <div className='realEstate-image-container' style={{backgroundImage:"url(./images/realEstate-back.jpg)"}}>
        <div className="realEstate-top-header-container">
          <div className='realEstate-top-header'>Proudly a Canadian <img className='logo' alt='logo' src='./images/canadian-flag.png' /> Company
              </div>
        </div>
      </div>
    )
  }
}
