import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Ops = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    outline: 1px solid blue;
    color: #fff;
    position: absolute;
    bottom: 0;
    gap: 20px
`

export const Span = styled.span`
    font-size: ${ props => `${props.fz}px` };
    line-height: 2
`