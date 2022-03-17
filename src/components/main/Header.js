import React from 'react';
import {ReactComponent as paradiseLogo} from '../../paradise-logo.svg';
import "./headerFooter.css"


function Header() {
  return (
    <div className='header'>
        <paradiseLogo />
        
        Header
    </div>
  )
}

export default Header