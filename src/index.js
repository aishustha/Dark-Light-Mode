import React from "react"
import ReactDOM from "react-dom"
import './index.css';
import Header from "./components/Header"
import MainContent from "./components/MainContent"



function App() {
    const [darkMode, setDarkMode] = React.useState(true)


    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }   

    return (
        <div>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <MainContent darkMode={darkMode}/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))