import styled from "styled-components"

export const DivBar = styled.div `
    /* border:solid 1px orange; */
    display: grid;
    grid-template-rows: 0.5fr 2fr 3fr;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    position: fixed;
    height: 99.6vh;
    width: 19.2vw;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
              /* border: solid red; */
              width: 24vw;
              grid-template-rows: 0.1fr 0.5fr 3fr;
              /* height: 40vh; */
               /* tablets */

                div{
                    width: 24vw;                  
                }
            
               
                }

    div{
        /* border: solid yellow 1px; */
        
        img{
            height: 38vh;

            
                @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                 height:22vh ;
                  /* tablets */
                }
        }
        
        ul{
            list-style:none;
            /* position: absolute; */
            /* width: 17.3vw; */
          
            li{
                border-bottom:solid 1.5px;
                line-height: 3em;
                color:#E7E7E7;
                /* border: solid green; */

                @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                    /* border: red solid; */
                    /* border-bottom:solid 0.5px; */
                  
                  /* tablets */
                }
               

                a{
                    color:#725C5C;
                    font-size: 1.3em;
                    margin-left:1em;
                    text-decoration: none;
                    /* border: solid green; */
                    
                    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                    /* border: red solid; */
                    margin-left: 0;
                    font-size: 1.0em;
                  /* tablets */
                }
                    
                }
            }

            li:hover{
                cursor:pointer;
                /* border: solid; */

                background-color: #FDF1EB;
                /* list-style-type: square; */
                /* color: red; */
                /* height: 60px; */
                border-bottom: none;
            }
        }    
`

export const SlacaHeader = styled.div `
    background: linear-gradient(180deg, #FFB354 30%, #EE7A3A 100%);
    display: flex;
    justify-content:center;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                 height:7vh ;
                  /* tablets */
    }

    h1{
        display: flex;
        color: white;
        font-size: 37px;

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                 font-size: 23px
                  /* tablets */
            }
    }

    
`