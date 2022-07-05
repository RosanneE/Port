import React from "react"
import { Link } from "react-router-dom"

//Used in App.js, appears on all pages
const Nav = (props) => {
    return (
        <div className="navBar">
            {/* <Link to='/Home'>Home</Link> */}
            <div>Home</div>
            <div>Projects</div>
            <div>Contact</div>
        </div>
    )
}

export default Nav