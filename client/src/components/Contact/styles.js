import styled from 'styled-components'
import { primaryColorForm } from '../../constants.js'

export const Container = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${primaryColorForm};
    border-radius: 20px;
    padding: 20px;
    position: relative;
`
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background-color: #000;
    border-radius: 0 0 20px 20px;
    position: absolute;
    bottom: 0;
`

export const Button = styled.button`
    width: 100%;
    //height: 60px;
    color: #fff;
    //background-color: ${props => props.bg}
`