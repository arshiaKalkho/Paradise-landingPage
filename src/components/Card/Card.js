import React from 'react'
import './Card.css'

function Card(props) {
  
  return (
    <div className='card'>
        <img src={props.product.image} alt=""/>
        <div className='card-header'>{props.product.title}</div>    
        <div className='card-body'>{props.product.body}</div>    
    </div>
  )
}

export default Card