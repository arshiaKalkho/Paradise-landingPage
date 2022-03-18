import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
function Footer() {

  const clickHandler = (text)=>{
    navigator.clipboard.writeText(text)
    
  }



  return (
    <div className='footer'> 
        <div className="footer-left">
          <h4>developed by:</h4>
          <p>Paradise CO Inc&copy;</p>
          <p>Pardise Darou&copy;</p>
          </div>
        <div className="footer-mid">
        </div>
        <div className="footer-right">
          <h4>Contact Us:</h4>
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
  )
}

export default Footer