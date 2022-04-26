import styled from "styled-components"

export const DivVideo = styled.div`
    display: grid;
    grid-template-rows: 0.5fr 5fr;
    height: 76vh; 

    div{
        border: solid grey 1px;
    }
`

export const Section1 = styled.div`
    display: grid;
    grid-template-columns: 5fr 2fr;

    div{
        border: solid orange 1px;
        margin-left: 4em;
        width: 43vw;
        height: 13vh;

        h2{
            color:#ED7839;
        }
    }

    section{
        border: solid orange 1px;
        width: 15vw;
        height: 13vh;
        display: flex;
        flex-direction:column;
        align-items: flex-end;
            
        
        h4{
            border: solid orange 1px;
            color:#ED7839;
            
        }

        ul{
            border: solid blue 1px;
            gap:1em;
            list-style:none;
            display: flex;
            flex-direction:row;
            

            li{
                
                button{
                    border:none;
                    height:3em;
                    
                }
            }

        }

    }
  
    
`

export const Section2 = styled.div`
    display: grid;
    grid-template-columns: 5fr 2fr;
 

    div{
        border: solid red 1px;
        width: 43vw;
        height: 50vh;
        margin-left: 4em;

        h1{
            color: white;
        }

        article{
            display: flex;
            


            h1,h3{
                color: white;
            }
        }

    }

    section{
        border: solid red 1px;
        width: 15vw;
        height: 50vh;
        display: grid;
        grid-template-rows: 0.5fr 4fr;
        

        article{
            border:solid 1px purple;
            background-color:#FDF1EB;
            
            h2{
                color:#4E4E4E;
            }
        }
    }

    aside{
        border:solid 1px;
        margin:1em;
    }
`