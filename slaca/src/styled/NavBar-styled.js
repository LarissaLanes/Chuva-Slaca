import styled from "styled-components"

export const DivBar = styled.div `
    display: flex;
    flex-direction:column;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    position: fixed;
    height: 100%;
    background-color: white;
   
    @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
        width: 30vw;
     }
        
    div{
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            max-width: 26vw;
            width: 26vw;
        }
        
        img{
            height: 32vh;
            margin-left: 30px;
            min-width: 10vh;
            
                @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
                    height: 17vh ;
                    max-height: 25vh;
                    object-fit: cover;
                    object-position: center;
                }
        }
        
        ul{
            list-style:none;
          
            li{
                border-bottom:solid 1.5px;
                line-height: 3em;
                color:#E7E7E7;

                a{
                    color:#725C5C;
                    font-size: 1.3em;
                    margin-left:1em;
                    text-decoration: none;
                    font-family: 'Quicksand', sans-serif;
                    font-style: normal;
                    font-weight: 500;

                    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                        margin-left: 0;
                        font-size: 1.0em;
                    }
                }
            }

            li:hover{
                cursor:pointer;
                background-color: #FDF1EB;
                border-bottom: none;
            }
        }    
`

export const SlacaHeader = styled.div `
    background: linear-gradient(180deg, #FFB354 30%, #EE7A3A 100%);
    display: flex;
    justify-content:center;
    width: 37vh;
    z-index: 0;

    @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
            width: 30vw;
            max-width: 35vw;
            min-width:30vw;
        }

    h1{
        display: flex;
        color: white;
        font-size: 39px;
        color: "#FFFFFF";
        font-family: "Roboto";
        font-style: ;

        @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
            font-size: 20px;
        }
    }
`