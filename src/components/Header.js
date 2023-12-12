import React from "react"
import Logo from "../images/react-logo.png"

export default function Header(props) {
    return (
            <header>
                <nav className={props.darkMode ? "dark" : ""}>
                    <img src={Logo} className="nav-logo_icon"/>
                    <h3 className="nav--logo_text">ReactFacts</h3>
                    <div className="toggler">
                        <p className="toggler--light">Light</p>
                        <div className="toggler--slider" onClick={props.toggleDarkMode}>
                            <div className="toggler--slider--circle"></div>
                        </div>
                        <p className="toggler--dark">Dark</p>
                    </div>
                </nav>
            </header>
    )
}

