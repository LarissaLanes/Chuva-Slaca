import styled from "styled-components"

export const DivCreateTopic = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 3em;

    div{
        width: 67vw;
        max-width: 67vw;
        display: grid;

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            width: 90vw;
            max-width: 90vw;
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 90vw;
            max-width: 90vw;
        }

        section{
            background-color:#FDF1EB ;
            border-bottom: solid 1px #ECECEC;
            border-radius: 3px 3px 0px 0px;
            width: 67vw;
            max-width: 67vw;

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                width: 90vw;
                max-width: 90vw;
            }

             @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                width: 90vw;
                max-width: 90vw;
            }

            h2{
                color: #4E4E4E;
                margin-left: 1em;

                @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                   font-size: 19px;
                 } 
            }
        }
    }
`