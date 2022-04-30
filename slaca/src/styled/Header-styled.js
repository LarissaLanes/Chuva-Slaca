
import styled from "styled-components"

export const DivHeader = styled.div`
    /* border: solid red 1px; */
    /* height: 11vh; */
    width: 100%;
    background-color: #FDF1EB;
    display: grid;
    grid-template-columns: 5fr 0.5fr 2fr;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        height: 100%;
        /* border: solid 1px red; */

        /* tablets */
    }

    main{
        /* border:solid green; */
        /* height: 10vh; */
        margin-left: 9em;
        line-height: 0.5em;

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        margin-left: 4em;
        line-height: 12px;
        width: 60vw;
        /* max-width: 70vw; */

        /* tablets */
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    /* celulares */
             margin-left: 3em;
            min-width: 54vw;
            line-height: 3px;

        }



        p{
            font-size: 15px;
            color:#725C5C;

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            font-size: 13px;

        /* tablets */

    
        }
        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    /* celulares */
            font-size: 9px;
            line-height: 1em;
            flex-wrap: wrap;

        }
        }

        h3{
            color:#725C5C;
            font-size: 19px;

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            font-size: 15px;

        /* tablets */
        }
        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            font-size: 10px;
            line-height: 1em;
            flex-wrap: wrap;



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
        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            width: 60px;
            /* margin-left: 0.3em; */
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

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            display: flex;
            flex-direction:column-reverse;
            align-items: flex-end;
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
        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            font-size: 8px;
        }
            
            
            
        }


        }

      
        

       
    }
`