
import styled from "styled-components"

export const DivHeader = styled.div`
    /* border: solid red 1px; */
    /* height: 11vh; */
    background-color: #FDF1EB;
    display: grid;
    grid-template-columns: 4fr 0.5fr 2fr;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        /* height: 9vh; */
        /* border: solid 1px red; */

        /* tablets */
    }

    main{
        /* border:solid green; */
        /* height: 10vh; */
        margin-left: 7em;
        line-height: 0.5em;

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        margin-left: 4em;
        line-height: 12px;
        width: 60vw;
        /* max-width: 70vw; */

        /* tablets */
        }

        p{
            font-size: 15px;
            color:#725C5C;

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            font-size: 13px;

        /* tablets */
        }
        }

        h3{
            color:#725C5C;
            font-size: 19px;

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            font-size: 15px;

        /* tablets */
        }
        }
    }

    div{
        /* border:solid pink; */
        align-items:center;
        display: flex;
        justify-content:center;
        margin-right: 0.3em ;
        /* width: 7vw; */

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            width: 11vw;
            margin-left: 0.3em;

        /* tablets */
        }
    }

    section{
        /* border: solid 1px red; */
        /* height: 10vh; */
        display: flex;
        align-items: center;
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            /* width: 10vw; */
            /* display: flex; */
            display: flex;
            flex-direction:column-reverse;
            align-items: flex-end;
            

        /* tablets */
        }

        div{
            display:flex;
            /* border:solid red; */
            flex-direction:column;
            align-items: flex-end;
            line-height: 0.5px;

            p,h4{
            color: #333333;
            /* border: solid 1px red; */
            margin: 1em;
            display: flex;
            align-items: flex-end;

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                font-size: 12px;

        /* tablets */
        }
            
            
            
        }


        }

      
        

       
    }
`