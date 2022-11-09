import React from "react"


//Used in App.js, appears on all pages
const Header = (props) => {
    return (
        <div className="header">
            <div className="heading">
                <img
                    className="pageHead"
                    src="https://i.imgur.com/GxxDBVE.png"
                    alt="smirking red head"
                />
            </div>
        </div>
    )
}

export default Header