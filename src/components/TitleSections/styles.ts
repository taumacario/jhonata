import styled from "styled-components";

interface TitleProps {
  alignCenter: boolean
}

export const Title = styled.h3<TitleProps>`
  font-size: 2.8rem;
  text-align: ${props => props.alignCenter ? "center" : "left"};;
`