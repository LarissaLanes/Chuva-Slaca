import styled from "styled-components"

export const DivHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
           grid-template-columns:1fr;
           align-items: center;
    }
`