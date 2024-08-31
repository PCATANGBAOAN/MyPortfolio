import React from 'react';
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wrapper" id="Home">
            <div className="main-info">
                <h1>@DevPaul | <span className="fullstack">FULL STACK SOFTWARE ENGINEER</span></h1>
                <Typed
                className="typed-text"
                strings={["Web Development", ".NET Savy", "Web API", "React.JS", "C# Warrior", "Stackoverflow Student", "Microservices", "AWS", "GraphQL"]}
                typeSpeed={40}
                backSpeed={60}   
                loop           
                />    
                 <a href="/#" className="btn-main-offer">Contact me</a>  
            </div>
           
        </div>
    )
}
export default Header;
