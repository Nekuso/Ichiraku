import styled from 'styled-components';

export const StyledFooter = styled.div `

    .footer__section {
        display: grid;
        grid-template-rows: 80% 20%;
        background: #2B2C39;
        width: 100%;
        height: 670px;

        .updates__section {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;

            .updates__container {
                .updates {
                    width: 100;
    
                    h1, p {
                        text-align: center;
                        color: #FFFF;
                    }

                    h1 {
                        font-size: 4vw;
                    }
    
                    p {
                        font-size: 1vw;
                        margin: 1rem 0;
                    }
    
                    .input__container {
                        margin: 0 auto;
                        width: 80%;
                        display: flex;
                        justify-content: space-between;
                        border: 1px solid #707070;
                        border-radius: 2rem;
                        padding: 0.5rem 0.5rem 0.5rem 1.5rem;
                        
                        input {
                            width: 60%;
                            border: none;
                            background: none;
                            color: #FFFF;
    
                            &:focus {
                                outline: none;
                            }
    
                            &::placeholder {
                                color: #FFFF;
                                font-size: .8vw;
                            }
                        }
    
                        button {
                            width: 40%;
                            cursor: pointer;
                            font-size: 1vw;
                            font-weight: 600;
                            border: none;
                            border-radius: 2rem;
                            padding: 1rem .6rem;
                            background: #424258;
                            color: #FFFF;
                        }
                    }
                }
            }
        }

        .footer__container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: red;

            .brand__logo {
                a {
                    img {
                        width: 50%;
                    }
                }
            }

            .links {
                display: flex;
                gap: 3vw;
                li {
                    font-size: 1.2vw;
                    a {
                        color: #FFFF;
                    }
                }
            }
            
            .socials {
                display: flex;
                align-items: center;
                gap: 1vw;
                
                i {
                    cursor: pointer;
                    color: #FFFF;
                    font-size: 2vw;
                }
            }
        }
    }

    @media screen and (max-width: 768px) {

        .footer__section {
            height: 500px;

            .updates__section {
                .updates__container {
                    .updates {
                        h1 {
                            font-size: 5.5vw;
                        }
                        p {
                            font-size: 2.5vw;
                        }

                        .input__container {
                            input {
                                font-size: 1.5vw;
    
                                &::placeholder {
                                    font-size: 1.5vw;
                                }
                            }
    
                            button {
                                font-size: 1.5vw;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 425px) {
        .footer__section {
            height: 300px;
            .updates__section {
                .updates__container {
                    .updates {
                        h1 {
                            font-size: 6.5vw;
                        }
                        p {
                            font-size: 3vw;
                        }

                        .input__container {
                            width: 100%;
                            padding: 0.3rem 0.3rem 0.3rem 1.5rem;
                            input {
                                font-size: 3vw;
    
                                &::placeholder {
                                    font-size: 2.5vw;
                                }
                            }
    
                            button {
                                padding: .7rem 0;
                                font-size: 2.5vw;
                            }
                        }
                    }
                }
            }
        }
    }
`