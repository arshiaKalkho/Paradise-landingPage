import React, { Component } from 'react'
import './pharma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo,faCapsules, facana } from '@fortawesome/free-solid-svg-icons'

import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll'

import Card from '../Card/Card'

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
          <div ref={ (ref) => this.RefInfo=ref } className='pharma-info' style={{backgroundImage: 'url(./images/pharma-about-back.jpg)'}}>
            <h1>Why Us?</h1>
            <div className="pharma-about-container">
            <ScrollAnimation className='about-p-container' animateIn='animate__bounceInLeft' delay={200}>
                <h2>Lorem, ipsum.</h2>
                <p className='pharma-about-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem placeat autem molestias delectus eaque illo reiciendis, perferendis iste fuga possimus temporibus quia tempore, eligendi est hic repudiandae. Quis ab in architecto veritatis sed eligendi maiores, similique provident placeat. Dolore repellat culpa a quo laborum officia sint inventore similique voluptatum veritatis vero laudantium recusandae dignissimos dolores quos nobis ducimus rerum, aperiam corrupti ipsam. Distinctio consectetur deleniti laboriosam labore molestias! Minus nihil ipsa culpa consequatur voluptates eaque illo distinctio ut, eligendi fuga inventore, ducimus necessitatibus quia quos praesentium quam eos facere. Delectus voluptas molestiae architecto sit pariatur perspiciatis laudantium ipsam eum.
                </p>
                </ScrollAnimation>
                <ScrollAnimation className='about-p-container' animateIn='animate__bounceInRight' delay={200}>
                <h2>Lorem, ipsum.</h2>
                <p className='pharma-about-p'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem cupiditate, ratione impedit possimus quam nam, iusto quia saepe earum illum magnam, molestiae quae praesentium debitis! Reiciendis quibusdam omnis quod dignissimos! At corrupti hic quam pariatur perferendis? Est odio dolorum repellat nulla libero dolor, nam, sit possimus temporibus totam quo, dolores aspernatur? Facere id ducimus nemo sapiente, rem officia blanditiis nobis, natus ullam, odio commodi nam necessitatibus impedit eaque quam deserunt. Sunt sapiente maxime numquam. Ratione aspernatur voluptatem eius aliquid, voluptas voluptatum reiciendis doloremque? Non, repellat maxime dolor, porro animi a suscipit inventore eius obcaecati temporibus illo expedita numquam. Reprehenderit, laborum.
                </p>
                </ScrollAnimation>
            </div>
          </div>
          <div ref={ (ref) => this.RefProducts=ref } className='pharma-produts'>
                
          </div>
          
      </div>
    )
  }
}
