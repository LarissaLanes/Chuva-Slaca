import styled from "styled-components"

export const DivBar = styled.div`
    border:solid 1px orange;
    display: grid;
    grid-template-rows: 0.5fr 2fr 3fr;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    position: fixed;
    height: 99vh;

    div{
        border: solid yellow 1px;

        img{
            height: 38vh;
        }
        
        ul{
            list-style:none;
          
            li{
                border-bottom:solid 2px;
                line-height: 3em;
                color:#E7E7E7;

                a{
                    color:#725C5C;
                    font-size: 1.3em;
                }

            }

            li:hover{
                cursor:pointer;
                background-color: #FDF1EB;
                
            }
        }

        ul:hover{
            
        }
    }

    
`
export const SlacaHeader = styled.div`
    background: linear-gradient(180deg, #FFB354 30%, #EE7A3A 100%);
    display: flex;
    justify-content:center;

    h1{
        display: flex;
        color: white;
        font-size: 35px;
    }

    
`