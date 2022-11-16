import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  height: 90vh;
  min-height: 600px;
  max-height: 900px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column-reverse;
    gap: 0;
    padding-block: 15rem 5rem;
    min-height: auto;
    height: 100%;
  }
`

export const InnerText = styled.div`
  flex: 1;

  @media (min-width: 320px) and (max-width: 767px) {
      margin-top: -13rem;
      z-index: 2;
    }

  h1 {
    font-size: 4.2rem;
    margin-bottom: 3rem;
    text-transform: uppercase;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 3.8rem;
      text-align: center;
    }
  }

  p {
    margin-bottom: 6rem;
    max-width: 45rem;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 1.4rem;
      text-align: center;
    }
  }
`
export const Image = styled.figure`
  flex: 1;
  max-width: 60rem;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 767px) {
  
    &::before {
      background-image: linear-gradient(0deg,#1c1232 40%,transparent);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      position: absolute;
    }
  }
`