import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  justify-content: center;
  height: 90vh;
  min-height: 600px;
  max-height: 900px;
  width: 100%;
`

export const InnerText = styled.div`
  margin: 0 auto;

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
  max-width: 67rem;
  margin: 0 auto;

  img {
    object-fit: cover;
    width: 100%;
  }
`