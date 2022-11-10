import styled from "styled-components";

interface CardStyleProps {
  active: boolean
}

export const CardStyle = styled.div<CardStyleProps>`
  background: ${props => props.active ? "#7B4AE21A" : "transparent"};
  //background: transparent;
  border: 1px solid;
  border-color:  ${props => props.active ? "transparent" : "#7B4AE280"};
  //border-color: var(--white-50);
  border-radius: 1.6rem;
  padding: 2rem;
`