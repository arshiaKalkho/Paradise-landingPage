import React from 'react'
import './notFound.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'


function NotFound() {
  return (
    <div className='notFound'>
        <h1>404 Page Not Found!!</h1>    
        <p>
            😕 hmmm it seems the page you are looking for doesn't exist.<br/>
            Use this link to 
            <Link to="/" className="go-home">
            <FontAwesomeIcon className='nav-icon' icon={faHouseChimney} />
                Go Home
          </Link>
        </p>    
    </div>
  )
}

export default NotFound