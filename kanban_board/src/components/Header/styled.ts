import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    color: #1d293a;
    justify-content: space-between;
    display: flex;
    align-items: center;
    background: ${(props: any) => props.theme.bg};
    padding: 0 32px;
    height: 100px;
`

export const Title = styled.h1`
    flex: 1;
    color: #1d293a;
    font-size: 2rem;
    font-weight: bold;
`

export const Button = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: none;
    border: 1px solid #1d293a;
    color: #1d293a;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    &:hover {
        background-color: rgb(231, 236, 241);
    }
`
