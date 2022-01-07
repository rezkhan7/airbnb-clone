import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import * as style from "./style.css"

let App = ()=>{
    return(
       <div>
           <Navbar />
           <Hero/>
           <Card 
            img = "katie-zafares.png"
            rating = {5.0}
            reviewCount = {6}
            country = "USA"
            tile = "Life Lesson with Katie Zaferes"
            price = {136}
           />
       </div>
    )
}

export default App