import React from "react"
import star from "../images/star.png"
import * as style from "../style.css"

let Card = (props)=>{
    return(
    
        <div className = "card">
            <img src = {require(`../images/${props.img}`)} className = "card--image"></img>
            <div className = "card--stats">
                <img src = {star} className = "card--star"></img>
                <span className = "gray">{props.rating}</span>
                <span className = "gray">({props.reviewCount}) • </span>
                <span>{props.country}</span>
            </div>
                <p>{props.title}</p>
                <p><span className = "bold">From ${props.price}</span> / person</p>
            
        </div>
    )
}

export default Card

