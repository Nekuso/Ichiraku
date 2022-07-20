import React from 'react';
import {StyledFeature} from './styles/Feature.styled';
import Feature1 from '../img/Feature1.png';
import Feature2 from '../img/Feature2.png';

const Feature = () => {
    return (
        <StyledFeature>
            <div className="feature__section">
                <div className="feature__container feature__info">
                    <div className="feature">
                        <h3>What's Trending / トレンド</h3>
                        <h2>Japanese Ramen</h2>
                        <p>Feel the taste of Ichirakus best Ramen here</p>
                        <div className="feature__list__container">
                            <ul className="feature__list">
                                <li><i className='bx bxs-check-circle'></i><p>SHOYU RAMEN</p></li>
                                <li><i className='bx bxs-check-circle'></i><p>MISO RAMEN</p></li>
                                <li><i className='bx bxs-check-circle'></i><p>TANTANMEN</p></li>
                            </ul>
                            <ul className="feature__list">
                                <li><i className='bx bxs-check-circle'></i><p>KURO TONKOTSU</p></li>
                                <li><i className='bx bxs-check-circle'></i><p>SHIRO TONKOTSU</p></li>
                                <li><i className='bx bxs-check-circle'></i><p>GYUKAI TONKOTSU</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="feature__container feature__img">
                    <img src={Feature1} alt="" />
                    <h2 className="left">おにぎり</h2>
                </div>
                <div className="feature__container feature__img right">
                    <img src={Feature2} alt="" />
                    <h2 className="right">中華餃子</h2>
                </div>
                <div className="feature__container feature__info">
                    <div className="feature">
                        <h3>What's Trending / トレンド</h3>
                        <h2>Japanese Drinks</h2>
                        <p>Have a drink with our finest drinks</p>
                        <div className="feature__list__container">
                            <ul className="feature__list">
                                <li><i className='bx bxs-check-circle'></i><p>SOJU</p></li>
                                <li><i className='bx bxs-check-circle'></i><p>SAKE</p></li>
                                <li><i className='bx bxs-check-circle'></i><p>SPRITE</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </StyledFeature>
    );
}

export default Feature;
