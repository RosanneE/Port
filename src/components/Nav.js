import React from "react"
import { Link } from "react-router-dom"

//Used in App.js, appears on all pages
const Nav = (props) => {
	return (
		<div className="navBar">
			{/* <Link className= "nav" to="/"> */}
				<div>Home</div>
			{/* </Link>
			<Link className= "nav" to="/products"> */}
				<div>Projects</div>
			{/* </Link> */}

		</div>
	)
}

export default Nav