import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
function Footer() {

  const clickHandler = (text)=>{
    navigator.clipboard.writeText(text)
  }



  return (
    <>
    <div className='footer'> 
        <div className="footer-left">
          <h3 className='footer-headers'>developed by:</h3>
          <img src="./images/paradise-logo.png" className='footer-logo' alt="" />
          <p>Paradise CO Inc&copy;</p>
          <p>Pardise Darou&copy;</p>
          </div>
        <div className="footer-mid">
          <h3 className='footer-headers'>Quick access</h3>
          <h5>Supplements</h5>
          <a href="/Pharma#About" className='quick-access-links'>- About</a>
          <a href="/Pharma#Suplements" className='quick-access-links'>- Supplements</a>
          
          <h5>RealEstate</h5>
          <a href="/RealEstate#About" className='quick-access-links'>- About</a>
          <a href="/RealEstate#Projects" className='quick-access-links'>- Projects</a>
        </div>
        <div className="footer-right">
          <h3 className='footer-headers'>Contact Us:</h3>
          <button className="copy-contact" onClick={()=>clickHandler("Jabdol@gmail.com")}>
          <FontAwesomeIcon className='footer-icon' icon={faCopy} />
            Jabdol@gmail.com
          </button>
          <button className="copy-contact" onClick={()=>clickHandler("+98 09121136311")}>
          <FontAwesomeIcon className='footer-icon' icon={faCopy} />
            +98 09121136311
          </button>
          
        </div>
    </div>
        <div className="footer-footer"> Copyrights Paradise Co Inc&reg; 2022 All rights reserved</div>
    </>
  )
}

export default Footer