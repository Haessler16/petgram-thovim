import styled from 'styled-components'
import { FadeIn } from '../../styles/Animations'

export const Article = styled.article`
    min-height: 200px;
`
export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    position: relative;
    padding: 56.25% 0 0 0;
    width: 100%;
`
export const Img = styled.img`
    ${FadeIn('2s', 'ease')}
    position: absolute;
    height:100%;
    width: 100%;
    object-fit: cover;
    top: 0;
    box-shadow: 0 10px 14px rgba(0,0,0,.2);
`
