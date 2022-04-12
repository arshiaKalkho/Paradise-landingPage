import React, { Component } from 'react'
import './RealEstate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faBuildingCircleExclamation, faBuildingFlag, faAnglesRight } from '@fortawesome/free-solid-svg-icons'

import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll'

import projects from './projects.json'
import ProjectCard from '../ProjectCard/ProjectCard'
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
            <div className='top-header'>Proudly Canadian <img className='logo' alt='logo' src='./images/canadian-flag.png' /> 
            </div>
          </div>
          
          <ScrollAnimation animateIn='animate__fadeInDown' delay={200} offset={750} initiallyVisible={true}>
              <div className='realEstate-image-text'>
                <h1>Paradice RealEstate</h1>
                <p>Thinking about investing? checkout who we are and what were working on below.</p>
                
                <div className="realEstate-scrollTo-container">
                  <FontAwesomeIcon icon={faAnglesRight} style={{color: "green"}}/><span className="scrollTo" onClick={this.goToAbout}> Why Us <FontAwesomeIcon icon={faBuildingCircleExclamation} /></span>
                </div>
                <div className="realEstate-scrollTo-container">
                  <FontAwesomeIcon icon={faAnglesRight} style={{color: "green"}} /><span className="scrollTo" onClick={this.goToProjects}> Checkout our projects <FontAwesomeIcon icon={faBuildingFlag} /></span>
                </div>
                
              </div>
            </ScrollAnimation>
          </div>
          
          <div ref={ (ref) => this.RefAbout=ref } className='realEstate-info' id='About' style={{backgroundImage: 'url(./images/realEstate-about-back.jpg)'}}>
            <h1>About Us</h1>
            <ScrollAnimation animateIn='animate__bounceInLeft' delay={200}>
              <AboutOwner />
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='animate__bounceInRight' delay={200}>  
                <About/>
            </ScrollAnimation>
            
          </div>
          
          
            <div ref={ (ref) => this.RefProjects=ref } className='realEstate-projects' id='Projects' style={{backgroundImage: 'url(./images/realEstate-projects-back.jpg)'}}>
              <h1>Projects</h1>
              <ScrollAnimation animateIn='animate__bounceInLeft' delay={200}>
              <div className="realEstate-projects-grid">
                  {projects.map((el)=>{
                      return <ProjectCard project={el} />
                  })} 
              </div>
              </ScrollAnimation>
          </div>
          
      </div>
    )
  }
}
