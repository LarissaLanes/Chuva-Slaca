import styled from "styled-components"

export const DivVideo = styled.div`
    display: grid;
    grid-template-rows: 0.5fr 5fr;
    height: 68vh; 

    div{
        /* border: solid grey 1px; */
    }
`

export const Section1 = styled.div`
    display: grid;
    grid-template-columns: 5fr 2fr;

    div{
        /* border: solid orange 1px; */
        margin-left: 9.5em;
        width: 43vw;
        height: 13vh;

        h2{
            color:#ED7839;
        }
    }

    section{
        /* border: solid orange 1px; */
        width: 14.5vw;
        height: 13vh;
        display: flex;
        flex-direction:column;
        align-items: flex-end;
            
        
        h4{
            /* border: solid orange 1px; */
            color:#ED7839;
        }

        ul{
            /* border: solid blue 1px; */
            gap:1em;
            list-style:none;
            display: flex;
            flex-direction:row;

            li{
                
                button{
                    border:none;
                    height:3em;
                    width: 4em;
                    background: #ED7839;
                    border-radius: 4px;

                    img{
                        height: 1.4em;
                        
                    }
                    
                }

                button:hover{
                    background: #FFB354;
                    cursor: pointer;
                }
            }

        }

    }
  
    
`

export const Section2 = styled.div`
    display: grid;
    grid-template-columns: 5fr 2fr;
 

    div{
        /* border: solid red 1px; */
        width: 43vw;
        height: 49vh;
        margin-left: 9.5em;

        h1{
            color: white;
            
        }

        article{
            z-index: 0;
            background: rgba(141, 53, 6, 0.521); 
            width: 41vw;
            height: 46vh;
            position:absolute;
            /* justify-content: center; */
            border-radius: 3px;      
            /* border: solid;      */
            padding :1em ;
            /* display: flex;
            flex-direction: column; */
            /* display: inline; */
            

            h1{
                color: white;
                /* display: inline; */
                /* margin-bottom: 70vh; */
                font-size:34px; 
               
            }

            div{
                height: 17vh;
                width: 22vw;
                /* border: solid; */
                margin-left: 2em;
                display: inline-block;
                line-height: 0.5em;
               
            }

            h3{
                color: white;
                /* display: inline; */
                /* margin-bottom: 70vh; */
                font-size:22px; 
                
            }

            h2{
                color: white;
            }

            img{  
                height: 10vh;
                width: 5vw;
                border-radius: 50%;
                border: solid 1px #ED7839;
                padding: 5px;
                margin-top: 11em;
                display: inline;
                /* margin-top: 20vh ; */
                /* display: inline; */
                
               
            }
        }

    }

    section{
        /* border: solid red 1px; */
        width: 14.5vw;
        height: 49vh;
        display: grid;
        grid-template-rows: 0.5fr 4fr;
        

        article{
            /* border:solid 1px purple; */
            background-color:#FDF1EB;
            border-bottom: solid 1px #ECECEC;
            
            h2{
                color:#4E4E4E;
                margin-left: 1em;
            }
        }
    }

    aside{
        /* border:solid 1px; */
        padding:1em;
        position: static;
        /* line-height: 1.5em; */

        h5{
            color: #4E4E4E;
            font-size: 0.9em;
        }

        p{
            color: #757575;
        }

        h4{
            color: #BFBFBF;
            font-size: 0.9em;
        }
    }
`