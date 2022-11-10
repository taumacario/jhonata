import styled from "styled-components";
import { CardStyle } from "../Card/styles";
import {Tag, Figure} from "../ModulsCard/styles"

export const Wrapper = styled.section`
  width: 100%;
`

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
  }

  ${Tag} {
    background: transparent;
    padding: 0;
    border-radius: 0;
  }
`