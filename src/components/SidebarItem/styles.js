import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: #1A202C;
    font-size: 20px;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 15px 20px;

    > svg {
        margin: 0 20px;
    }

    &:hover {
        background: #000;
    }
    &:active{
        background: #000;
    }
`