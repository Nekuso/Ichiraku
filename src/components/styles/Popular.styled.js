import styled from 'styled-components';


export const StyledPopular = styled.div `
    .popular__section {
        height: 670px;
        width: 100%;
        background: #2B2C39;
        position: relative;

        .jap__text1 {
            position: absolute;
            bottom: 20px;
            left: 20px;
            font-size: 3vw;
            writing-mode: vertical-rl;
            text-orientation: mixed;
            color: #ffffff5b;
        }
        
        .jap__text2 {
            position: absolute;
            top: 5vh;
            right: 5vh;
            font-size: 3vw;
            writing-mode: vertical-rl;
            text-orientation: mixed;
            color: #ffffff5b;
        }
        
        .popular__text {
            font-size: 3.5vw;
            padding: 2.5rem 0;
            text-align: center;
            color: #FFFF;
        }

        .popular__filter {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            width: 85vw;
            margin: 0 auto;

            button {
                cursor: pointer;
                font-size: 1vw;
                font-weight: 500;
                padding: 1.2rem 1.8rem;
                border: none;
                background: #353646;
                color: #FFFF;
                border-radius: 2rem;
                text-transform: uppercase;
                transition: .3s ease-in-out;

                &:hover {
                    background: #51526A;
                    transform: translateY(-5px);
                }
            }
        }

        .popular__carousel {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            padding: 2rem 0;
            width: 100%;
            height: auto;
            gap: 15px;
            // background: red;

            .popular__item {
                cursor: pointer;
                display: grid;
                justify-content: center;
                width: 280px;
                height: 350px;
                padding: 1rem;
                background: #353646;
                border-radius: 2rem;
                transform: scale(100%);
                transition: .3s ease-in-out;
                
                img {
                    width: 80%;
                    margin: 0 auto;
                }
                
                .item__name {
                    display: block;
                    text-align: center;
                    color: #FFFFFF;
                    font-size: 1.7vw;
                }
                
                p {
                    color: #FFFFFF;
                    text-spacing: 20px;
                    letter-spacing: 1px;
                    font-size: 1.3vw;
                }

                .item__info__container {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    
                    .info__left {
                        display: flex;
                        align-items: center;
                        gap: 5px;
                        
                        img {
                            width: 1.5rem;
                        }
                    }

                    .vl {
                        width: 2px;
                        height: 1.5rem;
                        background: #6b6d8d;
                    }
                }

                &:hover {
                    background: #676884;
                    transform: scale(105%);
                    box-shadow: 7px 7px 0px 0px rgba(0,0,0,1);

                    .vl {
                        background: #bfc2f3;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .popular__section {
            height: auto;

            .popular__text {
                font-size: 4.5vw;
                padding: 1.5rem 0;
            }

            .popular__carousel {
                justify__content: space-around;

                .popular__item {
                    width: 25vw;
                    height: 45vh;

                    .item__name {
                        font-size: 2.5vw;
                    }
                    
                    p {
                        color: #FFFFFF;
                        text-spacing: 20px;
                        letter-spacing: 1px;
                        font-size: 1.6vw;
                    }
    
                    .item__info__container {
                        .info__left {
                            img {
                                width: 1rem;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 560px) {
        .popular__section {

            .popular__filter {
                button {
                    font-size: 1.9vw;
                    padding: .9rem 1rem;
                }
            }

            .popular__carousel {
                padding: 1rem 0;

                .popular__item {
                    width: 25vw;
                    height: 200px;
                    border-radius: 1rem;
                }
            }
        }
    }

    @media screen and (max-width: 425px) {
        .popular__section {

            .jap__text1 {
                bottom: 10px;
                left: 10px;
                font-size: 3vw;
            }

            .jap__text2 {
                top: 10px;
                right: 10px;
                font-size: 4vw;
            }

            .popular__text {
                font-size: 5.5vw;
                padding: 1.5rem 0;
            }

            .popular__filter {
                button {
                    font-size: 1.7vw;
                    padding: .8rem .8rem;
                }
            }

            .popular__carousel {
                padding: 1rem 0 1.5rem 0;

                .popular__item {
                    width: 25vw;
                    height: 130px;
                    border-radius: 1rem;

                    img {
                        width: 100%;
                    }

                    .item__name {
                        font-size: 2.1vw;
                    }
                    
                    p {
                        color: #FFFFFF;
                        text-spacing: 20px;
                        letter-spacing: 1px;
                        font-size: 1.6vw;
                    }
                    
                    .item__info__container {
                        .vl {
                            height: .7rem;
                        }
                        .info__left {
                            img {
                                width: .4rem;
                            }
                        }
                    }
                }
            }
        }
    }

`
