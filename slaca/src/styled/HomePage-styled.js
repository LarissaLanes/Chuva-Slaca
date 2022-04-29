import styled from "styled-components"

export const DivHome = styled.div`
    /* border:solid 1px green; */
    display: grid;
    grid-template-columns: 1.2fr 5fr;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
           //tablet
           /* display: flex; */
           grid-template-columns:1fr;
           /* border: solid; */
           align-items: center;

           div{
               /* border: solid red; */
               /* width: 60vw; */
               
           }

         

    }
    
`