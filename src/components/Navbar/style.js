import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { FadeIn } from '../../styles/Animations'

export const Nav = styled.nav`
    display:flex;
    align-items: center;
    justify-content: space-around;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    position: fixed;
    margin: 0 auto;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 500px;
    width: 100%;
    height: 48px;
    object-fit: cover;
    z-index: 1000;
`
export const Link = styled(LinkRouter)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #777;
    height: 100%;
    width: 100%;
    text-decoration: none;

    &[aria-current]{
        color:#000;
        &:after{
            ${FadeIn('0.5s')}
            content: ".";
            position: absolute;
            bottom: 0;
            font-size: 24px;
            font-weight: 20px;
    }
}
`
