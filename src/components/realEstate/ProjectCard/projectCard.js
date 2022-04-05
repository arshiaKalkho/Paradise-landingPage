import React from 'react'
import './projectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck,faCartShopping, faAnglesRight, faMinus} from '@fortawesome/free-solid-svg-icons'

function projectCard(props) {
  
return (
    <div className='realEstate-card'>
      <div className='realEstate-card-header'><h1>{props.product.title}</h1></div>    
        <a href={props.product.link}>
          
          <div className='realEstate-card-link'>
            Buy
            <FontAwesomeIcon style={{color:"black"}} icon={faCartShopping}/>
          </div>
        </a>
        <div className='realEstate-card-top'>
          <img src={props.product.image} alt=""/>
          <div className='realEstate-card-top-center'>
            
            {props.product.features.map((el)=>{
              return (
              <>
                <FontAwesomeIcon icon={faCircleCheck} style={{color:"green"}}/>{el} <br/>
              </>)
            })}
          </div>
        </div>
        <hr />
        <div className='realEstate-card-body'>
          <h3 className='realEstate-body-headers'>Description:</h3>
          {props.product.desc.map((el)=>{
            return (<> <FontAwesomeIcon icon={faMinus} style={{color:"var(--color-primary)"}}/> {el} <br/></>)
          })}  
          <h3 className='realEstate-body-headers'>Features: </h3>
          {props.product.body.map((el)=>{
            return (<> <FontAwesomeIcon icon={faAnglesRight} style={{color:"green"}}/>{el} <br/></>)
          })}  
        </div>    
    </div>   
    )
}

export default projectCard