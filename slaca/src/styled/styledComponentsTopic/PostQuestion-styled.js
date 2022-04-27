import styled from "styled-components"


export const DivPostQuestion = styled.div`
    margin-bottom: 3em;
    display: flex;
    margin-left: 1em;

    input{
        width: 40vw;
    }

    h3{
        color: #ED7839;
    }

    p{
        text-align: center;
    }
    
    div{
        display: grid;
        grid-template-columns: 4fr 1fr ;
        width: 68vw;
        
        button{
            height: 4vh;
        }
    }
 
`