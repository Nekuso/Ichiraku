import styled from 'styled-components';


export const StyledPopular = styled.div `
    .popular__section {
        height: 670px;
        width: 100%;
        background: #2B2C39;

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
            align-items: center;
            justify-content: center;
            max-width: 70vw;
            margin: 1rem auto;
            width: 100%;
            height: 350px;
            gap: 10px;
            background: red;
            overflow: hidden;

            .popular__item {
                cursor: pointer;
                display: grid;
                width: 200px;
                height: 270px;
                padding: 1rem;
                background: #353646;
                border-radius: 2rem;
                transition: .3s ease-in-out;
                
                img {
                    width: 100%;
                }
                
                .item__name {
                    display: block;
                    text-align: center;
                    color: #FFFFFF;
                    font-size: 1.4vw;
                }
                
                p {
                    color: #FFFFFF;
                    text-spacing: 20px;
                    letter-spacing: 1px;
                }

                .item__info__container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    
                    .info__left {
                        display: flex;
                        align-items: center;
                        gap: 5px;
                        
                        img {
                            width: 1.5rem;
                        }
                    }
                }

                &:hover {
                    background: #676884;
                    transform: scale(1.1);
                    box-shadow: 7px 7px 0px 0px rgba(0,0,0,1);
                }
            }
        }
    }
`