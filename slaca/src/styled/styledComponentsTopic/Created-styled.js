import styled from "styled-components"

export const DivCreated = styled.div`
    display: flex;
    /* text-align: center; */
    /* justify-content:center; */
    gap: 1em;
    justify-items:center;

    h3{
        color: #ED7839;
    }

    p{
        color: #595959;
        /* font-size: 14px; */
    }

     ul{
         list-style:none;
         display: flex;
         gap: 4em;

         li{
             color: #F0A880;
            
            div{
                display: flex;
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
    }

    button:hover{
        cursor:pointer;
        color: #FEB254;
        transition: all 0.9s;
        -webkit-filter: transition(1px);
        background: #FDF1EB;
    }
  
`