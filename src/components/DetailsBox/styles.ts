import styled from "styled-components";

export const Wrapper = styled.section`
  //border-top: 1px solid border #7B4AE233;
  //border-bottom: 1px solid border #7B4AE233;
  margin-top: 15rem;
  padding-block: 10rem;
  position: relative;

  margin-bottom: 10rem;

  &::before{
    border-top: 1px solid #7B4AE233;
    top: 0;
    left: 0;
    right: 0;
    content: '';
    position: absolute;
  }

  &::after {
    border-bottom: 1px solid #7B4AE233;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    position: absolute;
  }
  
`

export const BoxOutline = styled.div`

`

export const BoxFilled = styled.div`

`