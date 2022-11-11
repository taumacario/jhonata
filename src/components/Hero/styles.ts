import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  gap: 6rem;
  align-items: center;
  justify-content: center;
  height: 90vh;
  min-height: 600px;
  max-height: 900px;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 4rem;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`

export const InnerText = styled.div`
  margin: 0 auto;
  flex: 1;

  h1 {
    font-size: 4.2rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 6rem;
    max-width: 45rem;
  }
`
export const Image = styled.figure`
  flex: 1;
  max-width: 67rem;
  margin: 0 auto;

  img {
    object-fit: cover;
    width: 100%;
  }
`