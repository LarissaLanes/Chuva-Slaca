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
        /* width: 65vw; */
        border-radius: 4px;
        margin: 1em;
        /* border: solid; */
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);/
        
        /* @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
           width: 70vw;
           border: solid red;
           margin-right: 11em;
        } */
            
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
            /* border: solid pink; */

                @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
                    width: 83vw;
                    /* border: solid; */
                    /* margin-left: 1em; */
                    /* z-index: 0; */
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

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                    font-size: 12px;
            }
        }

        h5{
            color: #5C5C5C;

           
        }

        p{
            color: #4D4D4D;
            font-size:14px;

            @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
                    font-size: 13px;
            }


            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                    font-size: 11px;
            }
        }
    }
`