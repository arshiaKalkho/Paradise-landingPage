import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faCircleCheck, faAnglesRight, faMinus} from '@fortawesome/free-solid-svg-icons'

function Card(props) {
  


  return (
    <div className='card'>
      <div className='card-header'><h1>{props.product.title}</h1></div>    
        <a href={props.product.link}>
          
          <div className='card-link'>
            Buy
            <FontAwesomeIcon style={{color:"black"}} icon={faCartShopping}/>
          </div>
        </a>
        <div className="card-top">
          <img src={props.product.image} alt=""/>
          <div className="card-top-center">
            
            {props.product.features.map((el)=>{
              return (
              <>
                <FontAwesomeIcon icon={faCircleCheck} style={{color:"green"}}/>{el} <br/>
              </>)
            })}
          </div>
        </div>
        <hr />
        <div className='card-body'>
          <h3 className='body-headers'>Description:</h3>
          {props.product.desc.map((el)=>{
            return (<> <FontAwesomeIcon icon={faMinus} style={{color:"var(--color-primary)"}}/> {el} <br/></>)
          })}  
          <h3 className='body-headers'>Features: </h3>
          {props.product.body.map((el)=>{
            return (<> <FontAwesomeIcon icon={faAnglesRight} style={{color:"green"}}/>{el} <br/></>)
          })}  
        </div>    
    </div>
  )
}

export default Card