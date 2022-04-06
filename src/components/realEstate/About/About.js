import React from 'react'
import './About.css'
function About() {
  return (
    <div className='about-card'>
      <div className="realEstate-about-card-section">
        <h2 className='realEstate-about-card-setion-headers'>Our Mission</h2>
          <p>
            Our mission is to find opportunities for realestate devlopment. in doing so provide housing and job opportunities for tens of thousands of canadians and take this beautiful city to the next level. 
          </p>
      </div>
      <div className="realEstate-about-card-section">
        <h2 className='realEstate-about-card-setion-headers'>Our Past</h2>
          <p>
            Paradise is been in business since 2015 and has many ongoing and successful ventures here in Ontario primarily in Toronto in tendom with our close buisness partners as <span className='inline-emphesis'><a className='inline-emphesis' href="https://zonix.ca">Zonix Group</a></span>. To checkout our project head down below. 
          </p>
      </div>
      <div className="realEstate-about-card-section">
        <h2 className='realEstate-about-card-setion-headers'>What we do</h2>
          <p>
            We find areas in Ontario that are available and have housing or office demands, then after the doing the neccessary research start a development project with the help of our partners developing condos. On the way we will always pick up new parters and shareholders on the way.
          </p>
      </div>
    </div>
  )
}

export default About