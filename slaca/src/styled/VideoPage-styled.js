import styled from "styled-components"

export const DivVideo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom:3em;
    gap: 1em;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
           flex-direction: column;
           align-items: center;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            flex-direction: column;
            align-items: center;
            width: 100%;
    }
`

export const Section1 = styled.div`
    width: 47.5vw;
    
    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
           width: 89vw;
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

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                    font-size: 16px;
            }
        }
    }
    
    section{
        article{
            z-index: 0;
            background: rgba(141, 53, 6, 0.521); 
            width: 45.2vw;
            height: 50vh;
            max-width: 42vw;
            max-height: 60vh;
            border-radius: 3px;      
            padding :1em ;

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                     width: 86vw;
                height: 43vh;
                min-width: 85vw;
                min-height: 56vw;
             }
            
             @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                width: 100%;
                height: 51vh;
                min-width: 90vw;
                min-height: 90vw;
            }

            h1{
                color: white;
                font-size:34px; 

                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                            font-size:20px; 
                }
            }

            div{
                margin-left: 2em;
                display: inline-block;
                line-height: 0.5em;

                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                            margin-left: 8em ;
                }
            }

            h3, h2{
                color: white;
                font-size:22px; 

                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                            font-size: 16px;
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
                
                @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                             width: 11vw;
                    height: 10vh;
                }

                @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                            width: 12vw;
                    height: 6vh;
                }
            }
        }        
    }
`

export const Section2 = styled.div`
    width: 17vw;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        width: 90vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 90vw;
    }

    div{
        display: flex; 
        flex-direction:column;
        align-items: flex-end;
        line-height: 1px;
    
        h4{
            color:#ED7839;
            font-family: 'Roboto';
            font-weight: 500;
            font-style:normal;
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
        article{
            border-radius: 4px 4px 0px 0px;
            background-color:#FDF1EB;
            border-bottom: solid 1px #ECECEC;

            h2{
                color:#4E4E4E;
                margin-left: 1em;

                @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                             font-size: 19px;
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
        }

        p{
            color: #757575;
            font-family: 'Quicksand';
            font-weight: 500;
            font-size: 14px;
            line-height: 1.3em;
        }

        h4{
            color: #BFBFBF;
            font-size: 0.9em;
        }
    }
`

