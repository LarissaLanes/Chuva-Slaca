import styled from "styled-components"

export const DivPostQuestion = styled.div`
    margin-bottom: 3em;
    display: flex;
    margin-left: 1.1em;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                //celulares
                margin-left:0 ;
        }

    h3{
        color: #ED7839;
        line-height: 0.1em;
        font-family: 'Roboto';
        font-size: 16px;
        font-weight:700;
    }

    p{
        text-align: center;
        color: #5C5C5C;
        font-family: 'Quicksand';
        font-weight: 400;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            font-size: 14px;
        }
    }
    
    div{
        display: grid;
        grid-template-columns: 4fr 0.1fr 1.5fr ;
        border-top: solid 0.5px white;
        width: 65vw;
        max-width: 65vw;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            width: 90vw;
            max-width: 90vw;
        }

        article{
            button{
                background: none;
                color:#474747;
                margin-left: 1em;
            }

            button:hover{
                background: none;
                color: #FEB154;
            }
        }
        
        button{
            font-family: 'Quicksand';
            font-style: normal;
            font-weight: 700;
            height: 4vh;
            border-radius: 0px 0px 4px 0px;
            border:none;
            color: #FFFFFF;
            font-size: 15px;
            transition: all 0.9s;
            -webkit-filter: transition(1px);
            background: linear-gradient(180deg,#FEB254 0%, #F0813D 100% );
        }

        button:hover{
            cursor:pointer;
            color: #FEB254;
            transition: all 0.9s;
            -webkit-filter: transition(1px);
            background: #FDF1EB;
        }
    }
 
`
