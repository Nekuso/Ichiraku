import React from 'react';
import { StyledPopular } from './styles/Popular.styled';
import {categories} from '../data'

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
            </div>
        </StyledPopular>
    );
}

export default Popular;
