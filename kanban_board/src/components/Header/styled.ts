import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    width: 100%;
    box-sizing: border-box;
    padding: 0.8em 4em;
    background-color: #f9fafc;
    color: #1d293a;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h1`
    font-size: 1.7em;
`

export const Button = styled.button`
    font-size: 3.5vh;
    width: 4vh;
    height: 4vh;
    align-items: center;
    justify-content: center;

    color: #586271;
    border: 1px solid #586271;
    border-radius: 50%;
    display: flex;
    background: none;

    cursor: pointer;
    &:hover {
        background-color: rgb(231, 236, 241);
    }
`
