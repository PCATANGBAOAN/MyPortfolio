import React from 'react'
import logo from '../paullogo4.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-bg">
        <div className="container">
          <a className="navbar-brand" href="/#"><img className="logo" src={logo} alt="logo"></img></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">          
            <FontAwesomeIcon icon={faBars} style={{color:'white'}}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
             
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >Home
              </Link>
              </li>
              <li className="nav-item">
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >About
              </Link>
              </li>
              <li className="nav-item">
              <Link
                activeClass="active"
                to="Project"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >Timeline
              </Link>
              </li>
              <li className="nav-item">
              <Link
                activeClass="active"
                to="howwork"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >How Work
              </Link>
              </li>
              <li className="nav-item">
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >Portfolio
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
