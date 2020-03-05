import React from "react";
import { NavLink, Link } from "react-router-dom";
/* Components */
import "../Head/header.css";
import logo from '../../Assets/logo.svg';

class TopSnippet extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="headerLogo"><Link to="/"><img src={logo} alt="DS"/><span>DubakoorSHOP</span></Link></div>
                    <ul>
                        <li><NavLink exact activeClassName="myActive" to="/addphoto">New Post</NavLink></li>
                        <li><NavLink exact activeClassName="myActive" to="/photos">View Gallery</NavLink></li>
                        <li><NavLink exact activeClassName="myActive" to="/contact-us">Contact US</NavLink></li>
                    </ul>
                </nav>
                <div className="heading">Hello! Welcome to Dubakoor Shop</div>
            </header>
        );
    }
}

export default TopSnippet;