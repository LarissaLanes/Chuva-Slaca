import styled from "styled-components"

export const DivBar = styled.div`
    border:solid 1px orange;
    display: grid;
    grid-template-rows: 1fr 5fr 3fr;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    position: fixed;

    div{
        border: solid yellow 1px;

        img{
            height: 39vh;
        }
    }

    
`
export const SlacaHeader = styled.div`
    background: linear-gradient(180deg, #FFB354 30%, #EE7A3A 100%);
    display: flex;
    justify-content:center;

    h1{
        display: flex;
        color: white;
        font-size: 35px;
    }

    
`