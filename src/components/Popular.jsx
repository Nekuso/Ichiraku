import React from "react";
import { StyledPopular } from './styles/Popular.styled';
import {categories, data} from '../data'
import { motion } from "framer-motion";
import Star from '../img/star.png';

const Popular = () => {

    return (
        <StyledPopular>
            <div className="popular__section">
                <h1 className="popular__text">Popular foods /人気</h1>
                <div className="popular__filter">
                    {
                        categories.map(category =>(
                            <button key={category.id}>{category.name}</button>
                        ))
                    }
                </div>

                <div className="popular__carousel">
                    {
                        data.map(item =>(
                            <div 
                                key={item.id} 
                                className="popular__item">

                                <img src={item.img} alt="Something delicius" />
                                <h2 className="item__name">{item.name}</h2>
                                <div className="item__info__container">
                                    <div className="info__left">
                                        <img src={Star} alt="star" />
                                        <p>{item.rating}</p>
                                    </div>
                                    <p>P{item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </StyledPopular>
    );
}

export default Popular;
