import styled from "styled-components";
import { CardStyle } from "../Card/styles";

export const Wrapper = styled.section`
  margin-block: 9rem 6rem;
  padding-block: 10rem;
  position: relative;

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

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

`
export const BoxOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  width: 100%;

  ${CardStyle} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  p{
    color: var(--white);
    font-weight: 600;
    font-size: 2rem;
  }
`

export const BoxTwo = styled.div`
  margin-top: 3rem;

`

export const TextBoxTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15rem;
  //justify-content: space-between;
`

export const TextContent = styled.div`
  color: var(--purple);
  text-align: center;

  span {
    font-size: 1.4rem;
  }

  p{
    font-size: 1.8rem;
    font-weight: 600;
  }
`