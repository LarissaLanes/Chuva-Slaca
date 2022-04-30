import styled from "styled-components"

export const DivCreateTopic = styled.div`
    /* border: solid black 1px; */
    /* height: 90vh; */
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 3em;

    div{
        /* border:solid 1px green; */
        width: 67vw;
        max-width: 67vw;
        display: grid;
        /* grid-template-rows: 1fr 1fr; */


        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        width: 90vw;
        max-width: 90vw;

//tablet




}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            width: 90vw;
            max-width: 90vw;
        }

        section{
            background-color:#FDF1EB ;
            border-bottom: solid 1px #ECECEC;
            border-radius: 3px 3px 0px 0px;
            width: 67vw;
            max-width: 67vw;

            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                width: 90vw;
                max-width: 90vw;

           //tablet

      
         

    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            //celulares
            width: 90vw;
            max-width: 90vw;
        }

            h2{
                color: #4E4E4E;
                margin-left: 1em;

                @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
           //tablet
           /* margin-left: 25vw; */
           font-size: 19px;
         

    }
                
            }

        }

        
    }



`