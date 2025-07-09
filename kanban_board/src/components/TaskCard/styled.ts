import styled from 'styled-components'
import { lighten } from 'polished'

export const TaskCardWrapper = styled.div`
    background: #fff;
    border-radius: 20px;
    padding: 8px 20px 8px 14px;
    border: 1px solid rgb(196, 196, 206);
    margin-top: 1.5vh;
    box-shadow: 0 1px 10px 0 rgba(150, 150, 183, 0.41);
    width: 32vh;
    position: relative;
`

export const Priority = styled.h1`
    display: inline-block;
    background: ${(props: any) => lighten(0.35, props.theme.priority)};
    color: ${(props: any) => props.theme.priority};
    font-size: 0.7rem;
    font-weight: 500;
    border-radius: 16px;
    padding: 3px 10px;
`

export const PriorityInput = styled.input`
    border-radius: 16px;
    border: none;
    font-size: 0.7rem;
    padding: 3px 10px;
    background: ${(props: any) => lighten(0.35, props.theme.priority)};
    margin-bottom: 0.6em;
    margin-block-start: 0.67em;
    width: 95%;
    font-size: 0.7rem;
    color: ${(props: any) => props.theme.priority};
    line-height: 1;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 500;
    outline: none;
`

export const Title = styled.h1`
    font-size: 1.1em;
    font-weight: 600;
    margin: 0;
    color: #22223b;
`
export const TitleInput = styled(Title).attrs({ as: 'input' })`
    border: none;
    font-size: 1.1em;
    margin-top: 0.1em;
    padding: 0;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    display: block;
    outline: none;
    background: transparent;
`

export const Description = styled.h1`
    font-weight: 400;
    color: #586271;
    font-size: 0.9em;
`
export const DescriptionInput = styled(Description).attrs({ as: 'input' })`
    border: none;
    padding: 0;
    margin: 10px 0;
    display: block;
    width: 95%;
    outline: none;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 0.9em;
    background: transparent;
`
export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SaveButton = styled.button`
    opacity: 0;
    pointer-events: none;
    background: none;
    border: none;
    padding: 0;
    color: #586271;
    font-size: 0.8em;
    cursor: pointer;
    ${TaskCardWrapper}:hover & {
        opacity: 1;
        pointer-events: auto;
    }
    &:hover {
        text-decoration: underline;
    }
`

export const RemoveButton = styled.button`
    opacity: 0;
    pointer-events: none;
    background: none;
    border: none;
    padding: 0;
    color: #586271;
    font-size: 1em;
    cursor: pointer;
    ${TaskCardWrapper}:hover & {
        opacity: 1;
        pointer-events: auto;
    }
`
