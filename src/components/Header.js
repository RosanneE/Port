import React from "react"


//Used in App.js, appears on all pages
const Header = (props) => {
    return (
        <div className="header">
            <div class="heading row">
                <img
                    class="portrait"
                    src="https://i.imgur.com/jL6XfVL.png"
                    alt="smirking red head"
                />
                <div class="introText">
                    <h1>Rosanne Anderson:</h1>
                    <h2>Software Engineer - Web Developer - Problem Solver</h2>
                </div>
            </div>
        </div>
    )
}

export default Header