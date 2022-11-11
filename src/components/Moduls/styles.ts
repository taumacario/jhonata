import styled from "styled-components";
import { CardStyle } from "../Card/styles";

export const Wrapper = styled.section`
  width: 100%;

  ${CardStyle} {
    width: calc(100%/3 - 8rem);
    transition: background 0.3s;

    &:hover {
      background-color: var(--purple-10);
      border-color: transparent;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      width: calc(100%/2 - 4rem);
    }
  }
`

export const Content = styled.div`
  padding-block: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: 4rem;
`