import React from 'react'
import './Card.css'

function Card(props) {
  
  return (
    <div className='card'>
        <img src={props.image} alt=""/>
        <div className='card-header'>{props.title}</div>    
        <div className='card-body'>{props.body}</div>    
    </div>
  )
}

export default Card