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
    }
`