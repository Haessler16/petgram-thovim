import styled from 'styled-components'

export const Form = styled.form`
    padding: 10px 0;
    &[disabled]{
        opacity: .3;
    }
`
export const Input = styled.input`
    display: block;
    width: 100%;
    margin-bottom: 8px;
    padding: 8px 4px;
    border-radius: 3px;
    border: 1px solid #ccc;
    &[disabled]{
        opacity: .3;
    }
`

export const Title = styled.h2`
    font-size: 22px;
    font-weight: 600;
    padding: 6px 0;
`

export const Error = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: red;
`
