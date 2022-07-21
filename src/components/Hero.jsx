import React from 'react';
import HeroImg from '../img/Hero.png';
import Owner from '../img/Owner.png';
import { StyledHero } from './styles/Hero.styled';
import {motion} from 'framer-motion';

const Hero = () => {
    const HomeVariants = {
        hidden: {
            opacity: 0,
        },

        visible: {
            opacity: 1,
            transition: {
                type: 'spring', 
                stiffness: 100, 
                duration: 1
            }
        }
    }

    const secondVariants = {
        hidden: {
            opacity: 0,
            y: "10vh"
        },
        
        visible: {
            opacity: 1,
            y: "0vh",
        }
    }

    return (
        <StyledHero>
                <motion.div 
                    variants={HomeVariants}
                    initial="hidden"
                    animate="visible"
                    className="hero__section">
                    <div className="left__container">
                        <div className="left__img"/>
                        <motion.h2 
                            variants={secondVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{duration: 1}}
                            className="jap__text1"
                        >
                            ラーメンは最大の喜びです
                        </motion.h2>
                        <motion.h2 
                        variants={secondVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{duration: 1}}
                        className="jap__text2"
                        >
                            一楽
                        </motion.h2>
                    </div>

                    <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                        className="hero__container">
                        <div
                        className="hero">
                            <motion.div 
                            variants={secondVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{duration: 1}}
                            className="hero__text">
                                <h2>Japanese Authentic <br/>Noodle Restaurant</h2>
                                <p>Ramen is the best pleasure</p>

                                <div className="buttons">
                                    <a href="/">Explore →</a>
                                    <a href="/" className="branchBtn">Branches</a>
                                </div>
                            </motion.div>
                            <motion.img 
                            initial={{opacity: 0, x: "10vw"}}
                            animate={{opacity: 1, x: "0"}}
                            transition={{duration: 1}}
                            src={HeroImg} alt="" />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                        className="bottom__container">
                        <motion.div
                        variants={secondVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{duration: 1}}
                        className="left__text">
                            <h3>39k+</h3>
                            <p>Satisfied<br/>Costumers</p>
                        </motion.div>
                        <div className="vl"></div>
                        <motion.div 
                        variants={secondVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{duration: 1}}
                        className="right__text">
                            <img src={Owner} alt="Owner"/>
                            <p>"This is the best Authentic<br/>Japanese Restaurant I have<br/>experienced"</p>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </StyledHero>
    )
}

export default Hero;