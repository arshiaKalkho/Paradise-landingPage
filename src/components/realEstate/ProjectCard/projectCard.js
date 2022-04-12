import React from 'react'
import './ProjectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinus} from '@fortawesome/free-solid-svg-icons'

function ProjectCard(props) {
  
return (
    
    <div className='realEstate-card'>
        
        <div className='realEstate-card-header'>
            <h1>{props.project.title}</h1>
        </div>    
        <div className="realEstate-card-body-container">
            <img src={props.project.image} alt=""/>

            <div className='realEstate-card-body'>
            
                {props.project.desc.map((el)=>{
                    return (
                    <>
                     <p><FontAwesomeIcon icon={faMinus} style={{color:"green"}}/>
                      {el}</p>
                    </>)
                })}
                 <br/>
                 
                <p > <span className='product-info'>Location: </span>{props.project.location} </p> 
                 <br/>
                <p > <span className='product-info'>Type: </span>{props.project.type} </p> 
                 <br/>
                <p > <span className='product-info'>Unit Count: </span>{props.project.unitCount} </p> 
                 <br/>
                <p > <span className='product-info'>Lot Size: </span>{props.project.lotSize} </p> 
                 <br/>
                <p > <span className='product-info'>Status: </span> <span className='status'>{props.project.status}</span> </p> 
                <div className='readMore-link'>
                    <a  href={props.project.link} >Read More</a>
                </div>

            </div>          
        </div>    
    </div>   
    )
}

export default ProjectCard