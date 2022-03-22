import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './main.css'




export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="real-estate"> 
          <Link to='RealState' className='real-estate-link'>  
            <div className="real-estate-text">
              <h1>Go to Real Estate</h1>   
            </div>     
          </Link>
          <img src='./images/main-real-estate-back.jpg' alt ="pharma"  />
        </div>
        
        <div className="pharma">
          <Link to='Pharma' className='pharma-link'> 
            <div className="pharma-text">
              <h1>Go to Pharma</h1>
            </div>
          </Link>
          <img src='./images/main-pharma-back.jpg' alt ="real-estate"  />
        </div>
      </div>
    )
  }
}
