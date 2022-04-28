import styled from "styled-components"


export const DivPostQuestion = styled.div`
    margin-bottom: 3em;
    display: flex;
    margin-left: 2.5em;

    h3{
        color: #ED7839;
        line-height: 0.1em;
    }

    p{
        text-align: center;
        color: #5C5C5C;
        
    }
    
    div{
        display: grid;
        grid-template-columns: 4fr 0.1fr 1.5fr ;
        /* border: solid; */
        width: 60vw;
        max-width: 60vw;

       
        article{
            /* border: solid red; */

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
            height: 4vh;
            border-radius: 0px 0px 4px 0px;
            border:none;
            color: #FFFFFF;
            font-size: 17px;
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
