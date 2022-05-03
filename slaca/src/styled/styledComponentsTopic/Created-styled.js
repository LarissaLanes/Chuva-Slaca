import styled from "styled-components"

export const DivCreated = styled.div`
    display: flex;
    gap: 1em;
    justify-items:center;

    h3{
        color: #ED7839;
        font-family: 'Roboto';
        font-weight: 700;
        font-style: normal;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        font-size: 16px;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 13px;  
        }
    }

    p{
        color: #595959;
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 400;
        display: flex;
        flex-wrap:wrap;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        font-size: 15px
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
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
        font-family: 'Quicksand';
        font-weight: 700;
        margin-bottom: 3em;
        width: 9vw;
        align-items:center;
        display:flex;
        justify-content:center;
        height: 4vh;
        border:none;
        color: #FFFFFF;
        font-size: 15px;
        border-radius: 3px;
        transition: all 0.9s;
        -webkit-filter: transition(1px);
        background: linear-gradient(180deg,#FEB254 0%, #F0813D 100% );
        box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.12);

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            width: 18vw;
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
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