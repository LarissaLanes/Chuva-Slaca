import styled from "styled-components"

export const DivCreated = styled.div`
    display: flex;
    /* text-align: center; */
    /* justify-content:center; */
    gap: 1em;
    justify-items:center;
    /* border: solid; */


    h3{
        color: #ED7839;
        /* border: solid; */

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        font-size: 16px;
        /* tablets */
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            font-size: 13px;
            
        }
    }

    p{
        color: #595959;
        /* font-size: 14px; */
        /* border: solid; */


    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        font-size: 15px
        
        /* tablets */
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            font-size: 12px;
            margin-left: 2em;
            
        }
    }

     ul{
         list-style:none;
         display: flex;
         gap: 4em;

         @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            gap: 2em;
            /* tablets */
        }

         li{
             color: #F0A880;
            
            div{
                display: flex;
                width: 2vw;
            }
         }
     }


    button{
        margin-bottom: 3em;
        width: 9vw;
        align-items:center;
        display:flex;
        justify-content:center;
        /* width: 14vw; */
        height: 4vh;
        border:none;
        color: #FFFFFF;
        font-size: 17px;
        border-radius: 3px;
        transition: all 0.9s;
        -webkit-filter: transition(1px);
        background: linear-gradient(180deg,#FEB254 0%, #F0813D 100% );
        box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.12);

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            width: 18vw;

        /* tablets */
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            width: 38vw;

            
        }

    }

    button:hover{
        cursor:pointer;
        color: #FEB254;
        transition: all 0.9s;
        -webkit-filter: transition(1px);
        background: #FDF1EB;
    }
  
`