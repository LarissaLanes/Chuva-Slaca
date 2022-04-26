import styled from "styled-components"

export const DivBar = styled.div`
    border:solid 1px orange;
    display: grid;
    grid-template-rows: 1fr 5fr 3fr;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    position: absolute;

    div{
        border: solid yellow 1px;

        img{
            height: 39vh;
        }
    }

    
`
export const SlacaHeader = styled.div`
    background-color: orange;

    h1{
        color: white;
    }

    
`