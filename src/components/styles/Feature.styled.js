import styled from 'styled-components'


export const StyledFeature = styled.div `
    .feature__section {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        height: 670px;
        width: 100%;
        background: #FFFF;

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
                width: 40%;
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
                .feature__list__container {
                    display: flex; 
                    margin: 1rem 0;
                    gap: 20px;
                    .feature__list {
                        li{
                            display: flex;
                            margin: .5rem 0;
                            align-items: center;
                        }
                    }
                }
            }
        }
    }

`