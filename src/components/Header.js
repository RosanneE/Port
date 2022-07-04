import React from "react"


//Used in App.js, appears on all pages
const Header = (props) => {
    return (
        <div className="header">
            <div className="heading row">
                <img
                    className="portrait"
                    src="https://i.imgur.com/jL6XfVL.png"
                    alt="smirking red head"
                />
                <div className="introText">
                    <h1 className="headingText">Rosanne Anderson:</h1>
                    <h2>Software Engineer - Web Developer - Problem Solver</h2>
                </div>
            </div>
        </div>
    )
}

export default Header