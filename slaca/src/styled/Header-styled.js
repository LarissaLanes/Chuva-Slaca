
import styled from "styled-components"

export const DivHeader = styled.div`
    /* border: solid red 1px; */
    height: 11vh;
    background-color: #FDF1EB;
    display: grid;
    grid-template-columns: 4fr 0.5fr 2fr;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        height: 9vh;
        border: solid 1px red;

        /* tablets */
    }

    main{
        /* border:solid green; */
        height: 10vh;
        margin-left: 7em;
        line-height: 0.5em;

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        margin-left: 8em;
        height: 2em;

        /* tablets */
        }

        p{
            font-size: 15px;
            color:#725C5C;
        }

        h3{
            color:#725C5C;
            font-size: 22px;
        }
    }

    div{
        /* border:solid; */
        align-items:center;
        display: flex;
        justify-content:center;
        margin-right: 0.3em ;
    }

    section{
        /* border: solid 1px red; */
        height: 10vh;
        display: flex;
        align-items: center;

        div{
            display:flex;
            /* border:solid green; */
            flex-direction:column;
            align-items: flex-end;
            line-height: 0.5px;
         
            p,h4{
            color: #333333;
            /* border: solid 1px red; */
            margin: 1em;
            display: flex;
            align-items: flex-end;
            
            
            
        }


        }

      
        

       
    }
`