import styled from "styled-components"

export const DivFooter = styled.div`
    border-top:solid 1px #ECECEC;
    margin-top: 4em;
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    width: 74vw;
    height: 20vh;;
    margin-left: 2em;
    gap:1em;

    div{
        /* border: solid; */
        text-align:center;
        margin-top: 1em;

        img{
            height: 11vh;
        }

        button{
            height: 3.5vh;
            width: 13vw;
            border-radius: 5px;
            border:none;
            color: #FFFFFF;
            font-size: 17px;
            background: linear-gradient(180deg,#71478e 0%, #341947 100%);
            box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.12);
        }

        button:hover{
            cursor:pointer;
            color:#FFFFFF;
            transition: all 0.9s;
            -webkit-filter: transition(1px);
            background: #FEB254;
        }
    }

    section{
        /* border:solid; */
        margin-top: 1em;

        p{
            font-size: 17px;
            color:#4D4D4D;
        }
    }
`