import styled from  'styled-components';


export const StyledAbout = styled.div `

    .about__section {
        display: grid;
        grid-template-columns: 25% 75%;
        height: 670px;
        width: 100%;

        .left__about {
            display: grid;
            grid-template-rows: 50% 50%;            
            background: #424258;
            height: 100%;

            .left__about__container {
                border-bottom: 5px solid #FFFF;
            }

            img {
                width: 70%;
            }
            
            .aboutImg {
                display:flex;
                justify-content: end;
                align-items: center;
                position: relative;
                width: 100%;

                .about__left__text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    font-size: 2rem;
                    color: #FFFF;
                    position: absolute;
                    left: 20px;
                }
            }
        }

        .about__container {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            position: relative;
            
            .about {
                width: 100%;
                margin: 10%;
                
                h3 {
                    font-size: 2vw;
                    color: #00001;
                }
                h1 {
                    font-size: 4.5vw;
                    margin-bottom: 1rem;
                    color: #00001;
                }
                p {
                    font-size: 1.5vw;
                    color: #00001;
                }
            }

            .jap__bottom {
                color: #424258;
                font-size: 2vw;
                position: absolute;
                bottom: 30px;
                right: 30px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .about__section {
            grid-template-columns: 100%;
            height: auto;

            .left__about {
                display: none;
            }

            .about__container {
                .about {
                    h3 {
                        font-size: 3.5vw;
                    }
                    h1 {
                        font-size: 5.5vw;
                    }
                    p {
                        font-size: 2.5vw;
                    }
                }
                .jap__bottom {
                    font-size: 3vw;
                }
            }
        }
    }
`