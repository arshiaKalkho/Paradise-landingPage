import React from 'react'
import './projectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck,faCartShopping, faAnglesRight, faMinus} from '@fortawesome/free-solid-svg-icons'

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
                    return (<> <FontAwesomeIcon icon={faMinus} style={{color:"var(--color-primary)"}}/> {el} <br/></>)
                })}  
            </div>          
        </div>    
    </div>   
    )
}

export default ProjectCard