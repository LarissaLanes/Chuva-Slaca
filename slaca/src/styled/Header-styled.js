import styled from "styled-components"

export const DivHeader = styled.div`
    width: 100%;
    background-color: #FDF1EB;
    display: grid;
    height: 10vh;
    grid-template-columns: 5fr 0.5fr 2fr;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        height: 100%;
    }

    main{
        margin-left: 9.3em;
        line-height: 0.5em;

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            margin-left: 4em;
            line-height: 12px;
            width: 60vw;
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            margin-left: 3em;
            min-width: 54vw;
            line-height: 3px;
        }

        p{
            font-size: 14px;
            color:#725C5C;
            font-family: "Roboto";
            font-weight: 500;
            font-style:normal;
            line-height: 3px;

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                font-size: 13px;
            }
            
            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                font-size: 9px;
                line-height:1em;
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

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            width: 11vw;
            margin-left: 0.3em;
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 60px;
        }
    }

    section{
        display: flex;
        align-items: center;
        
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            display: flex;
            flex-direction:column-reverse;
            align-items: flex-end;
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

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                font-size: 12px;    
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