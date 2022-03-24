import React, { Component } from 'react'
import './pharma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo,faCapsules } from '@fortawesome/free-solid-svg-icons'


export default class Pharma extends Component {
    
    constructor(){
        super()
        this.RefInfo = React.createRef()
        this.RefProducts = React.createRef()
    }
    goToInfo = ()=>{
        this.RefInfo.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    }
    goToProduct = ()=>{
        this.RefProducts.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
        ;
    }
    
    
    render() {
    return (
      <div className='pharma-main'>
          <div className='pharma-image-container' style={{backgroundImage: 'url(./images/pharma-back.jpg)'}}>
            <div className='pharma-image-text'>
                <h1>Suplements designed by professionals</h1>
                <p>Checkout of products below, feel free to contant us for more information.</p>
                
                <span className="scrollTo" onClick={this.goToInfo}>Who are we <FontAwesomeIcon icon={faCircleInfo} /></span><br/>
                <span className="scrollTo" onClick={this.goToProduct}>Checkout our suplements <FontAwesomeIcon icon={faCapsules} /></span>
            </div>
          </div>
          <div ref={ (ref) => this.RefInfo=ref } className='pharma-info'>
                
          </div>
          <div ref={ (ref) => this.RefProducts=ref } className='pharma-produts'>
                
          </div>
          
      </div>
    )
  }
}
