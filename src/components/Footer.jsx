import React from 'react';
import { StyledFooter } from './styles/Footer.styled';
import Brand from '../img/Brand.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer__section">
                <div className="updates__section">
                    <div className="updates__container">
                        <div className="updates">
                            <h1>Get updates straight<br/>
                            to your inbox</h1>
                            <p>Sign up for the Ichiraku newsletter.</p>
                            <form className="input__container">
                                <input type="text" placeholder="Email Address"/>
                                <button type="submit">Update me!</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="footer__container">
                    <div className="brand__logo">
                        <a href="/">
                            <img src={Brand} alt="brand" />
                        </a>
                    </div>

                    <ul className="links">
                        <li><Link to="/" className="Link">HOME</Link></li>
                        <li><Link to="/" className="Link">MENU</Link></li>
                        <li><Link to="/" className="Link">SERVICE</Link></li>
                        <li><Link to="/" className="Link">ABOUT US</Link></li>
                    </ul>

                    <div className="socials">
                        <i className='bx bxl-facebook-circle'></i>
                        <i className='bx bxl-instagram'></i>
                        <i className='bx bxl-twitter' ></i>
                    </div>

                </div>
            </div>
        </StyledFooter>
    );
}

export default Footer;
