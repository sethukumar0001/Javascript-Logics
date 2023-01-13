import styled from 'styled-components'

export const Container = styled.div`
    background: #171923;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 300px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;
    z-index:1;

    > svg {
        position: absolute;
        color: #fff;
        width: 25px;
        height: 25px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
        // right:0;
        
    }

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 300px;
        }
    }
`

export const Content = styled.div`
    margin-top: 100px;
`