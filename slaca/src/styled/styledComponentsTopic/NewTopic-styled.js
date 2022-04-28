import styled from "styled-components"

export const DivNewTopic = styled.div`
    display: flex;
    /* text-align: center; */
    /* justify-content:center; */
    gap: 1em;
    justify-items:center;
    margin-bottom: 6vh;


    h3{
        color: #ED7839;
        font-family: "Roboto";
        font-size: 18px;
        font-style: "Bold";
    }

    h4{
        color: #F48F44;
        
    }

    h5{
        color: #F48F44;
        text-decoration-line: underline;
        cursor: pointer;
    }

    p{
        color:#595959;
        font-size: 14px;
        
    }


    button{
        /* margin-bottom: 3em; */
        width: 14vw;
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

    aside{
        /* display: grid; */
    /* grid-template-rows: 1fr 1fr; */
    gap: 1px;
    display: flex;
    justify-content:center;
    /* margin-right: 69vw; */
    margin-bottom: 10em;
    transition: all 0.9s;
    -webkit-filter: transition(1px);

    div{
        /* border:solid red; */
        position: absolute;
        width: 15vw;
        /* height: 12vh; */
        /* margin: 1em; */
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top:3em;
        /* padding: 1em; */
        z-index: 1;
        transition: all 0.9s;
        -webkit-filter: transition(1px);

        h3{
            font-size: 16px;
            color: #707070;
            line-height: 0.5em;
        }

        p{
            color: #ED7839;
            font-size: 14px;
            text-decoration-line: underline;
            cursor: pointer;
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
        width: 58vw;
        padding: 1em;
        border-radius: 4px;
        margin: 1em;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
        position: absolute;
        z-index: 0;

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