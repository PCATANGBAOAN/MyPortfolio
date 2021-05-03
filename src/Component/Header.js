import React from 'react';
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>PAUL TANGBAOAN | <span className="fullstack">FULLSTACK ENGINEER</span></h1>
                <Typed
                className="typed-text"
                strings={["Web Development", ".NET Savy", "Web API", "React.JS", "C# Warrior", "Stackoverflow Student"]}
                typeSpeed={40}
                backSpeed={60}   
                loop           
                />    
                 <a href="#" className="btn-main-offer">contact me</a>  
            </div>
           
        </div>
    )
}
export default Header;
