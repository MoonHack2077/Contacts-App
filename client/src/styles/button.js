import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 8px;
    //height: 60px;
    color: #fff;
    background-color: #000;

    &:hover{
        filter: opacity(.5)
    }
`