import styled from "styled-components";

interface TitleProps {
  alignCenter: boolean
}

export const Title = styled.h3<TitleProps>`
  font-size: 2.8rem;
  text-align: ${props => props.alignCenter ? "center" : "left"};

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 2.4rem;
  }
`