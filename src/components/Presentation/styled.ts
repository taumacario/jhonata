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
  padding-block: 6rem;
`

export const InnerText = styled.div`
  h3 {
    font-size: 2.2rem;
  }
`

export const PresentationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 4rem;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  }

  img {
    width: auto;
    height: 3rem;
  }

  a{
    margin-top: 2rem;
    max-width: 23rem;
    color: var(--white);
    font-weight: 600;
    font-size: 1.4rem;
  }
`