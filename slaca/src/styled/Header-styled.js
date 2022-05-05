import styled from "styled-components"

export const DivHeader = styled.div`
    width: 100%;
    background-color: #FDF1EB;
    display: flex;
    height: 10vh;
    align-items: center;
    justify-content: center;

    div{
        p{
            font-size: 14px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            color: #725C5C;

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                font-size: 9px;
            }
        }
    }
`

export const DivImgHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.05fr;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column-reverse;
    }

    div{

        p{
            font-family: 'Quicksand';

            @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
                font-size: 11px; 
            }
            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                font-size: 7px;
            }
        }   
    }
`

export const Box = styled.div`
   margin-right: 1em;

   @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
        margin-right: 0.05px ;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        margin-right: 0px ;
    }

`