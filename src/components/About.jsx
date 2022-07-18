import React from 'react';
import {StyledAbout} from './styles/About.styled';
import AboutLeft1 from '../img/AboutLeft1.png';
import AboutLeft2 from '../img/AboutLeft2.png';

const About = () => {
    return (
        <StyledAbout>
            <div className="about__section">
                <div className="left__about">

                    <div className="left__about__container aboutImg">
                        <img src={AboutLeft1} alt="AboutLeft" />
                        <h2 className="about__left__text">味噌ラーメン</h2>
                    </div>

                    <div className="aboutImg">
                        <img src={AboutLeft2} alt="AboutLeft" />
                        <h2 className="about__left__text">とんこつしろ</h2>
                    </div>

                </div>

                <div className="about__container">
                    <div className="about">
                        <h3>About us / 私たちに関しては</h3>
                        <h1>Our mission is to bring<br/>
                            true Japanese flavors<br/>
                            to you.
                        </h1>
                        <p>
                            We will continue to provide the experience of best noodles, <br/>
                            the Japanese mindset of hospitality, with our shopping and <br/>
                            dining for our customers.🙏<br/>
                        </p>
                    </div>
                        <h2 className="jap__bottom">一楽</h2>
                </div>
            </div>
        </StyledAbout>
    );
}

export default About;
