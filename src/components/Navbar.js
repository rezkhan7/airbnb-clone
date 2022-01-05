import React from "react"
import logo from "../images/airbnb-logo.png"
import * as style from "../style.css"

let Navbar = ()=>{
    return(
        <nav>
            <img src = {logo} alt = "logo"></img>
        </nav>
    )
}

export default Navbar