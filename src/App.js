import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./data.js"
import * as style from "./style.css"

let App = ()=>{
    let cardData = data.map((item)=>{
        return(<Card 
                key = {item.id}
                item = {item}
             />)
        
        })
    return(
       <div>
           <Navbar />
           <Hero/>
           <section className = "cards-list">
             {cardData}
           </section>
         
       </div>
    )
}

export default App