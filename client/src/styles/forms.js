import styled from 'styled-components'
import { primaryColorForm } from '../constants.js'

export const FormContainer = styled.div`
    display: grid;
    place-items: center;
    background-color: #000;
    min-width: 100vw;
    min-height: 100vh
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    outline: 1px solid ${primaryColorForm};
    justify-content: space-between;
    min-height: 260px;
    max-width: 300px;
    padding: 20px;
    border-radius: 20px;
    transform: scale(1.1);
    z-index: 0;
`

export const InputContainer = styled.div`
    width: 100%;
`

export const Input = styled.input`
    padding: 12px 8px;
    //padding-right: 0;
    width: 100%;
    margin-bottom: 20px;
    outline: 1px solid ${primaryColorForm};
    background-color: #000;
    border-radius: 5px;
        color: #fff;

    &::placeholder {
        color: #fff;
    }

    &:focus &::placeholder{
        color: #eee
    }
    
    &:hover{
        filter: brightness(.8)
    }
`

export const Button = styled.button`
    padding: 10px;
    width: 100%;
    background-color: ${primaryColorForm};
    color: #fff;
    border-radius: 8px;
    cursor: pointer;

    &:hover{
        filter: brightness(.8)
    }
`