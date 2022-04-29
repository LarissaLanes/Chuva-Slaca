import styled from "styled-components"

export const DivVideo = styled.div`
    display: flex;
    flex-direction: row;
    /* grid-template-columns: 1.5fr 1fr; */
    /* height: 68vh;  */
    /* align-content: center; */
    /* border: solid black ; */
    justify-content: center;
    /* margin-bottom: 3em; */
    margin-bottom:3em;
    gap: 3em;
`

export const Section1 = styled.div`
    /* display: grid;
    grid-template-columns: 5fr 2fr; */
    /* border: solid green; */
    width: 47.5vw;
    /* height: 67vh; */
    div{
        /* border: solid orange 1px; */
        /* margin-left: 9.5em; */
        /* width: 43vw;*/
        /* height: 13vh; */
        h2{
            color:#ED7839;
            margin-top: 1em;
        }
    }
    section{
        /* border: solid pink 1px; */
        /* width: 14.5vw;
        display: flex; */
        /* flex-direction:column;
        align-items: flex-end; */
        /* height: 13vh;  */
        article{
            z-index: 0;
            background: rgba(141, 53, 6, 0.521); 
            width: 45.5vw;
            height: 51vh;
            /* position:absolute; */
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
                /* height: 17vh; */
                /* width: 22vw; */
                /* border: solid; */
                margin-left: 2em;
                display: inline-block;
                line-height: 0.5em;
            }
            h3, h2{
                color: white;
                /* display: inline; */
                /* margin-bottom: 70vh; */
                font-size:22px; 
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
`

export const Section2 = styled.div`
    /* display: grid;
    grid-template-columns: 5fr 2fr; */
    /* border: solid red; */
    width: 17vw;

    div{
        /* border: solid red 1px; */
        display: flex;
        flex-direction:column;
        align-items: flex-end;
        line-height: 1px;
        /* width: 43vw; */
        /* height: 13vh; */
        /* margin-left: 9.5em; */
    h4{
    /* border: solid orange 1px; */
        color:#ED7839;
    }

    ul{
        /* border: solid blue 1px; */
        gap:0.5em;
        list-style:none;
        display: flex;
        /* width: 15.5vw; */
        /* flex-direction:row; */
    
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
        /* border: solid yellow 1px; */
        /* width: 14.5vw; */
        /* height: 13vh; */
        /* display: grid;
        grid-template-rows: 0.5fr 4fr; */
        
        article{
            border-radius: 4px 4px 0px 0px;
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

