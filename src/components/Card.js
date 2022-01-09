import React from "react"
//import star from "../images/star.png"
import * as style from "../style.css"

let Card = (props)=>{
    let badgeText
    if(props.openSpots===0){
        badgeText = "SOLD OUT"
    }
    else if(props.location==="Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className = "card">
           {badgeText && <div className = "card--badge">{badgeText}</div>}
            <img src = {`../images/${props.coverImg}`} className = "card--image"></img>
            <div className = "card--stats">
                <img src = "./images/star.png" className = "card--star"></img>
                <span className = "gray">{props.rating}</span>
                <span className = "gray">({props.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
                <p>{props.title}</p>
                <p className = "card--price"><span className = "bold">From ${props.price}</span> / person</p>
            
        </div>
    )
}

export default Card

