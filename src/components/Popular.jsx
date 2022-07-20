import React, {useState} from "react";
import { StyledPopular } from './styles/Popular.styled';
import {categories, miso, shoyu, kuro, tantanmen, gyokai} from '../data'
import Star from '../img/star.png';

const Popular = () => {

    const [currentData, setCurrentData] = useState(miso);



    return (
        <StyledPopular>
            <div className="popular__section">
                <h1 className="popular__text">Popular foods /人気</h1>
                <div className="popular__filter">
                    {
                        categories.map(category =>(
                            <button onClick={()=> {
                                if(category.type === "miso"){
                                    setCurrentData(miso);
                                }
                                else if(category.type === "shoyu"){
                                    setCurrentData(shoyu);
                                }
                                else if(category.type === "kuro"){
                                    setCurrentData(kuro);
                                }
                                else if(category.type === "tantanmen"){
                                    setCurrentData(tantanmen);
                                }
                                else if(category.type === "gyokai"){
                                    setCurrentData(gyokai);
                                }
                            }} key={category.id}>{category.name}</button>
                        ))
                    }
                </div>

                <div className="popular__carousel">
                    {
                        currentData.map(item =>(
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
                                    <div className="vl"></div>
                                    <p>P{item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <h2 className="jap__text1">人気の食べ物</h2>
                <h2 className="jap__text2">人気の食べ物</h2>
            </div>
        </StyledPopular>
    );
}

export default Popular;
