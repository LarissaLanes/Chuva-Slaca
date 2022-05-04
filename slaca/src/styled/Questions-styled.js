import styled from "styled-components"

export const DivQuestions = styled.div`
    justify-content:center;
    display: flex;

    aside{
        display: flex;
        gap: 1em;
    }

    article{
        border:  1px solid #E7E7E7;
        width: 65vw;
        border-radius: 4px;
        margin: 1em;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);/
        
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
           width: 83vw;
        }
            
        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 83vw;
            align-items:center;  
        }

        div{
            width: 65vw;
            color: #757575;
            display: flex;
            flex-direction:column;
            box-sizing: border-box; 

                @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                    width: 83vw;
                }
                
                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                    width: 83vw;
                    align-items:center;

                }
        }

        h4{
            color: #ED7839;
            font-size:16px;
            line-height: 0.5em;
        }

        h5{
            color: #5C5C5C;
        }

        p{
            color: #4D4D4D;
            font-size:14px;
        }
    }
`