import React, { Component } from 'react'
import './RealEstate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faBuildingCircleExclamation, faBuildingFlag, faAnglesRight } from '@fortawesome/free-solid-svg-icons'

import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll'

import projects from './projects.json'
import projectCard from '../ProjectCard/projectCard'
import About from '../About/About';
import AboutOwner from '../AboutOwner/AboutOwner';


export default class realEstate extends Component {
    
    constructor(){
        super()
        this.RefAbout = React.createRef()
        this.RefProjects = React.createRef()
    }
    goToAbout = ()=>{
        this.RefAbout.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    }
    goToProjects = ()=>{
        this.RefProjects.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    }
    
    
    render() {
    return (
      <div className='realEstate-main'>
          <div className='realEstate-image-container' style={{backgroundImage: 'url(./images/realEstate-back.jpg)'}}>
          <div className='top-header-container'>
            <div className='top-header'>Proudly a Canadian <img className='logo' alt='logo' src='./images/canadian-flag.png' /> Company
            </div>
          </div>
          
          <ScrollAnimation animateIn='animate__fadeInDown' delay={200} offset={750} initiallyVisible={true}>
              <div className='realEstate-image-text'>
                <h1>Suplements designed by professionals</h1>
                <p>Checkout of products below, feel free to contant us for more information.</p>
                
                <div className="realEstate-scrollTo-container">
                  <FontAwesomeIcon icon={faAnglesRight} style={{color: "green"}}/><span className="scrollTo" onClick={this.goToAbout}> Why Us <FontAwesomeIcon icon={faBuildingCircleExclamation} /></span>
                </div>
                <div className="realEstate-scrollTo-container">
                  <FontAwesomeIcon icon={faAnglesRight} style={{color: "green"}} /><span className="scrollTo" onClick={this.goToProjects}> Checkout our projects <FontAwesomeIcon icon={faBuildingFlag} /></span>
                </div>
                
              </div>
            </ScrollAnimation>
          </div>
          
          <div ref={ (ref) => this.RefAbout=ref } className='realEstate-info' style={{backgroundImage: 'url(./images/realEstate-about-back.jpg)'}}>
            <h1>About Us</h1>
            <ScrollAnimation animateIn='animate__bounceInLeft' delay={200}>
              <AboutOwner />
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='animate__bounceInRight' delay={200}>  
                <About/>
            </ScrollAnimation>
            
          </div>
          
          
            <div ref={ (ref) => this.RefProjects=ref } className='realEstate-products'  style={{backgroundImage: 'url(./images/realEstate-projects-back.jpg)'}}>
              <h1>Suplements</h1><ScrollAnimation animateIn='animate__bounceInLeft' delay={200}>
              {projects.map((el)=>{
                  return <projectCard product={el} />
              })} 
            </ScrollAnimation>
          </div>
          
      </div>
    )
  }
}
