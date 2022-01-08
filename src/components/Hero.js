import React from "react"
//import grid from "../images/photo-grid.png"
import * as style from "../style.css"

let Hero = ()=>{
 return(
     <section className = "hero">
        <img src = "./images/photo-grid.png" alt = "grid" className = "hero--photo"></img>
        <h1 className = "hero--header">Online Experiences</h1>
        <p className = "hero--text">Join unique interactive activities 
        led by one-of-a-kind hosts—all without leaving home.</p>
     </section>
 )   
}

export default Hero