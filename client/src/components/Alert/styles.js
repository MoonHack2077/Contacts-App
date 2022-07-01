import styled from 'styled-components'
import { primaryColorForm } from '../../constants.js'

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: 310px;
    height: 60px;
    background-color: ${primaryColorForm};
    position: absolute;
    top: 100px;
    right: 0;
    left: 0;
    margin: 0 auto;
    border-radius: 20px;
`

export const Span = styled.span`
    font-weight: bold;
    font-size: 19px;
    color: #fff;
`