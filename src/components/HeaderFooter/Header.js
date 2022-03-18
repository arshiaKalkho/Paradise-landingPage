import React from 'react';
import {Link, useLinkClickHandler} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faPrescriptionBottleMedical, faBuilding } from '@fortawesome/free-solid-svg-icons'

import "./headerFooter.css"


function Header() {
  
 
  return (
    <div className='header'>
        
        <div className="nav-left">
          <Link to="/" >
            <img className='logo' alt='logo' src='./paradise-logo.png' />
          </Link>
        </div>

        <div className="nav-right">
        
          <Link to="/" className="nav-links">
            <FontAwesomeIcon className='nav-icon' icon={faHouseChimney} />
            Home
          </Link>
          <Link to="/Pharma" className="nav-links">
            <FontAwesomeIcon className='nav-icon' icon={faPrescriptionBottleMedical} />
            Pharmaceutical</Link>
          <Link to="/RealState" className="nav-links">
            <FontAwesomeIcon className='nav-icon' icon={faBuilding} />
            Real Estate
            </Link>
        </div>
    </div>
  )
}

export default Header