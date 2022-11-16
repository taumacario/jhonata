import styled from "styled-components";
import { CardStyle } from "../Card/styles";
import { Tag } from "../ModulsCard/styles"


export const Content = styled.div`
  padding-block: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-around;
  gap: 4rem;

  ${CardStyle} {
    width: calc(100%/2 - 5rem);
    transition: background 0.3s;

    @media (min-width: 320px) and (max-width: 767px) {
      width: calc(100% - 2rem);
    }
  }

  ${Tag} {
    background: transparent;
    padding: 0;
    border-radius: 0;
  }
`