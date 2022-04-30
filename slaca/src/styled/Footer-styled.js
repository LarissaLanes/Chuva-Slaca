import styled from "styled-components"

export const DivFooter = styled.div`
    border-top:solid 1px #ECECEC;
    margin-top: 4em;
    margin-bottom: 4em;
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    /* width: 71vw; */
    /* height: 20vh; */
    margin-left: 4em;
    gap:1em;
    /* border: solid; */

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            display: flex;
            flex-direction: column;
            margin-left: 0.5em;
            align-items:center;


            
        }


    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        /* margin-left: 8em; */
        width: 94vw;
        /* height: vh; */

                  /* tablets */
                }

    div{
        /* border: solid; */
        text-align:center;
        margin-top: 1em;

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
              /* margin-left: 2em; */
              margin-top: 2em;

                  /* tablets */
                }
        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
                /* /* height:10vh ; */
                 max-height: 8vh;
                 object-fit: cover;
                 max-width: 49vw; */
                 
                 object-position: center;

            
        }

        img{
            height: 11vh;
            /* border: solid; */

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                    height: 7vh;
                  
                  /* tablets */
                }
                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
                height:10vh ;
                 max-height: 8vh;
                 object-fit: cover;
                 max-width: 49vw;
                 object-position: center;

            
        }
        }

        button{
          /* border: solid black; */
            height: 3.5vh;
            width: 13vw;
            border-radius: 5px;
            border:none;
            color: #FFFFFF;
            font-size: 17px;
            background: linear-gradient(180deg,#71478e 0%, #341947 100%);
            box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.12);

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                    height: 2vh;
                    width: 15vh;
                    font-size: 12px;
                  
                  /* tablets */
                }

                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
                      width: 30vw;
                      height: 1.5em;
            
        }
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

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                font-size: 12px;
            
                  
                  /* tablets */
                }

                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            font-size: 12px;
                

            
        }
        }

        h5{
            color: #5C5C5C;
            font-size:16px;

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                font-size:12px;
                  
                  /* tablets */
                }
                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            font-size:12px;

                

            
        }
        }
    }

`