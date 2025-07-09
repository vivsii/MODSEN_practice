import styled from 'styled-components'
import { lighten } from 'polished'

export const ColumnWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${(props: any) => props.theme.bg};
    padding: 20px;
    border-radius: 40px;
    height: 25%;
    width: 35vh;
`

export const ColumnHeader = styled.header`
    display: flex;
    align-items: center;
    background: ${(props: any) => props.theme.main};
    border-radius: 100px;
    padding: 0 20px;
    height: 6vh;
    width: 32vh;
`

export const Title = styled.h1`
    flex: 1;
    width: 10px;
    word-break: break-word;
    white-space: normal;
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
`
export const TitleInput = styled(Title).attrs({ as: 'input' })`
    flex: 1;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    color: #fff;
    width: 10%;
    outline: none;
    border: none;
    background: transparent;
    font-size: 1.5em;
    font-weight: bold;
`

export const Count = styled.h1`
    width: 4.5vh;
    height: 4.5vh;
    border-radius: 50%;
    background: white;
    color: ${(props: any) => lighten(0.12, props.theme.main)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 24px;
`

export const Button = styled.button`
    width: 4vh;
    height: 4vh;
    border-radius: 50%;
    background: none;
    border: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const DeleteButton = styled.button`
    opacity: 0;
    pointer-events: none;
    width: 4vh;
    height: 4vh;
    border-radius: 50%;
    background: none;
    border: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;

    ${ColumnHeader}:hover & {
        opacity: 1;
        pointer-events: auto;
    }
`

export const AddTask = styled.button`
    border: none;
    border-radius: 40px;
    padding: 5px 10px;
    color: ${(props: any) => props.theme.main};
    background: ${(props: any) => lighten(0.35, props.theme.main)};
    font-size: 1em;
    cursor: pointer;
`
