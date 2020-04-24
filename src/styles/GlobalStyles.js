import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    *, *:after, *:before{
        box-sizing: inherit;
    }
    ul, li, h1, h2, h3, p, button{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style:none;
    }
    button{
        background: transparent;
        border: none;
        outline: none;
    }
    body{
        background: #fefefe;
        overscroll-behavior: none;
        max-width: 500px;
        height: 100vh;
        width: 100%;
        margin: 0 auto;
    }
    #app{
        box-shadow: 0 0 10px rgba(0,0,0,.5);
        overflow-x: hidden;
        min-height: 100vh;
        padding-bottom: 10px;
    }
`
