import styled from "styled-components"
import { CardStyle } from "../Card/styles"

export const Wrapper = styled.div`
  .swiper {
    padding-top: 12rem;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    height: auto;  
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 6rem;
    height: 6rem;
    top: 6%;
    color: #412c7b;
    border: 1px solid;
    border-radius: 0.8rem;
  }
  .swiper-button-prev {
    right: 7%;
    left: unset;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-disabled {
    background-color: #15152a;
  }

  .swiper-button-next:after, 
  .swiper-button-prev:after {
    font-size: 2rem;
  }

  ${CardStyle} {
    transition: background 0.3s;

    &:hover {
      background-color: var(--purple-10);
      border-color: transparent;
    }
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Title = styled.h3`
  font-size: 2.8rem;
`