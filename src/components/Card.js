import React from "react"
//import star from "../images/star.png"
import * as style from "../style.css"

let Card = (props)=>{
    return(
        <div className = "card">
            <img src = {`../images/${props.coverImg}`} className = "card--image"></img>
            <div className = "card--stats">
                <img src = "./images/star.png" className = "card--star"></img>
                <span className = "gray">{props.rating}</span>
                <span className = "gray">({props.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
                <p>{props.title}</p>
                <p><span className = "bold">From ${props.price}</span> / person</p>
            
        </div>
    )
}

export default Card

