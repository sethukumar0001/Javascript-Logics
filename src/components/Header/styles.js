import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  display: flex;
  background: #282a36;
  box-shadow: 0 0 10px 2px;

  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  
  > svg {
    // position: fixed;
    color: #fff;
    width: 25px;
    height: 25px;
    margin-top: 22px;
    margin-left: 32px;
    cursor: pointer;
  }
`;
