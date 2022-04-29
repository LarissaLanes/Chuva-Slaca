import styled from "styled-components"

export const DivText = styled.div`
    /* border: solid red 1px; */
    /* height: 25vh; */
    /* display: grid; */
    /* grid-template-rows: 1fr 3fr; */
    display: flex;
    flex-direction: column;
    align-items:center;


    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        /* tablets */
        /* margin-left: 10vw; */

    }

    div{
        /* border: solid 1px purple; */
        width: 67vw;

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                width: 90vw;
               

           //tablet

      
         

    }
       

        section{
            border: solid 1px #ECECEC;
            border-radius: 3px 3px 0px 0px;
            background-color:#FDF1EB;
            /* border: solid 1px purple; */

            h2{
                color: #4E4E4E;
                margin-left: 1em;

                @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                    font-size: 19px;
                    /* tablets */
                }
            }
        }
        
        article{
            
            p{

                @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        /* tablets */
        font-size: 15px;

    }

            }




        }
    }

 
`