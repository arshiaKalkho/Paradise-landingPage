import React from 'react'
import './AboutOwner.css'


function AboutOwner() {
  return (
    <div className='realEstate-aboutOwner-container'>
        <img src="./images/javad-faceshot.jpg" className='realEstate-faceShot' alt='' />
        <div className="realEstate-about-owner">
            <h2>About Me</h2>
            <p>- I am proven business man investing in realestate project all over ontario canada, working with canadian businesses change the face of toronto. Together we can build housing for thousands and provide opportunities like never before. to checkout our projects please go below and <span className='inline-emphesis copy-email' onClick={() => {navigator.clipboard.writeText("jabdol@gmail.com")}}>contant me</span> contant me here via email<br />
            - Join our team and use the expertise and background to your advantage with years of experience and success . together we can hope to to find opportunity and acts them accordingly. I hope to hear from you soon.

            </p>
        </div>
    </div>
  )
}

export default AboutOwner