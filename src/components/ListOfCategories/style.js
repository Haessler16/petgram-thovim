import styled, { css } from 'styled-components'
import { FadeIn } from '../../styles/Animations'

export const ListUl = styled.ul`
    display: flex;
    width: 100%;
    overflow: scroll;
    margin: 10px 0;
    ${props => props.fixed && css`
        ${FadeIn('0.5s')}
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 0 rgba(0, 0, 0, .3);
        left: 0;
        margin: 0 auto;
        max-width: 500px;
        padding: 5px;
        position: fixed;
        right: 6px;
        top: -20px;
        transform: scale(0.7);
        z-index: 1;
    `}
`

export const Item = styled.li`
    text-decoration:none;
    padding: 0 8px;
`
