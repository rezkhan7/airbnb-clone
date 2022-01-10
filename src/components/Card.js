import React from "react"
//import star from "../images/star.png"
import * as style from "../style.css"

let Card = (props)=>{
    let badgeText
    if(props.item.openSpots===0){
        badgeText = "SOLD OUT"
    }
    else if(props.item.location==="Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className = "card">
           {badgeText && <div className = "card--badge">{badgeText}</div>}
            <img src = {`../images/${props.item.coverImg}`} className = "card--image"></img>
            <div className = "card--stats">
                <img src = "./images/star.png" className = "card--star"></img>
                <span className = "gray">{props.item.stats.rating}</span>
                <span className = "gray">({props.item.stats.reviewCount}) • </span>
                <span>{props.item.location}</span>
            </div>
                <p>{props.item.title}</p>
                <p className = "card--price"><span className = "bold">From ${props.item.price}</span> / person</p>
            
        </div>
    )
}

export default Card

