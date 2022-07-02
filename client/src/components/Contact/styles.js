import styled from 'styled-components'
import { primaryColorForm } from '../../constants.js'

export const Container = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${primaryColorForm};
    border-radius: 20px;
    padding: 20px;
`
export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 100px);
    place-items: center;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background-color: #000;
    border-radius: 0 0 20px 20px;
`

export const Button = styled.button`
    width: 100%;
    //height: 60px;
    color: #fff;
    //background-color: ${props => props.bg}
`