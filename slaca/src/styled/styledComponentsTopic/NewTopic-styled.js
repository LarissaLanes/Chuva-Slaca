import styled from "styled-components"

export const DivNewTopic = styled.div`
    display: flex;
    justify-content:center;
    gap: 1em;
    justify-items:center;
    margin-bottom: 6vh;

    h3{
        color: #ED7839;
        font-family: "Roboto";
        font-size: 18px;
        font-weight: 700;
        font-style: "normal";
    }

    h4{
        color: #F48F44;
        font-family: 'Quicksand';
        font-weight: 700;
    }

    h5{
        color: #F48F44;
        text-decoration-line: underline;
        cursor: pointer;
        font-family: 'Quicksand';
    }

    p{
        color:#595959;
        font-size: 14px;
        font-family: 'Quicksand';
        font-weight: 400; 


        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            margin-left: 2em;
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            font-size: 12px;
            margin-left: 2em;
        }
    }

    button{
        font-family: 'Quicksand';
        font-weight: 700;
        width: 15vw;
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
           width: 20vw;
         }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 40vw;
        }
    }

    button:hover{
        cursor:pointer;
        color: #FEB254;
        transition: all 0.9s;
        -webkit-filter: transition(1px);
        background: #FDF1EB;
    }

    aside{
        gap: 1px;
        display: flex;
        justify-content:center;
        margin-bottom: 10em;
        transition: all 0.9s;
        -webkit-filter: transition(1px);
        width: 80vw;

    div{
        position: absolute;
        width: 20vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top:3em;
        z-index: 1;
        transition: all 0.9s;
        -webkit-filter: transition(1px);

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
           width: 60vw ;
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 40vw;
        }

        h3{
            font-family: 'Quicksand';
            font-weight: 700;
            font-size: 16px;
            color: #707070;
            line-height: 0.5em;

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            font-size: 13px;
            }

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            font-size: 10px;
            }
        }

        p{
            color: #ED7839;
            font-size: 14px;
            text-decoration-line: underline;
            cursor: pointer;
            font-weight: 500;

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            font-size: 10px;
            }
        } 
    }
    
    article:hover{
        -webkit-filter: blur(3px);
        filter:none;
        cursor: pointer;
        z-index: 1;
        border:  1px solid #E7E7E7;
        background-color: white ;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
    }

    article{
        background-color:#E7E7E7 ;
        border:  1px solid #DDDDDD;
        -webkit-filter: blur(3px);
        filter:blur(2px);
        transition: all 0.7s;
        width: 63vw;
        padding: 1em;
        border-radius: 4px;
        margin: 1em;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
        position: absolute;
        z-index: 0;

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
           width: 78vw;
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 75vw;
            margin: 1px;
        }

        h5{
            color: #5C5C5C;
            text-decoration:none;
            line-height: 0.5em;
        }

        p{
            color: #4D4D4D;
        }
    }
`