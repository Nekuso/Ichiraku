import styled from 'styled-components'


export const StyledFeature = styled.div `
    .feature__section {
        display: grid;
        position: relative;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        height: 670px;
        width: 100%;
        background: #FFFF;

        .center__discover {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-50%, 0);
            border-radius: 100%;
            width:150px;
            height:150px;
            background: #2B2C39;
            color: #FFFF;
            font-size: 1rem;
        }

        .feature__container {
            position: relative;
            width: 100%;
            background: #FFFF;
        }

        .feature__img {
            display: flex;
            background: #424258;
            justify-content: center;
            align-items: center;
            img {
                width: 45%;
            }

            h2 {
                position: absolute;
                writing-mode: vertical-rl;
                text-orientation: mixed;
                color: #FFFF;
                font-size: 3rem;
            }
            
            .left {
                right: 30px;
            }
            
            .right {
                left: 30px;
            }
        }

        .feature__info {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            width: auto;
            
            .feature {
                width: 100%;
                h3 {
                    font-size: 1vw;
                }
                h2 {
                    font-size: 3vw;
                    font-weight: 800;
                }
                p,i {
                    font-size: 1.1vw;
                }
                .feature__list__container {
                    display: flex; 
                    margin: .5rem 0;
                    gap: 20px;
                    .feature__list {
                        li{
                            display: flex;
                            gap: 5px;
                            margin: .5rem 0;
                            align-items: center;
                        }
                    }
                }
            }
        }
    }

`