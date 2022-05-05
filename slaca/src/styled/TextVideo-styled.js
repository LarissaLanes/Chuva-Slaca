import styled from "styled-components"

export const Text = styled.div`
    /* border:solid red; */
    display: grid;
    grid-template-rows: 1fr 3.4fr;
    /* width: 40vw; */
  
    h3{
        color: #FFFFFF;
        font-size: 24px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
        grid-template-rows: 1fr 3.3fr;

        h3{
            font-size: 19px;
            margin: 1em;
        }
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        grid-template-rows: 1fr 1fr;

        h3{
            font-size: 11px;
            margin: 1px;
        }
       
    } 

`

export const DivImg = styled.div`
    /* border: solid pink; */
    display: grid;
    grid-template-columns: 1fr 7fr;
    align-items: end;
    margin: 1em;


    @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
        /* width: 90vw; */
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        margin-bottom: 2em;
      
    } 

    img{
        height: 10vh;
        width: 5vw;
        border-radius: 50%;
        border: solid 1px #ED7839;
        object-fit:cover;
        object-position: center;
        padding: 5px;

        @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
            height: 6vh;
            width: 9vw;
            /* margin-bottom: 1em; */
      
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            height: 4vh;
            width:8vw;
            margin-bottom: 10px;
        }
    }

    div{
        /* border: solid; */
        line-height: 0.5px;
        margin-left: 1em;

        h1{
            font-size: 34px;
            color:#FFFFFF;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 900;
            letter-spacing: 0.05em;
        }

        h4{
            font-size: 20px;
            color:#FFFFFF;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 900;
            letter-spacing: 0.05em;
        }



        @media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
           /* width: 40vw; */
           /* min-width: 30vw; */

           h1{
               font-size:22px;
           }

           h4{
               font-size: 16px;
           }
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {

            h1{
                font-size: 18px;
            }

            h4{
                font-size: 11px;
            }
        } 
    }
`

