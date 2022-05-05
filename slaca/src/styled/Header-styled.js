import styled from "styled-components"

export const DivHeader = styled.div`
    width: 100%;
    background-color: #FDF1EB;
    display: grid;
    height: 10vh;
    grid-template-columns: 5fr 0.5fr 2fr;

    @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
        width: 100%;
    }

    main{
        margin-left: 9.3em;
        line-height: 0.5em;

        @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
            margin-left: 5em;
            width: 48vw;
            margin-top: 1em;
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            margin-left: 3em;
            min-width: 60vw;
            line-height: 0.1px;
        }

        p{
            font-size: 14px;
            color:#725C5C;
            font-family: "Roboto";
            font-weight: 500;
            font-style:normal;
            line-height: 3px;

            @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
                font-size: 11px;
                line-height:1em;
                flex-wrap: wrap;
            }
            
            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                font-size: 9px;
                line-height: 0.8em;
                flex-wrap: wrap;
            }
        }

        /* h3{
            color:#725C5C;
            font-size: 19px;
            font-family: "Roboto";

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                font-size: 15px;
            }
            
            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                font-size: 10px;
                line-height: 1em;
                flex-wrap: wrap;
            }
        } */
    }

    div{
        align-items:center;
        display: flex;
        justify-content:center;
        margin-right: 0.3em ;

        @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
            /* width: 12vw; */
            /* margin-left: 0.3em; */
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 60px;
        }
    }

    section{
        display: flex;
        align-items: center;
        
        @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
            /* display: flex;
            flex-direction:column-reverse;
            align-items: flex-end; */
            /* margin-left: 3em; */
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            display: flex;
            flex-direction:column-reverse;
            align-items: flex-end;
        }
        
        div{
            display:flex;
            flex-direction:column;
            align-items: flex-end;
            line-height: 0.5px;

            p{
                color: #333333;
                margin: 1em;
                display: flex;
                align-items: flex-end;
                font-family: 'Quicksand';
                font-style: normal;
                font-weight: 400;

            @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
                font-size: 9px;
                margin-right: 1em;    
            }   
        
            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                font-size: 8px;
            } 

            @media screen and (min-device-width : 1200px) {
                font-size: 13px;
            }
        }
    }
}
`