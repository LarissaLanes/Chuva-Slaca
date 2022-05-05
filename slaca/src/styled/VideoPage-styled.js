import styled from "styled-components"

export const DivVideo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom:3em;
    gap:3em;

    @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
           flex-direction: column;
           align-items: center;
           /* margin-left: 50px; */
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            flex-direction: column;
            align-items: center;
            width: 100%;
    }
`

export const Section1 = styled.div`
    width: 47.5vw;
    
    @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
           width: 100%;
           /* max-width: 110vw; */
           /* min-width: 90vw; */
           margin-left: 12vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            min-width: 96vw;
     }

    div{
        h2{
            color:#ED7839;
            margin-top: 1em;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 900;

            @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
                font-size: 23px;
                /* flex-wrap:wrap;
                display: flex; */
            }

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                    font-size: 16px;
            }
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
            width: 90vw;
            min-width: 60vw;
        }
    }
    
    section{
        @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
            height: 45vh;
            border: solid red;
        }

         
        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                border: solid green;
                height: 35vh;
            }
        
        article{
            z-index: 0;
            background: rgba(141, 53, 6, 0.521); 
            width: 46vw;
            max-width:47vw;
            min-width: 46vw;
            height: 53vh;
            max-height: 51vh;
            min-height: 30vh;
            border-radius: 3px;      
            padding :1em;

            @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
                width: 86vw;
                height: 10vh;
                min-width: 85vw;
                min-height: 46vw;
             }
            
             @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                width: 50vw;
                height: 22vh;
                min-width: 89vw;
                min-height: 13vh;
            }

            /* h1{
                color: white;
                font-size:34px; 
                border: solid;

                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                    
                }
            } */

            div{
                margin-left: 2em;
                display: inline-block;
                line-height: 0.5em;

                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                    margin-left: 8em ;
                }
            }

            /* h3, h2{
                color: white;
                font-size:22px; 

                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                        font-size: 2px;
                        flex-wrap: wrap;
                        line-height: 1em;
                 }
            }

            img{  
                height: 10vh;
                width: 5vw;
                border-radius: 50%;
                border: solid 1px #ED7839;
                padding: 5px;
                margin-top: 11em;
                display: inline;
                object-fit:cover;
                object-position: center;
                
                @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
                    width: 10vw;
                    height: 7vh;
                }

                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                    width: 12vw;
                    height: 6vh;
                } */
            }
        }        
    }
`

export const Section2 = styled.div`
    width: 17vw;

    @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
        width: 90vw;
        /* border: solid; */
        /* height: 70vh; */
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 90vw;
            /* border: solid red; */
    }

    div{
        display: flex; 
        flex-direction:column;
        align-items: flex-end;
        line-height: 1px;
        /* border: solid green; */

      
    
        h4{
            color:#ED7839;
            font-family: 'Roboto';
            font-weight: 500;
            font-style:normal;

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                font-size: 13px;
            }
        }

        ul{
            gap:0.5em;
            list-style:none;
            display: flex;

            li{

                button{
                    border:none;
                    height:2.2em;
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

    section{
        height: 54vh;
        /* border: solid yellow; */

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
            height: 50vh;
            /* max-height: 5vh; */
            /* min-height: 49vh; */
        }

        article{
            border-radius: 4px 4px 0px 0px;
            background-color:#FDF1EB;
            border-bottom: solid 1px #ECECEC;

            h2{
                color:#4E4E4E;
                margin-left: 1em;

                @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
                    font-size: 19px;
                }

                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                    font-size: 13px;
                } 
            }
        }
    }

    aside{
        padding:1em;
        position: static;

        h5{
            color: #4E4E4E;
            font-size: 14px;
            font-family: 'Quicksand';

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                    font-size: 12px;
            } 
        }

        p{
            color: #757575;
            font-family: 'Quicksand';
            font-weight: 500;
            font-size: 14px;
            line-height: 1.3em;

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                    font-size: 12px;
            } 
        }

        h4{
            color: #BFBFBF;
            font-size: 0.9em;

         
        }
    }
`

