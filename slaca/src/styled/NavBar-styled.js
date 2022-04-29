import styled from "styled-components"

export const DivBar = styled.div `
    /* border:solid 1px orange; */
    display: flex;
    flex-direction:column;
    /* grid-template-rows: 0.5fr 2fr 3fr; */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    position: fixed;
    height: 100%;
    background-color: white ;
    /* width: 19.2vw; */
   


    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
              /* border: solid red; */
              /* width: 24vw; */
              grid-template-rows: 0.1fr 0.5fr 3fr;
              /* display: block; */
              /* position: absolute; */
              /* height: 40vh; */
               /* tablets */

                div{
                    /* width: 24.3vw;                   */
                }
            
               
                }
        
    div{
        /* border: solid yellow 1px; */
        /* background-color: white ; */
        /* height: 100%; */
        /* z-index:0; */
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
           //tablet
            max-width: 26vw;
            width: 26vw;
            /* height: 100%; */
         

    }
        
        img{
            height: 38vh;
            /* border: solid; */
            /* margin-top: 6em; */

            
                @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                 height:23vh ;
                 max-height: 23vh;
                 object-fit: cover;
                 object-position: center;
                  /* tablets */
                }
        }
        
        ul{
            list-style:none;
            /* position: absolute; */
            /* width: 17.3vw; */
            /* border: solid; */

          
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
    /* height: 10.5vh; */
    justify-content:center;
    /* position:relative; */
    width: 39vh;
    /* border:solid red; */
    z-index: 0;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                 /* height:9vh ; */
                  /* tablets */
    }

    h1{
        display: flex;
        color: white;
        font-size: 38.5px;

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                 font-size: 35px
                  /* tablets */
            }
    }

    

  


`