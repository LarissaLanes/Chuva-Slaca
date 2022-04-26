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
    gap:1em;

    div{
        border: solid orange 1px;
        margin: 2em;
    }
  
    
`

export const Section2 = styled.div`
    display: grid;
    grid-template-columns: 5fr 2fr;
    gap:1em;
 

    div{
        border: solid red 1px;
        margin: 2em;
    }
`