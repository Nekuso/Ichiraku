import React from 'react';
import { StyledFooter } from './styles/Footer.styled';
import Brand from '../img/Brand.png';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion'; 


const Footer = ({textEnter, textLeave}) => {

    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const {ref, inView} = useInView({
        threshold: 0.5
    });
    useEffect(() => {
        if(inView) {
            animation1.start("visible1");
            animation2.start("visible2");
            animation3.start("visible3");
        }
        if(!inView) {
            animation1.start("hidden");
            animation2.start("hidden");
            animation3.start("hidden");
        }

    }, [animation1,animation2,animation3,inView]);

    const FooterVariants = {
        hidden: {
            opacity: 0,
            y: "20px"
        },

        visible1: {
            opacity: 1,
            y: "0px",
            transition: {duration: .5, delay: .2}
        },

        visible2: {
            opacity: 1,
            y: "0px",
            transition: {duration: .5, delay: .4}
        },
        
        visible3: {
            opacity: 1,
            y: "0px",
            transition: {duration: .5, delay: .6}
        }
    }

    return (

        <StyledFooter>
            <div ref={ref} className="footer__section">
                <div className="updates__section">
                    <div className="updates__container">
                        <div className="updates">
                            <motion.h1
                                variants={FooterVariants}
                                initial="hidden"
                                animate={animation1}
                                onMouseEnter={textEnter} 
                                onMouseLeave={textLeave}
                            >Get updates straight<br/>
                            to your inbox</motion.h1>

                            <motion.p
                                variants={FooterVariants}
                                initial="hidden"
                                animate={animation2}
                                onMouseEnter={textEnter} 
                                onMouseLeave={textLeave}
                            >Sign up for the Ichiraku newsletter.</motion.p>

                            <motion.form 
                                variants={FooterVariants}
                                initial="hidden"
                                animate={animation3}
                                className="input__container">
                                <input type="text" placeholder="Email Address"/>
                                <button type="submit">Update me!</button>
                            </motion.form>
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
