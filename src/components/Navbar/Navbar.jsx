import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../dist.css/Navbar.css';
import Brand from '../../img/Brand.png';

const Navbar = () => {

    const [navActive, setNavActive] = useState("nav__links");
    const [btnActive, setBtnActive] = useState("nav__hamburger");

    const navToggle = () => {
        navActive === "nav__links" ? setNavActive("nav__links nav__active")
        : setNavActive("nav__links")

        btnActive === "nav__hamburger" ? setBtnActive("nav__hamburger is-active")
        : setBtnActive("nav__hamburger")
    }

    return (
        <div className="navbar">
            <div className="brand__logo">
                <a href="/">
                    <img src={Brand} alt="brand" />
                </a>

            </div>

            <ul className={navActive}>
                <li><Link to="/" className="Link" onClick={navToggle}>HOME</Link></li>
                <li><Link to="/" className="Link" onClick={navToggle}>MENU</Link></li>
                <li><Link to="/" className="Link" onClick={navToggle}>SERVICE</Link></li>
                <li><Link to="/" className="Link" onClick={navToggle}>ABOUT US</Link></li>
            </ul>

            <button onClick={navToggle} className={btnActive}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
}

export default Navbar;
