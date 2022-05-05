import styled from "styled-components"

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;

    div{
        width: 67vw;

        @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
                width: 90vw;
        }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 90vw;
        }
       
        section{
            border: solid 1px #ECECEC;
            border-radius: 3px 3px 0px 0px;
            background-color:#FDF1EB;

            h2{
                color: #4E4E4E;
                margin-left: 1em;

                @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
                    font-size: 19px;
                }

                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                    font-size: 13px;
                }
            }
        }
        
        article{
            position: static;
            
            p{
                font-family: 'Quicksand';
                font-weight: 400;
                font-style: normal;
                letter-spacing: 0.02em;

                @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
                font-size: 15px;
            }

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                font-size: 11px;
            }


        }
        }
    }
`