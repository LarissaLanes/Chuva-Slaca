import styled from "styled-components"

export const DivQuestions = styled.div`
    /* display: grid; */
    /* grid-template-rows: 1fr 1fr; */
    /* gap: 1px; */
    justify-content:center;
    /* border:solid red; */
    display: flex;
    /* box-sizing: border-box; */

    aside{
        /* border: solid green; */
        display: flex;
        gap: 1em;

    }

    article{
        /* border:solid red; */
        border:  1px solid #E7E7E7;
        width: 60vw;
        /* padding: 1em; */
        border-radius: 4px;
        margin: 1em;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
        /* display: block; */
        /* box-sizing: border-box; */
        
        

        div{
            width: 60vw;
            color: #757575;
            display: flex;
            /* gap:1em; */
            /* border:solid red; */
            flex-direction:column;
            box-sizing: border-box; 
            

        }

        h4{
            color: #ED7839;
            font-size:16px;
            line-height: 0.5em;
            
        }

        h5{
            color: #5C5C5C;
        }

        p{
            color: #4D4D4D;
            font-size:14px;

        }
    }



`

