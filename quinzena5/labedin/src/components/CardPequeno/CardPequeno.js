import React from 'react';
import './CardPequeno.css'

export const CardPequeno = (props)=>{
    return (
        <div className="pequenocard-container">
            <img src={props.imagem} alt=""/>
            <h3>{props.dados}</h3>            
            <p> {props.informacao}</p>
        </div>
    )
}