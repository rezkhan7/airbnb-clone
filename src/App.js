import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import * as style from "./style.css"

let App = ()=>{
    return(
       <div>
           <Navbar />
           <Hero/>
       </div>
    )
}

export default App