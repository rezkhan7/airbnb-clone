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
                coverImg = {item.coverImg} 
                rating = {item.stats.rating}
                reviewCount = {item.stats.reviewCount} 
                location = {item.location}    
                title = {item.title} 
                price = {item.price}
                openSpots = {item.openSpots}
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