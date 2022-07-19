import React from "react";
import { StyledPopular } from './styles/Popular.styled';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {categories, data} from '../data'
import Star from '../img/star.png';
import Slider from "react-slick";

const Popular = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

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
                    <Slider {...settings}>
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
                    </Slider>
                </div>
            </div>
        </StyledPopular>
    );
}

export default Popular;
