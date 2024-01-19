import React from "react";
import './style.scss'
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { RoutersList } from "../../router";
import '../../assets/global-styles/style.scss'
import logo from '../../assets/images/logo.png'
import backgrundfoto from '../../assets/images/simple-house-01.jpg'

class Header extends React.Component {

    render() {
        return <div className="container background" style={{ backgroundImage: `url(${backgrundfoto})`,}}>,
                        
            <div className="headerbox">
                <div className="title">
                    <img className="logo" src={logo} alt="" />
                    <span><h1>Simple House</h1>
                    <p>new restaurant template</p></span>
                </div>
                <ul>
                    <li><NavLink className="menu-title" to={RoutersList.HOME}>Home</NavLink></li>
                    <li><NavLink className="menu-title" to={RoutersList.ABOUT}>About</NavLink></li>
                    <li><NavLink className="menu-title" to={RoutersList.CONTACT}>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    }
}

export default Header