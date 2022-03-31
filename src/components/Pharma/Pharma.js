import React, { Component } from 'react'
import './pharma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo,faCapsules, facana } from '@fortawesome/free-solid-svg-icons'

import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll'

import products from './products.json'
import Card from '../Card/Card'
import About from '../About/About';
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
    }
    
    
    render() {
    return (
      <div className='pharma-main'>
          <div className='pharma-image-container' style={{backgroundImage: 'url(./images/pharma-back.jpg)'}}>
          <div className='top-header-container'>
            <div className='top-header'>Proudly a Canadian <img className='logo' alt='logo' src='./images/canadian-flag.png' /> Company
            </div>
          </div>
          
          <ScrollAnimation animateIn='animate__bounceInLeft' delay={200}>
                <div className='pharma-image-text'>
                    <h1>Suplements designed by professionals</h1>
                    <p>Checkout of products below, feel free to contant us for more information.</p>
                    
                    <span className="scrollTo" onClick={this.goToInfo}>Why Us <FontAwesomeIcon icon={faCircleInfo} /></span><br/>
                    <span className="scrollTo" onClick={this.goToProduct}>Checkout our suplements <FontAwesomeIcon icon={faCapsules} /></span>
                </div>
            </ScrollAnimation>
          </div>
          <div className="pharma-first-spacer"></div>
          <div ref={ (ref) => this.RefInfo=ref } className='pharma-info' style={{backgroundImage: 'url(./images/pharma-about-back.jpg)'}}>
            <h1>Why Us?</h1>
            <div className="pharma-about-container">
            <ScrollAnimation className='about-p-container' animateIn='animate__fadeIn' delay={200}>
                <About></About>
                
            </ScrollAnimation>
            </div>
          </div>
          <div className="pharma-second-spacer"></div>
          
            <div ref={ (ref) => this.RefProducts=ref } className='pharma-products'  style={{backgroundImage: 'url(./images/pharma-product-back.jpg)'}}>
            <h1>Suplements</h1><ScrollAnimation animateIn='animate__slideInLeft' delay={200}>
                {products.map((el)=>{
                    return <Card product={el} />
                })} 
            </ScrollAnimation>
          </div>
          
      </div>
    )
  }
}
